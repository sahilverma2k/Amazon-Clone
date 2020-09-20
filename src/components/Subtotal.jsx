import React from 'react'
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "../providers/StateProvider"
import "../styles/Subtotal.css"
import { getBasketTotal } from '../providers/reducer';
function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            {/* price */}
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                ( Subtotal {basket.length} items ) : <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains
                        </small>
                    </>
                )}
                value={getBasketTotal(basket)} 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'$'} 
            />

            <button>Proceed to checkout</button>
        </div>
    )
}
export default Subtotal