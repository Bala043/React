import React from "react";
import ReactDOM from "react-dom/client";
import Head from "../src/components/Head";
import Body from "../src/components/Body";
import Contact from "./components/Contact";
import Error from "../src/components/Error";
import RestuarantMenu from "./components/RestuarantMenu"
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom"
import {lazy,Suspense} from "react"
import Cart from "./components/Cart";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
const root=ReactDOM.createRoot(document.getElementById('root'));
const About=lazy(()=>import("../src/components/About"));
const AppLayout=()=>
    {
        return(
            <Provider store={appStore}>
            <div className="App">
                <Head/>
                <Outlet></Outlet>
            </div>
            </Provider>
        )
    }
    const appRouter=createBrowserRouter([{
        path:"/",
        element:<AppLayout></AppLayout>,
        children:
        [
           {
                path:"/",
                element:<Body></Body>
            },
            
            {
                path:"/About",
                element:<Suspense><About></About></Suspense> 
            }
            ,
            {

                path:"/Contact",
               element:<Contact></Contact>

            }
            ,
            {
                path:"/restuarant/:resId",
                element:<RestuarantMenu></RestuarantMenu>     
            },
            {
                path:"/cart",
                element:<Cart></Cart>
            }
        ],
        errorElement:<Error></Error>,
    }],{
        future: {
          v7_relativeSplatPath: true
        }
      });
root.render(<RouterProvider router={appRouter}/>)


















