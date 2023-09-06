import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    children: [
      {
        path: "/messenger/login",
        element: <Login />,
      },
      {
        path: "messenger/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
