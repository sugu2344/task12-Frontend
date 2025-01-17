import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login";
import ForgetPassword from "./components/forgetpassword";
import SignUp from "./components/signup";
import Error from "./components/error";
import ChangePassword from "./components/changepassword";
import Dashboard from "./components/dashboard";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/forget-password",
      element: <ForgetPassword />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/update-password",
      element: <ChangePassword />,
    },
    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ];
  let router = createBrowserRouter(routes, {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_skipActionErrorRevalidation: true,
      v7_skipActionStatusRevalidation: true,
      v7_partialHydration: true,
      v7_startTransition: true,
    },
  });
  return (
    <RouterProvider router={router} future={{ v7_relativeSplatPath: true }} />
  );
};

export default App;
