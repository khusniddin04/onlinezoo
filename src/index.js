import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import MapPage from './pages/MapPage';
import ZoosPage from './pages/ZoosPage';
import ContactPage from './pages/ContactPage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import DonatePage from './pages/DonatePage';
import FeedBack from './pages/FeedBack';
import AboutPage from './pages/AboutPage';
import EagleZoo from './pages/EagleZoo';
import GorillaZoo from './pages/GorillaZoo';
import AligatorsZoo from './pages/AligatorsZoo';

const myRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children: [
    {
      path:"/",
      element:<AboutPage/>
    },
    {
      path:"/map",
      element:<MapPage/>
    },
    {
      path:"/pandas",
      element:<ZoosPage/>
    },
    {
      path:"/eagles",
      element:<EagleZoo/>
    },
    {
      path:"/gorilas",
      element:<GorillaZoo/>
    },
    {
      path:"/alligators",
      element:<AligatorsZoo/>
    },
    {
      path:"/contact",
      element:<ContactPage/>
    },
    {
      path:"/login",
      element:<LogInPage/>
    },
    {
      path:"/signup",
      element:<SignUpPage/>
    },
    {
      path:"/donate",
      element:<DonatePage/>
    },
    {
      path:"/feedback",
      element:<FeedBack/>
    },
    {
      path:"*",
      element:<ErrorPage/>
    },
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter} />
  </React.StrictMode>
);


