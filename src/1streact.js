import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, ReactProvider, RouterProvider, Outlet} from "react-router-dom";
import Header from "./components/Header"
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import ResturantMenu from "./components/ResturantMenu";
import Error from './components/Error';

const AppLayout=()=>{
return(
<div className="app">
 <Header/>
 <Outlet/> 
</div> 

);
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
                {
                  path:"/",
                  element:<Body/>,
                },
            
                {
                    path:"/about",
                    element:<About/>,
                },    
                {
                    path:"/contact",
                    element:<Contact/>,
                },
                {
                    path:"/cart",
                    element:<Cart/>,
                },
                {
                    path:"/resturant/:resid",
                    element:<ResturantMenu/>,
                },
            
        ],
        errorElement:<Error/>,

    },


])

const Root1= ReactDOM.createRoot(document.getElementById("root"));

Root1.render(<RouterProvider router={appRouter}/>);
