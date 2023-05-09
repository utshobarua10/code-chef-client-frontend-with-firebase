import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Banner from "../Components/Banner/Banner";
import SignIn from "../Components/SignInPage/SignIn";
import NavbarLinks from "../Components/Navbar/NavbarLinks";
import Signup from "../Components/SignUp/Signup";
import ContactUs from "../Components/ContactUs/ContactUs";
import Shared from "../Components/Shared/Shared";
import ChefRecipe from "../Components/ChefRecipe/ChefRecipe";
import Blog from "../Components/Blog/Blog";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Shared></Shared>,
        children:[{
            path: "/",
            element: <Home></Home>,
            loader: ()=>fetch('https://code-chef-server-aoyon887-gmailcom.vercel.app/')
        },
        {   
            path: '/contact',
            element: <ContactUs></ContactUs>
        },
        {
            path: '/signin',
            element: <SignIn></SignIn>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        },
        {
            path: '/chefRecipe/:id',
            element: <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
            loader: ({params})=>fetch(`https://code-chef-server-aoyon887-gmailcom.vercel.app/chefRecipe/${params.id}`)
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }
    ]
        
    },
    
  

   
])

export default router;