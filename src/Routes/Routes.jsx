import {createBrowserRouter} from "react-router-dom";
import HomePage from "../Home/HomePage";
import MainLayout from "../Layout/MainLayout";
import LoginPage from "../AuthPages/LoginPage";
import RegisterPage from "../AuthPages/RegisterPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/home",
            element: <PrivateRoute><HomePage></HomePage></PrivateRoute>,
            loader: () => fetch('http://localhost:4050/jobs')
        },
        {
          path: "/",
          element: <LoginPage></LoginPage>
        },
        {
          path: "/register",
          element: <RegisterPage></RegisterPage>
        }
    ]
  },
]);

export default router;