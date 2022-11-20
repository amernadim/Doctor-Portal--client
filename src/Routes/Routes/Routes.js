import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppoinment from "../../Pages/Dashboard/MyAppoinment/MyAppoinment";
import Home from "../../Pages/Home/Home/Home";
import ForgetPassword from "../../Pages/Login/ForgetPassword";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import AdminRoute from "../AdminRoute/AdmiinRoute";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },           
            {
                path: '/appointment',
                element: <PrivateRoutes><Appointment></Appointment></PrivateRoutes>
            }, {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/forgetPass',
                element: <ForgetPassword></ForgetPassword>
            }
            
        ]
    },
    {
        path : "/dashboard" ,
        element : <PrivateRoutes><DashboardLayout/></PrivateRoutes>,
        children : [
            {
                path : '/dashboard',
                element : <MyAppoinment/>
            },
            {
                path : '/dashboard/allUsers',
                element : <AdminRoute><AllUsers/></AdminRoute>
            },
            {
                path : '/dashboard/addDoctor',
                element : <AdminRoute><AddDoctor/></AdminRoute>
            },
            {
                path : '/dashboard/managedoctors',
                element : <AdminRoute><ManageDoctors/></AdminRoute>
            },
        ]

    },
   
])

export default router;