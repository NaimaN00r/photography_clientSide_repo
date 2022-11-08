import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Servicesall from "../../Pages/Servicessall/Servicesall";
import SignUp from "../../Pages/SignUp/SignUp";

// import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/servicessall',
                element:<Servicesall></Servicesall>
            },
            {
                path:'/servicessall/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:4500/services/${params.id}`)
            },
            {
                path:'/blogs',
                element:<Blog></Blog>
            }
        ]

    }

  ]);

  export default router;