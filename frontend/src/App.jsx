import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Academy from "./pages/Academy";

import Welcome from "./components/Layout/Welcome";

import Student from "./components/Students/Student";
import StudentList from "./components/Students/StudentList";
import StudentShow from "./components/Students/StudentShow";
import StudentAddForm from "./components/Students/StudentAddForm";
import StudentUpdateForm from "./components/Students/StudentUpdateForm";

import Notes from "./components/Notes/Notes";
import Administration from "./pages/Administration";
import NoteShow from "./components/Notes/NoteShow";
import ResultatBox from "./components/Notes/ResultatBox";
import ResultatEditableBox from "./components/Notes/ResultatEditableBox";

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
            path: "student-management/",
            element: <Student />,
            errorElement: <ErrorPage />,
            children: [
              {
                path: "",
                element: <StudentList />,
                errorElement: <ErrorPage />,
              },
              {
                path: "student/new/",
                element: <StudentAddForm />,
                errorElement: <ErrorPage />,
              },
              {
                path: "student/:pk/update/",
                element: <StudentUpdateForm />,
                errorElement: <ErrorPage />,
              },
              {
                path: "student/:pk/show/",
                element: <StudentShow />,
                errorElement: <ErrorPage />,
              },
            ],
          },
          {
            path: "notes-management/",
            element: <Notes />,
            errorElement: <ErrorPage />,
          },
          {
            path: "notes-management/notes/:pk/show/",
            element: <NoteShow />,
            errorElement: <ErrorPage />,
            children: [
              {
                path: "",
                element: <ResultatBox />,
                errorElement: <ErrorPage />,
              },
              {
                path: "edit/",
                element: <ResultatEditableBox />,
                errorElement: <ErrorPage />,
              },
            ],
          },
        ],
      },
      {
        path: "administration/",
        element: <Administration />,
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
