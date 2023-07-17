import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import App from './components/App/App';
import Home from './components/Home/Home';
import SignIn from './components/SignInPage/SignInPage';
import Login from './components/LoginPage/LoginPage';
import Contact from './components/ContactPage/ContactPage';
import Landing from './components/Modules/Todo/TodoLandingPage/TodoLandingPage';
import './styles/global.css';
import TodoLandingPage2 from './components/Modules/Todo/TodoLandingPage/TodoLandingPage2';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/TodoLandingPage" element={<Landing />} />
      <Route path="/TodoLandingPage2" element={<TodoLandingPage2 />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
