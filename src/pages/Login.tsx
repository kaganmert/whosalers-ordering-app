import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { api } from "../queries/loginWithEmail.generated";

import { Button } from "../components/elements/Button";

const Login: React.FC = (): ReactElement => {
  const [login, { isLoading }] = api.useLoginWithEmailAndPasswordMutation();
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const onSubmit = (formData) => {
    console.log(formData);
    login(formData)
      .unwrap()
      .then(() => navigate("/dashboard"))
      .catch((error) => {
        toast.error("Incorrect email or password");
      });
  };

  return (
    <section className="flex items-stretch min-h-screen text-white ">
      <div className="relative items-center hidden w-1/2 bg-no-repeat bg-cover bg-gradient-to-l from-gray-900 to-gray-600 lg:flex">
        <div className="absolute inset-0 z-0 bg-black opacity-60"></div>
        <div className="z-10 w-full px-24">
          <h1 className="text-5xl font-bold tracking-wide text-left">
            AI-Powered Ordering App for Wholesalers
          </h1>
          <p className="my-4 text-3xl">
            Our app simplifies the ordering process, and boosts productivity and
            consumer satisfaction
          </p>
        </div>
      </div>
      <div className="z-0 flex items-center justify-center w-full px-0 text-center lg:w-1/2 md:px-16">
        <div className="absolute inset-0 z-10 items-center bg-no-repeat bg-cover bg-gradient-to-l from-gray-900 to-gray-600 lg:hidden">
          <div className="absolute inset-0 z-0 bg-black opacity-60"></div>
        </div>
        <div className="z-20 w-full py-6">
          <h1
            className="mb-4 text-5xl font-extrabold tracking-tighter md:text-6xl leading-tighter"
            data-aos="zoom-y-out"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              Log in to your account
            </span>
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
            className="w-full px-4 mx-auto sm:w-2/3 lg:px-0"
          >
            <div className="pt-4 pb-2">
              <input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="block w-full p-4 text-lg text-gray-800 rounded-sm bg-indigo-50"
              />
            </div>
            <div className="pt-4 pb-2">
              <input
                className="block w-full p-4 text-lg text-gray-800 rounded-sm bg-indigo-50"
                type="password"
                {...register("password", { required: true })}
                id="password"
                placeholder="Password"
              />
            </div>

            <div className="px-4 pt-4 pb-2">
              <Button isLoading={isLoading} type="submit" className="w-full">
                Log in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
