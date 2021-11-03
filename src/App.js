import React,{useEffect} from 'react';
import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./components/firebase";
import { useStateValue } from "./components/StateProvider";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
function App() {
  const [{},dispatch] = useStateValue();
  const promise = loadStripe("pk_test_51JIVhFSI7OnnYCEtoub8z9p8P03Yc0fbTiVpgjBBuzRvhyIeEekCEmMvfEC1HgoywDzXhX25beCZuQZNSGiilLQ300aIFLVhT1");

   useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>", authUser);

      if(authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser
      })
      }
      else {
        dispatch({
          type : "SET_USER",
          user: null
        })
      }
    })
  },[])

  return (
    <Router >
    
    <div className="App">
    
    <Switch>
    <Route path="/login">
      <Login />
      </Route>
    <Route path="/checkout">
      <Header />
      <Checkout />
      </Route>
      <Route path="/payment">
      <Header />
      <Elements stripe = {promise}>
      <Payment />
      </Elements>
      
      </Route>
      <Route path="/">
      <Header />
      <Home />
      </Route>
      
      </Switch>
    </div>
    
    </Router>
  );
}

export default App;
