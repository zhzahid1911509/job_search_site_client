import {createBrowserRouter} from "react-router-dom";
import HomePage from "../Home/HomePage";
import MainLayout from "../Layout/MainLayout";
import LoginPage from "../AuthPages/LoginPage";
import RegisterPage from "../AuthPages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <HomePage></HomePage>
        },
        {
          path: "/login",
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