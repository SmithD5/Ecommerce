import './App.css';
import  Header from './component/layout/Header/Header.js';
import  Footer from './component/layout/Footer/Footer.js';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import WebFont from "webfontloader";
import React, { useState,useEffect } from "react";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js"
import Products from "./component/Product/Product.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store"
import { loadUser } from './actions/userAction';
import  UserOptions from "./component/layout/Header/UserOptions.js"
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile.js"
import UpdateProfile from "./component/User/UpdateProfile.js"
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdatePassword from "./component/User/UpdatePassword.js"
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from 'axios';
import Payment from "./component/Cart/Payment.js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Orders/MyOrders.js";
import OrderDetails from "./component/Orders/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ProductList from "./component/Admin/ProductList.js";
import OrderList from "./component/Admin/OrderList.js";
import ProcessOrder from "./component/Admin/ProcessOrder.js";
import NewProduct from './component/Admin/NewProduct.js';
import UpdateProduct from './component/Admin/UpdateProduct.js';
import UsersList from './component/Admin/UsersList.js';
import UpdateUser from './component/Admin/UpdateUser.js';
import ProductReviews from './component/Admin/ProductReviews.js';
import MadeBy from "./component/layout/MadeBy/MadeBy.js";
import NotFound from './component/layout/NotFound/NotFound.js';


function App() {

  const {isAuthenticated,user}=useSelector((state)=>state.user)
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    window.addEventListener("contextmenu", (e) => e.preventDefault());
    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  return (
    <Router>
   <Header />
   {isAuthenticated && <UserOptions user={user} />}
   <Routes>
   <Route index path="/process/payment" element={stripeApiKey && <ProtectedRoute><Elements stripe={loadStripe(stripeApiKey)}><Payment/></Elements></ProtectedRoute>}/>
   <Route index path="/" element={<Home/>}/>
   <Route index path="/product/:id" element={<ProductDetails/>}/>
   <Route index path="/products" element={<Products/>}/>
   <Route index path="/products/:keyword" element={<Products/>}/>
   <Route index path="/search" element={<Search/>}/>
   <Route index path="/account" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
   <Route index path="/me/update" element={<ProtectedRoute><UpdateProfile/></ProtectedRoute>}/>
   <Route index path="/password/update" element={<ProtectedRoute><UpdatePassword/></ProtectedRoute>}/>
   <Route index path="/shipping" element={<ProtectedRoute><Shipping/></ProtectedRoute>}/>
   <Route index path="/order/confirm" element={<ProtectedRoute><ConfirmOrder/></ProtectedRoute>}/>
   <Route index path="/success" element={<ProtectedRoute><OrderSuccess/></ProtectedRoute>}/>
   <Route index path="/orders" element={<ProtectedRoute><MyOrders/></ProtectedRoute>}/>
   <Route index path="/order/:id" element={<ProtectedRoute><OrderDetails/></ProtectedRoute>}/>
   <Route index path="/admin/dashboard" element={<ProtectedRoute isAdmin={true}><Dashboard/></ProtectedRoute>}/>
   <Route index path="/admin/products" element={<ProtectedRoute isAdmin={true}><ProductList/></ProtectedRoute>}/>
   <Route index path="/admin/orders" element={<ProtectedRoute isAdmin={true}><OrderList/></ProtectedRoute>}/>
   <Route index path="/admin/order/:id" element={<ProtectedRoute isAdmin={true}><ProcessOrder/></ProtectedRoute>}/>
   <Route index path="/admin/product" element={<ProtectedRoute isAdmin={true}><NewProduct/></ProtectedRoute>}/>
   <Route index path="/admin/product/:id" element={<ProtectedRoute isAdmin={true}><UpdateProduct/></ProtectedRoute>}/> 
   <Route index path="/admin/users" element={<ProtectedRoute isAdmin={true}><UsersList/></ProtectedRoute>}/> 
   <Route index path="/admin/user/:id" element={<ProtectedRoute isAdmin={true}><UpdateUser/></ProtectedRoute>}/> 
   <Route index path="/admin/reviews" element={<ProtectedRoute isAdmin={true}><ProductReviews/></ProtectedRoute>}/> 
   <Route index path="/login" element={<LoginSignUp/>}/>
   <Route index path="/cart" element={<Cart/>}/>
   <Route index path="/madeby" element={<MadeBy/>}/>     
   <Route path='*' element={<NotFound />}/>
   </Routes>
   <Footer />
    </Router>
  );
}

export default App;
