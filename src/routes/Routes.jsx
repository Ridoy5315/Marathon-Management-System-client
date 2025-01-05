import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import Dashboard from "../pages/Dashboard";
import AddMarathon from "../pages/dashboardPages/addMarathon";
import Marathons from "../pages/Marathons";
import MarathonDetails from "../pages/MarathonDetails";
import RegistrationForm from "../pages/RegistrationForm";
import MyMarathonList from "../pages/dashboardPages/MyMarathonList";
import MyApplyList from "../pages/dashboardPages/MyApplyList";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/marathons",
        element: (
          <PrivateRoute>
            <Marathons></Marathons>
          </PrivateRoute>
        ),
      },
      {
        path: "/marathon-details/:id",
        element: (
          <PrivateRoute>
            <MarathonDetails></MarathonDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/registration-from/:id",
        element: (
          <PrivateRoute>
            <RegistrationForm></RegistrationForm>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard/add-marathon",
            element: <AddMarathon></AddMarathon>,
          },
          {
            path: "/dashboard/my-marathon-list",
            element: <MyMarathonList></MyMarathonList>,
          },
          {
            path: "/dashboard/my-apply-list",
            element: <MyApplyList></MyApplyList>,
          },
        ],
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);
export default router;
