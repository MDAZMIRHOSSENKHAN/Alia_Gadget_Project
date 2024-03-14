import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";

const MainRoutes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<HomePage/>
            },
            {
                path:"/homepage",
                element:<HomePage/>
            },
        ]
    }
])

export default MainRoutes