import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import store, { AppDispatch } from './store/index';

// Importer l'action d'initialisation de l'utilisateur
import { initializeUser } from './store/reducers/user';

import App from './components/App/App';
import Home from './pages/Home';
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
import Error from './pages/Error';

import './styles/global.css';

const token = localStorage.getItem('token');
if (token) {
  // Si le token est présent, déclenchez l'action d'initialisation pour remplir le state avec les données utilisateur
  (store.dispatch as AppDispatch)(initializeUser());
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route errorElement={<Error />}>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/TodoList" element={<TodoList />} />
      <Route path="/list/:listId" element={<TodoListPage />} />
      <Route path="/list" element={<Landing />} />
      <Route path="/Wallet" element={<Wallet />} />
      <Route path="/wallet/:walletId" element={<DocumentsPage />} />
      <Route path="/cars" element={<CarsList />} />
      <Route path="/cars/:carsId" element={<OneCar />} />
      <Route path="wallet/document/:documentId" element={<DocumentsPage />} />
    </Route>
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
