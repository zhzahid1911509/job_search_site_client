import {createBrowserRouter} from "react-router-dom";
import HomePage from "../Home/HomePage";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <HomePage></HomePage>
        }
    ]
  },
]);

export default router;