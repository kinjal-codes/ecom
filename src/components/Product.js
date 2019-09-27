import React, {Component} from 'react';
import axios from 'axios';

export default class Catalog extends Component {
constructor() {
  super();  
  this.AddtoCart = this.AddtoCart.bind(this);
  this.changeQuantity = this.changeQuantity.bind(this);
  this.state={quantity:1};
 }

 AddtoCart(e){
    e.preventDefault();
    console.log(this.props.productData);
    let products = [];
    let localStorageItems = localStorage.getItem('products');
    if(localStorageItems){
        products = JSON.parse(localStorageItems);
    }
    let currentProduct  = products.find(p=>p.id===this.props.productData.id);
    if(currentProduct){
        currentProduct.quantity += this.state.quantity;   
    }else{
        currentProduct = this.props.productData;
        currentProduct.quantity = this.state.quantity;
        products.push(currentProduct);
    }
    localStorage.setItem('products', JSON.stringify(products));
    console.log(products);
    //window.location.href="/cart";
    this.props.onProductAdded();
 }

 changeQuantity(e){
    e.preventDefault();
    var updateQuantity = event.target.dataset.type === "minus" ? -1 : 1;
    var newQuantity = this.state.quantity+updateQuantity;
    if(newQuantity>0){    
        this.setState({quantity:newQuantity});
    }
 }
 
 render() {
     return(
        <div className="col-sm-3 product">
            <div className="card">
                <img className="card-img-top" src={this.props.productData.image} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.productData.name}</h5>
                    <div className="row">
                        <div className="col-sm-4">$20.5</div>
                        <div className="input-group col-sm-8">
                            <button type="button" data-type="minus" onClick={this.changeQuantity} className="plusminus">-</button>
                            <input type="text" min="1" max="100" value={this.state.quantity} className="catalogQuantity" />
                            <button type="button" data-type="plus" onClick={this.changeQuantity}  className="plusminus">+</button>
                        </div>
                        <a href="cart.html" className="btn btn-success btn-block" onClick={this.AddtoCart}>Add to cart</a>
                    </div>
                </div>
            </div>
        </div>);
 }
}