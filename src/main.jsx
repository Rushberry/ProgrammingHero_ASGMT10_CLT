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
import MyReviews from './elements/MyReviews.jsx';
import AllReviews from './elements/AllReviews.jsx';
import Update from './elements/Update.jsx';

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
      },
      {
        path: '/myReviews',
        element: <MyReviews></MyReviews>
      },
      {
        path: '/reviews',
        element: <AllReviews></AllReviews>
      },
      {
        path: '/updateReview/:id',
        loader: ({params}) => fetch(`http://localhost:1500/review/${params.id}`),
        element: <Update></Update>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
