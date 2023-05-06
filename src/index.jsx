import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import './index.scss';
import './index.css';
import { RouterProvider, Outlet, createBrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import HeaderNavbar from './components/header/HeaderNavbar';
import Home from './pages/Home/Home';
import ScrollToTop from './components/hoc/withScrollToTop';
import News from './pages/News/News';
import Careers from './pages/Careers/Careers';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import Subscribe from './pages/Subscribe/Subscribe';
import Admin from './pages/Admin/Admin';
import Error404 from './elements/Error404';
import { PrivateRoute } from './components/PrivateRoute';
import Document from './pages/Document/Document';
import DocumentDetail from './pages/DocumentDetail/DocumentDetail';
import NewsDetail from './pages/NewsDetail/NewsDetail';
import Search from './pages/Search/Search';
import { messages } from './i18n/message';
import { LOCALES } from './i18n/locales';
import { selectLanguageValue } from './features/language/languageSlice';
import CareersDetail from './pages/CareersDetail/CareersDetail';

const container = document.getElementById('root');
const root = createRoot(container);

const NavbarWrapper = () => {
  const language = useSelector(selectLanguageValue);
  return (
    <div>
      <ScrollToTop>
        <IntlProvider
          messages={messages[language]}
          locale={language}
          defaultLocale={language}
        >
          <HeaderNavbar />
          <Outlet />
        </IntlProvider>
      </ScrollToTop>
    </div>
  );
};
const router = createBrowserRouter([
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
        path: '/search',
        element: <Search />,
      },
      {
        path: '/careers',
        element: <Careers />,
      },
      {
        path: '/careers/:id',
        element: <CareersDetail />,
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
      {
        path: '/document/:id',
        element: <DocumentDetail />,
      },
      {
        path: '/news/:id',
        element: <NewsDetail />,
      },
    ],
  },
  {
    path: '/login',
    element: (
      <IntlProvider
        messages={messages[LOCALES.ENGLISH]}
        locale={LOCALES.ENGLISH}
        defaultLocale={LOCALES.ENGLISH}
      >
        <Login />
      </IntlProvider>
    ),
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
