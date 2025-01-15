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
import Review from './elements/Review.jsx';
import MyWatchlist from './elements/MyWatchlist.jsx';
import Login from './authentication/Login.jsx';
import Register from './authentication/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import AccessProvider from './providers/AccessProvider.jsx';

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
        element: <AccessProvider><AddReview></AddReview></AccessProvider>
      },
      {
        path: '/myReviews',
        element: <AccessProvider><MyReviews></MyReviews></AccessProvider>
      },
      {
        path: '/reviews',
        element: <AllReviews></AllReviews>
      },
      {
        path: '/updateReview/:id',
        loader: ({ params }) => fetch(`http://localhost:1500/review/${params.id}`),
        element: <AccessProvider><Update></Update></AccessProvider>
      },
      {
        path: '/review/:id',
        loader: ({ params }) => fetch(`http://localhost:1500/review/${params.id}`),
        element: <AccessProvider><Review></Review></AccessProvider>
      },
      {
        path: '/myWatchlist',
        element: <AccessProvider><MyWatchlist></MyWatchlist></AccessProvider>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
