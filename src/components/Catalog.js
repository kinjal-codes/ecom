import React, {Component} from 'react';
import axios from 'axios';
import Product from './Product';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Catalog extends Component {
constructor() {
  super();
  this.state = {
    productList: []
  };
  this.onProductAdded = this.onProductAdded.bind(this);
  this.onContinueShop = this.onContinueShop.bind(this);
 }
  
 componentWillMount() {
  axios.get('https://bikerentaljson.herokuapp.com/products') // JSON File Path
    .then( response => {
      this.setState({
      productList: response.data,
      modal:false
    });
  })
  .catch(function (error) {
    console.log(error);
  });
 }

 onProductAdded(){   
   this.setState({...this.state,modal:true});
 }

 onContinueShop(){
  this.setState({...this.state,modal:false});
 }

  render() {
  const ProductsList = this.state.productList;
  let ProductsListBlock = '';
  let AddonListBlock = '';

  if(ProductsList.length > 0) {
    ProductsListBlock = ProductsList.map( product => {
      if(product.product_type==="bike"){
      return (
           <Product key={product.id} productData={product} onProductAdded={this.onProductAdded} type="bike"></Product> 
       )
      }
 	  })
   }

   if(ProductsList.length > 0) {
    AddonListBlock = ProductsList.map( product => {
      if(product.product_type==="accessory" || product.product_type==="addon"){
        return (
        <Product key={product.id} productData={product} onProductAdded={this.onProductAdded} type="addon"></Product>  
        )
      }
 	  })
   }
   return(
    <div className="container">
      <div className="card">
        <div className="card-header bg-primary text-white">
          Bikes
        </div>
        <div className="card-body">
         {ProductsListBlock}
        </div>
      </div>
     <br/>
      <div className="card">
        <div className="card-header bg-primary text-white">
          AddOns
        </div>
        <div className="card-body">
         {AddonListBlock}
        </div>
      </div>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Added to cart</ModalHeader>
          <ModalBody>
            Product was added to the cart!
          </ModalBody>
          <ModalFooter>
            <a href="/cart" color="primary" className="btn btn-small btn-primary">Go to Cart</a>
            <Button color="secondary" onClick={this.onContinueShop}>Continue Shopping</Button>
          </ModalFooter>
        </Modal>   
    </div>
    )
  }
}
