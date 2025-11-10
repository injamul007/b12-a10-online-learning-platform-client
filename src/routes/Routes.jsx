import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses";
import Login from "../pages/Login/Login";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/courses',
        element: <Courses></Courses>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])


export default router;