import {createBrowserRouter, RouterProvider} from "react-router-dom";
import  Home  from "./pages/Home";
import  About  from "./pages/About";
import  Products  from "./pages/Product";
import  ContactForm  from "./pages/Contact";
import AppLayOut from "./components/layout/AppLayOut";
import ErrorPage from "./pages/ErrorPage";
import SingleProduct from "./pages/SingleProduct";


function App() {
  
  const router = createBrowserRouter([
    {
      path : '/',
      element : <AppLayOut/>,
      errorElement : <ErrorPage/>,
      children:[
        {
          path : '/home',
          element : <Home/>
        },
        {
          path : '/about',
          element : <About/>
        },
        {
          path: '/product',
          element : <Products/>
        },
        {
          path: '/singleProduct/:id',
          element : <SingleProduct/>
        },
        {
          path: '/contact',
          element : <ContactForm/>
        },
        {
          path : '/'
        }
      ]
    }
    
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
