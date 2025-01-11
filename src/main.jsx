import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Root from './components/Root.jsx';
import Home from './elements/Home.jsx';
import Contact from './elements/Contact.jsx';
import Faqs from './elements/Faqs.jsx';
import AddReview from './elements/AddReview.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/faqs",
        element: <Faqs></Faqs>
      },
      {
        path: "/addReview",
        element: <AddReview></AddReview>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
