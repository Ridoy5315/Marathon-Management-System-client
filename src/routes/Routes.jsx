import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Registration from '../pages/Authentication/Registration'
import Dashboard from '../pages/Dashboard'
import AddMarathon from '../pages/dashboardPages/addMarathon'
import Marathons from '../pages/Marathons'
import MarathonDetails from '../pages/MarathonDetails'
import RegistrationForm from '../pages/RegistrationForm'
import MyMarathonList from '../pages/dashboardPages/MyMarathonList'
import MyApplyList from '../pages/dashboardPages/MyApplyList'

const router = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    index: true,
                    element: <Home></Home>
               },
               {
                    path: '/marathons',
                    element: <Marathons></Marathons>
               },
               {
                    path: '/marathon-details/:id',
                    element: <MarathonDetails></MarathonDetails>
               },
               {
                    path: '/registration-from/:id',
                    element: <RegistrationForm></RegistrationForm>
               },
               {
                    path: '/dashboard',
                    element: <Dashboard></Dashboard>
               },
               {
                    path: '/add-marathon',
                    element: <AddMarathon></AddMarathon>
               },
               {
                    path: '/my-marathon-list',
                    element: <MyMarathonList></MyMarathonList>
               },
               {
                    path: '/my-apply-list/:email',
                    element: <MyApplyList></MyApplyList>
               },
               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/registration',
                    element: <Registration></Registration>
               }
          ]
     }

])
export default router