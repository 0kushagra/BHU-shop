import React,{useState, useEffect} from 'react'
import "./Payment.css"
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import {Link, useHistory} from "react-router-dom";
import {CardElement , useStripe , useElements, Elements } from "@stripe/react-stripe-js";
import NumberFormat from 'react-number-format';
import getBasketTotal from "./reducer";
import axios from "./axios";

function Payment() {
    const [{basket,user},dispatch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const element = useElements();

    const [error, setError] = useState(null);
    const [disabled , setDisabled] = useState(true);

    const [succeeded,setSucceeded]  = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(()=>{
        const getClientSecret = async () =>{
            const response  = await axios({
                method: 'post',
                url: '/payments/create?total=${getBasketTotal(basket)*100 }'//check for problem
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket]);

    console.log('THE SECRET IS>>>',clientSecret)

    const handleSubmit = async(e)=> {
            e.preventDefault();
            setProcessing(true);

            const payload = await stripe.confirmCardPayment(clientSecret,{
                payment_method: {
                    card: element.getElement(CardElement)
                }
            }).then(({paymentIntent}) =>{
                setSucceeded(true);
                setError(null);
                setProcessing(false);

                history.replaceState('/orders')
            }
            )
    }
    const handleChange = e =>{
            setDisabled(e.empty());
            setError(e.error?e.error.message:"");
    }
    return (
        <div className = "payment">
            <div className = "payment__container">
            <h1>
                Checkout {<Link to="/checkout">({basket?.length} items)</Link>}
            </h1>


                <div className = "payment__section">
                    <div className = "payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className = "payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p> Varnasi ,Uttar Pradesh</p>
                     </div>
                </div>

            <div className = "payment__section">

                <div className = "payment__title">
                    <h3>Review items and Delivery</h3>
                </div>
                <div className = "payment__items"> 
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
                </div>

            <div className = "payment__section">
                     <div className = "payment__title">
                         <h3>Payment Method</h3>
                     </div>   
                     <div className = "payment__details">
                            <form onSubmit = {handleSubmit}>
                                <CardElement onChange = {handleChange}/>
                                <div className = "payment__priceContainer">
                                <NumberFormat
                                            
                                            value={0}
                                            displayType={'text'} 
                                            thousandSeparator={true} 
                                            prefix={'$'}

                                            
                                            
                                            renderText={value => <div>
                                            <h3>Order Total:{value}</h3>
                                            
                                            </div>}
                                            />
                                            <button disabled ={processing||disabled||succeeded}>
                                                <span>{processing?<p>processing</p>:"Buy Now"}</span>
                                            </button>
                                            <div>
                                                {error && <div>{error}</div>}
                                            </div>
                                </div>

                            </form>
                     </div>
                </div>        
            </div>

        </div>
    )
}

export default Payment

