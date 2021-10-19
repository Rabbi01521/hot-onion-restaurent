import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import CartProvider from "./context/CartProvider";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import FoodDetails from "./Pages/FoodDetails/FoodDetails";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Signup from "./Pages/Login/Signup/Signup";
import NotFound from "./Pages/NotFound/NotFound";
import PlaceOrder from "./Pages/PlaceOrder.js/PlaceOrder";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <CartProvider>
          <Header />
        </CartProvider>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <PrivateRoute path="/cart">
            <Cart></Cart>
          </PrivateRoute>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
          <PrivateRoute path="/food/:foodId">
            <FoodDetails></FoodDetails>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
