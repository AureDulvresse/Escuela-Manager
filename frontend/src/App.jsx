import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Academy from "./pages/Academy";

import Welcome from "./components/Layout/Welcome";

import Student from "./components/Student";
import StudentList from "./components/Students/StudentList";
import StudentShow from './components/Students/StudentShow';
import StudentRegistration from "./components/Students/StudentRegistration";

import Notes from "./components/Notes";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "academy/",
        element: <Academy />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "",
            element: <Welcome msg="Academie" />,
            errorElement: <ErrorPage />,
          },
          {
            path: "student/",
            element: <Student />,
            errorElement: <ErrorPage />,
            children: [
              {
                path: "",
                element: <StudentList />,
                errorElement: <ErrorPage />,
              },
              {
                path: "new/",
                element: <StudentRegistration />,
                errorElement: <ErrorPage />,
              },
              {
                path: ":pk/show/",
                element: <StudentShow />,
                errorElement: <ErrorPage />,
              },
            ],
          },
          {
            path: "notes/",
            element: <Notes />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "administration/",
        element: <Academy />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "",
            element: <Welcome msg="Administration" />,
            errorElement: <ErrorPage />,
          },
          {
            path: "student/",
            element: <Student />,
            errorElement: <ErrorPage />,
          },
          {
            path: "notes/",
            element: <Notes />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
