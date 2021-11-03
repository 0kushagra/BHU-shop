import React from 'react'
import "./Subtotal.css"
import { useStateValue } from "./StateProvider";
import getBasketTotal from "./reducer"
import NumberFormat from 'react-number-format';
import {useHistory} from "react-router-dom";

function Subtotal() {
    const history = useHistory();
const [{basket},dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <NumberFormat
            
            value={0}
             displayType={'text'} 
             thousandSeparator={true} 
             prefix={'$'}

            
            // renderText={value =>
            // {
                
            //     <div>
            //     <p>Hi</p>
            //    <p>
            //        Subtotal({basket.length} items):<strong>{value}</strong>
            //    </p>  
            //    <small className="subtotal__gift">
            //        <input>This order contains a gift</input>
            //    </small>    
            //    </div>
            // }
            // }
            renderText={value => <div>
            <p>
                Subtotal({basket.length} items):<strong>{value}</strong>
            </p>
            {/* <small className = "subtotal_gift">
                <input>This order contains a gift</input>
            </small> */}
            </div>}
             />
             <button onClick = {e => history.push('/payment')} >Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal

//getBasketTotal(basket)