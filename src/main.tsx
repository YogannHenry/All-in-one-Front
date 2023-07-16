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
import TodoList from './components/Modules/Todo/TodoListPage/TodoListPage';
import TodoListPage from './components/Modules/Todo/TodoListPage/TodoListPage';
import Wallet from './components/Modules/Wallet/WalletLandingPage';

import './styles/global.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/TodoList" element={<TodoList />} />
      <Route path="/TodoList/ListId" element={<TodoListPage />} />
      <Route path="/Wallet" element={<Wallet />} />
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
