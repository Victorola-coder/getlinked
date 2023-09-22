import {
  Route,
  Routes,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Root } from "postcss";

const root = () => {
  return (
    <div>
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    elemment: <Root />,
    children: [
      {
        index: true,
        elemment: <Home />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
