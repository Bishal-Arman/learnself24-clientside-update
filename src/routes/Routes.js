import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import Carrer from "../pages/Carrer/Carrer";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/Home/Home";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Main from "../_layouts/Main";
import Login from "../shared/Login/Login/Login";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Premiumaccess from "../pages/Premiumaccess/Premiumaccess";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Registration from "../shared/Login/Registration/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          return fetch(
            "https://learnself24-serverside-o3gt.vercel.app/courses"
          );
        },
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: async () => {
          return fetch(
            "https://learnself24-serverside-o3gt.vercel.app/courses"
          );
        },
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: async () => {
          return fetch(
            "https://learnself24-serverside-o3gt.vercel.app/courses"
          );
        },
      },
      {
        path: "/courses/:id",
        element: (
          <PrivateRoute>
            {" "}
            <CourseDetails></CourseDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(
            `https://learnself24-serverside-o3gt.vercel.app/courses/${params.id}`
          );
        },
      },
      {
        path: "/premiumaccess/:id",
        element: (
          <PrivateRoute>
            <Premiumaccess></Premiumaccess>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(
            `https://learnself24-serverside-o3gt.vercel.app/courses/${params.id}`
          );
        },
      },
      { path: "/about", element: <About></About> },
      { path: "/career", element: <Carrer></Carrer> },
      { path: "*", element: <PageNotFound></PageNotFound> },
      { path: "/login", element: <Login></Login> },
      { path: "/registration", element: <Registration></Registration> },
    ],
  },
]);
