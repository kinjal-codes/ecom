import React, {Component} from 'react';
import Cart from './Cart';
export default class OrderComplete extends Component {
constructor() {
    super();  
}

render() {
    return (
        <div className="row col-md-12">
            <h1>Order Complete. You should receive an email with the receipt.</h1>

            <div className="col-md-6">
                <Cart isCheckout="1"></Cart>
            </div>
        </div>
        );
        }

        }