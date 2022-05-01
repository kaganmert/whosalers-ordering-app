import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { LoadingScreen } from "../styles/GlobalStyles";

const Login = lazy(() => {
  return Promise.all([
    import("../pages/Login"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});

const PageNotFound = lazy(() => {
  return Promise.all([
    import("../pages/PageNotFound"),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]).then(([moduleExports]) => moduleExports);
});

function Index() {
  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default Index;

function PublicRoute({ children }) {
  // if auth is true, redirect to /dashboard
  return children;
}
