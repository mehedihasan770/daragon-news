import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivetRouts from "../PrivetRouts/PrivetRouts";
import Loadin from "../Components/Loadin";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "category/:id",
                element: <CategoryNews/>,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement: <Loadin></Loadin>
            },
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,

        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: 'news-details/:id',
        element: <PrivetRouts>
            <NewsDetails></NewsDetails>
        </PrivetRouts>,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <Loadin></Loadin>
    },
    {
        path: '*',
        element: <h2>tum vul pathe aso</h2>
    }
])