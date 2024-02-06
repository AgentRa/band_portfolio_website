import { Routes, Route } from 'react-router';
import { lazy } from 'react';
import { NoMatch } from '@/pages/no-match/404.tsx';

const Main = lazy(() => import('@/pages/main/index.tsx'));

const routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '*',
    element: <NoMatch />,
  },
];

export const Routing = () => (
  <Routes>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))}
  </Routes>
);
