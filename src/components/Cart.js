import React, {Component} from 'react';
export default class Cart extends Component {
  
constructor() {
    super();  
    this.deleteProduct = this.deleteProduct.bind(this);
    this.getProductsFromStore = this.getProductsFromStore.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);    
}

getProductsFromStore(){
    let products = [];
    let localStorageItems = localStorage.getItem('products');
    if(localStorageItems){
        products = JSON.parse(localStorageItems);        
    }
    return products;
}

componentWillMount() {
    let products = this.getProductsFromStore();
    let total=0;
    let hasOnlyAccessory = true;
    for (let i = 0; i < products.length; i++) {  //loop through the array
        total += products[i].price* products[i].quantity;  //Do the math!
        if(products[i].product_type=="bike"){
            hasOnlyAccessory = false;
        }
    }    

    this.setState({items:products,total:total,hasOnlyAccessory:hasOnlyAccessory});
}

deleteProduct(e){
    let total=0;
    let products =  this.getProductsFromStore();
    let deleteProduct = event.target.dataset.productid;
    products = products.filter(item => item.id != deleteProduct);
    let hasOnlyAccessory = true;
    for (let i = 0; i < products.length; i++) {  
        total += products[i].price* products[i].quantity; 
        if(products[i].product_type=="bike"){
            hasOnlyAccessory = false;
        }
    }
    localStorage.setItem('products',JSON.stringify(products));
    this.setState({items:products,total:total,hasOnlyAccessory:hasOnlyAccessory});
}

updateQuantity(e){
    let updateProduct = event.target.dataset.productid;
}

  render() {
    let ProductsListBlock = '';
 
    ProductsListBlock = this.state.items.map((item, key) =>
    <tr key={"item_" + item.id}>
        <td><img width="75" src={item.image} /> </td>
        <td>{item.name}</td>
        <td><input className="form-control" type="number"  value={item.quantity} onChange={this.updateQuantity} data-itemid={item.id}/></td>
        <td className="text-right">${item.price*item.quantity} (${item.price}X{item.quantity})</td>
        <td className="text-right"><button className="btn btn-sm btn-danger" onClick={this.deleteProduct} data-productid={item.id}>X</button> </td>
    </tr>
    );

    return (


        <div className="card">
            <div className="card-header bg-primary text-white">
                Your Cart
            </div>
            <div className="card-body">
            <div className="container mb-4">
            {this.state.hasOnlyAccessory && <div  className="alert alert-danger" role="alert">You need atlease one bike to complete Checkout.</div>}
        <div className="row">
            <div className="col-12">
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col"> </th>
                                <th scope="col">Product</th>
                                <th scope="col" className="text-center">Quantity</th>
                                <th scope="col" className="text-right">Price</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ProductsListBlock}                            
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>Total</strong></td>
                                <td className="text-right"><strong>${this.state.total}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {!this.props.isCheckout &&
            <div className="col mb-2">
                <div className="row">
                    <div className="col-sm-12  col-md-6">
                        <a href="/" className="btn btn-block btn-light">Continue Shopping</a>
                    </div>
                    {!this.state.hasOnlyAccessory && <div className="col-sm-12 col-md-6 text-right">
                        <a href="/checkout" className="btn btn-lg btn-block btn-success text-uppercase">Checkout</a>
                    </div>}
                    
                </div>
            </div>
            }
        </div>
        </div>
            </div>
        </div>
    )
  }
}