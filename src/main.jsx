import React from "react";
import ReactDOM from "react-dom/client";

//STEP 1: import router using createBrowser and RouterProvider from "react-router-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
//import the root file
//the 'loader as rootLoader is needed for the loading of data it was declared and exported in the Root route
import Root from "./routes/Root";

//import the error page
//import ErrorPage from "./error-page";

const router = createBrowserRouter([
  //configure the route using this function specifying the root directory for the web app
  {
    path: "/",

    //configure the root component as the root directory for your web app
    element: <Root />,

    //configure the error page as the error component using errorElement
    //errorElement: <ErrorPage />,
  },

  //configure the route that leads to the contacts page
  /*{
    path: "contacts/:contactId",

    //set the element to the contact component
    element: <Contact />,
  },*/
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  //render the configured route
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
