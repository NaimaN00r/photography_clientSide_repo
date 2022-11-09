import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Servicesall from "../../Pages/Servicessall/Servicesall";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path:'/addservices',
                element:<PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path:'/servicessall/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://photography-client-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
              },
            {
                path:'/blogs',
                element:<Blog></Blog>
            }
        ]

    }

  ]);

  export default router;