import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Banner from "../Components/Banner/Banner";
import SignIn from "../Components/SignInPage/SignIn";
import NavbarLinks from "../Components/Navbar/NavbarLinks";
import Signup from "../Components/SignUp/Signup";
import ContactUs from "../Components/ContactUs/ContactUs";
import Shared from "../Components/Shared/Shared";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Shared></Shared>,
        children:[{
            path: "/",
            element: <Home></Home>
        },
        {
            path: '/contact',
            element: <ContactUs></ContactUs>
        }
    ]
        
    },
    {
        path: '/signin',
        element: <SignIn></SignIn>
    },
    {
        path: '/signup',
        element: <Signup></Signup>
    },
  

   
])

export default router;