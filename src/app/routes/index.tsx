import { createBrowserRouter, RouterProvider } from "react-router-dom";


import RootLayout from "@/layouts/root-layout";
import HomePage from "@/pages/home";
import StudentPage from "@/pages/students";

const routers = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout/>,
        children:[
            {
                path:"/",
                element:<HomePage/>,
            },
            {
                path:"/students",
                element:<StudentPage/>,
            },
        ]

    }
]);


export default function AppRouter(){
    return <RouterProvider router={routers} />
}
