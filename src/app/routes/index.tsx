import { createBrowserRouter, RouterProvider } from "react-router-dom";


import RootLayout from "@/layouts/root-layout";
import HomePage from "@/pages/home";
import StudentPage from "@/pages/students";
import FacultyPage from "@/pages/faculty";
import SessionPage from "@/pages/Session";
import ModulePage from "@/pages/module";
import AnalyziePage from "@/pages/analyzie";


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
            {
                path:"/faculty",
                element:<FacultyPage/>,
            },
            {
                path:"/module",
                element:<ModulePage/>,
            },
            {
                path:"/Session",
                element:<SessionPage/>,
            },
            {
                path:"/analyzie",
                element:<AnalyziePage/>,
            },

        ]

    }
]);


export default function AppRouter(){
    return <RouterProvider router={routers} />
}
