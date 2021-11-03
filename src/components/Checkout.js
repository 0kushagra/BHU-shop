import React from 'react'
import "./Checkout.css"
import { getBasketTotal } from './reducer'
import Subtotal from "./Subtotal.js"
import CheckoutProduct from "./CheckoutProduct"
import { ListItemAvatar } from '@material-ui/core'
import { useStateValue } from "./StateProvider";
function Checkout() {

    const [{basket,user},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">

                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2021/BGC/specialty/bgc_update_EN_1024x90_20210225.jpg"></img>

                <div >
                    <h3 >Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                </div>

                
                {basket.map( item =>
                (
                    <CheckoutProduct 
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price ={item.price}
                        rating = {item.rating}
                    />
                ))}
            </div>
            <div className="checkout__right">
                <h2>Subtotal comes here</h2>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout

