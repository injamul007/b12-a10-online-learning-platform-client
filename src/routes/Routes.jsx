import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/Error404Page/ErrorPage";
import DashboardLayout from "../layout/DashboardLayout";
import MyEnrolledCourse from "../pages/MyEnrolledCourse/MyEnrolledCourse";
import PrivateRoute from "./PrivateRoute";
import Settings from "../pages/Settings/Settings";
import Profile from "../pages/Profile/Profile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import AddCourse from "../pages/AddCourse/AddCourse";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import MyAddedCourses from "../pages/MyAddedCourses/MyAddedCourses";
import UpdateCourse from "../pages/UpdateCourse/UpdateCourse";
import LoadSpinner from "../components/LoadSpinner/LoadSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/my-enrolled",
        element: (
          <PrivateRoute>
            <MyEnrolledCourse></MyEnrolledCourse>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-course",
        element: (
          <PrivateRoute>
            <AddCourse></AddCourse>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-courses",
        element: (
          <PrivateRoute>
            <MyAddedCourses></MyAddedCourses>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/update-course/:id",
        element: (
          <PrivateRoute>
            <UpdateCourse></UpdateCourse>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <LoadSpinner></LoadSpinner>,
        loader: ({ params }) =>
          fetch(
            `https://skilledhub-online-learning-platform.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/dashboard/my-profile/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/settings",
        element: (
          <PrivateRoute>
            <Settings></Settings>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
