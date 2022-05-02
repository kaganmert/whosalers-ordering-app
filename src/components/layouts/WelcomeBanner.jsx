function WelcomeBanner() {
  return (
    <div className="relative p-4 mb-8 overflow-hidden rounded-sm bg-gradient-to-r from-cyan-200 to-cyan-400 sm:p-6">
      <div
        className="absolute top-0 right-0 hidden mr-16 -mt-4 pointer-events-none xl:block"
        aria-hidden="true"
      ></div>
      <div className="relative">
        <h1 className="mb-1 text-2xl font-bold text-gray-800 md:text-3xl">
          Welcome back!
        </h1>
      </div>
    </div>
  );
}

export default WelcomeBanner;
