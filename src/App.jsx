import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Collection from "./components/Collection/Collection";
import FooterTop from "./components/FooterTop/FooterTop";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Review from "./components/Reviews/Reviews";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Main/><Collection/><FooterTop/><Footer/></>
    },
    {
      path:"/products",
      element:<><Navbar/><Products/><FooterTop/><Footer/></>
    },
    {
      path:"/reviews",
      element:<><Navbar/><Review/><FooterTop/><Footer/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/><Footer/></>
    },
    {
      path:"/signup",
      element:<><Navbar/><Signup/><Footer/></>
    },
  ])



  return (
    <>
      {/* 
      <Navbar/>
      <Main/>
      <Collection/>
      <Products/>
      <Review/>
      <FooterTop/>
      <Footer/> 
       */}
       <RouterProvider router={router}/>
    </>
  );
}

export default App;
