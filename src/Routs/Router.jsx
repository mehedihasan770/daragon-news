import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
                loader: () => fetch('/news.json')
            },
        ]
    },
    {
        path: 'auth',
        element: <h1>hallo auth</h1>
    },
    {
        path: 'news',
        element: <h1>hallo news</h1>
    },
    {
        path: '*',
        element: <h2>tum vul pathe aso</h2>
    }
])