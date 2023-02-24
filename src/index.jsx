import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.scss';
import './index.css';
import {
  createHashRouter,
  RouterProvider,
  Outlet,
  createBrowserRouter,
} from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import HeaderNavbar from './components/header/HeaderNavbar';
import Home from './pages/Home/Home';
import ScrollToTop from './components/hoc/withScrollToTop';
import News from './pages/News/News';
import Career from './elements/Career';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import Subscribe from './pages/Subscribe/Subscribe';
import Admin from './pages/Admin/Admin';
import Error404 from './elements/Error404';
import { PrivateRoute } from './components/PrivateRoute';
import Document from './pages/Document/Document';
const container = document.getElementById('root');
const root = createRoot(container);

const NavbarWrapper = () => {
  return (
    <div>
      <ScrollToTop>
        <HeaderNavbar />
        <Outlet />
      </ScrollToTop>
    </div>
  );
};
const router = createHashRouter([
  {
    path: '/',
    element: <NavbarWrapper />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/career',
        element: <Career />,
      },
      {
        path: '/subscribe',
        element: <Subscribe />,
      },
      {
        path: '/admin',
        element: (
          <PrivateRoute>
            <Admin />,
          </PrivateRoute>
        ),
      },
      {
        path: '/document',
        element: (
          <PrivateRoute>
            <Document />,
          </PrivateRoute>
        ),
      },
      {
        path: '/*',
        element: <Error404 />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
