import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import About from "./components/About";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
 const AppLayout=()=>{
    return(
        <Provider store={store}>
            <div>
            {/* <h1>My name is raj</h1> */}
            <Header/>
            <Outlet />
            </div>
        </Provider>
        
    )
 }
 const appRoter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,

        children:[
            {
                path:"/",
                element:<Body/>

            },
            {
                path:"/about",
                element:<About/>
            }
        ]
    }
 ])
const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRoter}/>);