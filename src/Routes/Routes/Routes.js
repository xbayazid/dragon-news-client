import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from '../../components/Pages/Home/Home/Home'
import Category from "../../components/Pages/Category/Category";
import News from "../../components/Pages/News/News";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path:'/news/:id',
                element: <News></News>
            }
        ]
    }
])