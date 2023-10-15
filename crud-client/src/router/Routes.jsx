import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import CreateUser from "../components/Home/CreateUser/CreateUser";
import UpdateUser from "../components/Home/UpdateUser/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "createUser",
    element: <CreateUser />,
  },
  {
    path: "updateUser/:id",
    element: <UpdateUser />,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
  },
]);
export default router;
