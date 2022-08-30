import { useEffect } from 'react';
import '@material-tailwind/react/tailwind.css';

// react-router components
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// @mui material components
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Material Kit 2 React themes
import theme from './assets/theme';
import Presentation from './layouts/pages/presentation';
import Admin from './layouts/pages/admin/adminabout-us';
import Main from './layouts/pages/main';
import SubMain from './layouts/pages/submain';

// Material Kit 2 React routes
import routes from './routes';
import routesadmin from './routes_admin';
import routesmain from './routes_main';

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const token = sessionStorage.getItem('token');
  const main = sessionStorage.getItem('main');
  const submain = sessionStorage.getItem('submain');
  // const newRoutes = token === null ? routes : routesadmin;
  // console.log(token);
  if (token) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {/* {token && getRoutes(routesadmin)}
        <Route path="/" element={<Admin />} /> */}
          {getRoutes(routesadmin)}
          <Route path="/" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    );
  }
  if (!main) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {/* {token && getRoutes(routesadmin)}
        <Route path="/" element={<Admin />} /> */}
          {getRoutes(routesmain)}
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    );
  }
  if (!submain) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {/* {token && getRoutes(routesadmin)}
        <Route path="/" element={<Admin />} /> */}
          {getRoutes(routesmain)}
          <Route path="/" element={<SubMain />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {/* {token && getRoutes(routesadmin)}
          <Route path="/" element={<Admin />} /> */}
        {getRoutes(routes)}
        <Route path="/" element={<Presentation />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}
