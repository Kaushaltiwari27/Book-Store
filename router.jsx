import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
  import Home from "../home/home"
  import Shop from "../Shop/shop"
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../Shop/SingleBook";
import DashBoardLayout from "../dashboard/DashBoardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBooks from "../dashboard/EditBooks";
import SingUp from "../components/SingUp";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
        path:'/',
        element:<Home/>,
        },
        {
            path:'/shop',
            element:<Shop/>,
            },
                {
                    path:'/about',
                    element:<About/>,
                    },
                    {
                        path:'/blog',
                        element:<Blog/>,
                        },
                        
                          {
                            path: '/book/:id',
                            element: <SingleBook />,
                            loader: ({ params }) => fetch(`http://localhost:7000/book/${params.id}`),
                          },

                        
      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashBoardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<Dashboard/>
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBook/>
        },
        {
          path:"/admin/dashboard/editbooks/:id",
          element:<EditBooks/>,
          loader: ({ params }) => fetch(`http://localhost:7000/book/${params.id}`)
        }
      ]
    },
    {
      path:"sign-up",
      element:<SingUp/>
    }
  ]);
  export default router