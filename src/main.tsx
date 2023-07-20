import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import store from './store';

import App from './components/App/App';
import Home from './components/Home/Home';
import SignIn from './pages/SignInPage';
import Login from './pages/LoginPage';
import Contact from './pages/ContactPage';
import TodoList from './components/Modules/Todo/TodoListPage/TodoListPage';
import TodoListPage from './components/Modules/Todo/TodoListPage/TodoListPage';
import Wallet from './components/Modules/Wallet/WalletLandingPage/WalletLandingPage';
import DocumentsPage from './components/Modules/Wallet/WalletDocumentsPage/WalletDocumentsPage';
import CarsList from './components/Modules/CarTool/CarToolListe/CarToolListe';
import Landing from './components/Modules/Todo/TodoLandingPage/TodoLandingPage';
import OneCar from './components/Modules/CarTool/OneCar/OneCar';

import './styles/global.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/TodoList" element={<TodoList />} />
      <Route path="/TodoList/ListId" element={<TodoListPage />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/TodoList" element={<TodoList />} />
      <Route path="/TodoList/ListId" element={<TodoListPage />} />
      <Route path="/TodoLandingPage" element={<Landing />} />
      <Route path="/Wallet" element={<Wallet />} />
      <Route path="/WalletDocumentsPage" element={<DocumentsPage />} />
      <Route path="/cars" element={<CarsList />} />
      <Route path="/cars/carsId" element={<OneCar />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    {/* 2.2 je diffuse mon router dans mon application */}
    <RouterProvider router={router} />
  </Provider>
);
