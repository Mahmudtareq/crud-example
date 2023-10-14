import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import CreateUser from "../components/Home/CreateUser/CreateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "createUser",
    element: <CreateUser />,
  },
]);
export default router;
