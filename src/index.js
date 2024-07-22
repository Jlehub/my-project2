import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import reportWebVitals from './reportWebVitals';
import Contact from './Contact';
import CoachPage from './CoachPage';
import DailyAccess from './DailyAccess';
import KidsClub from './KidsClub';
import LogIn from './LogIn';
import SignIn from './SignIn';
import ProfilePage from './ProfilePage';
import BookACourt from './BookACourt';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookATraining from './BookATraining';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Contact",
    element: <Contact/>,
  },
  {
    path: "CoachPage",
    element: <CoachPage/>,
  },
  {
    path: "DailyAccess",
    element: <DailyAccess/>,
  },
  {
    path: "KidsClub",
    element: <KidsClub/>,
  },
  {
    path: "LogIn",
    element: <LogIn/>,
  },
  {
    path: "SignIn",
    element: <SignIn/>,
  },
  {
    path: "SignIn",
    element: <SignIn/>,
  },
  {
    path: "ProfilePage",
    element: <ProfilePage/>,
  },
  {
    path: "BookACourt",
    element: <BookACourt/>,
  },
  {
    path: "BookATraining",
    element: <BookATraining/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
