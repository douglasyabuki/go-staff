import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import DesignSystem from '@/pages/design-system/DesignSystem';

interface RouteItem {
  id: number;
  navigate: boolean;
  path: string;
  element: React.ReactElement;
  allowedRoles: string[];
}

const routeList: RouteItem[] = [
  {
    id: 0,
    navigate: false,
    path: '/',
    element: <Home />,
    allowedRoles: [''],
  },
  {
    id: 1,
    navigate: false,
    path: '/design-system',
    element: <DesignSystem />,
    allowedRoles: [''],
  },
];

export const AppRoutes = () => {
  return (
    <Routes>
      {routeList.map((item) => (
        <Route
          key={item.id}
          path={item.path}
          element={item.navigate ? <Navigate to={{ pathname: item.path }} /> : item.element}
        ></Route>
      ))}
    </Routes>
  );
};
