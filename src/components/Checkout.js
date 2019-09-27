import React, {Component} from 'react';
import Cart from './Cart';
export default class Checkout extends Component {
constructor() {
    super();  
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      address: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
}


handleInputChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
}

handleSubmit(event) {
  window.location.href="/ordercomplete";
  event.preventDefault();
  return false;
}

render() {
    return (
        <div className="row col-md-12">
        
              <div className="col-md-6">
                <h4 className="mb-3">Billing address</h4>
                <form className="needs-validation" novalidate onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstName">First name</label>
                      <input type="text" className="form-control" id="firstName" name="firstName" placeholder="" value={this.state.firstName} onChange={this.handleInputChange} required/>
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastName">Last name</label>
                      <input type="text" className="form-control" id="lastName" name="lastName" placeholder="" value={this.state.lastName} onChange={this.handleInputChange} required/>
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="you@example.com" onChange={this.handleInputChange} value={this.state.email}/>
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>
          
                  <div className="mb-3">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" name="address" placeholder="1234 Main St" onChange={this.handleInputChange} required value={this.state.address}/>
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
          
                  <div className="mb-3">
                    <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                    <input type="text" className="form-control" id="address2" name="address2" placeholder="Apartment or suite"/>
                  </div>
          
                  <div className="row">
                    <div className="col-md-5 mb-3">
                      <label htmlFor="country">Country</label>
                      <select className="custom-select d-block w-100" id="country" required>
                        <option value="">Choose...</option>
                        <option>United States</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="state">State</label>
                      <select className="custom-select d-block w-100" id="state" required>
                        <option value="">Choose...</option>
                        <option>California</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <label htmlFor="zip">Zip</label>
                      <input type="text" className="form-control" id="zip" name="zip" placeholder="" required onChange={this.handleInputChange} value={this.state.zip}/>
                      <div className="invalid-feedback">
                        Zip code required.
                      </div>
                    </div>
                  </div>
                  <hr className="mb-4"/>
                  <h4 className="mb-3">Payment</h4>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="cc-name">Name on card</label>
                      <input type="text" className="form-control" id="cc-name" placeholder="" required onChange={this.handleInputChange}/>
                      
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="cc-number">Credit card number</label>
                      <input type="text" className="form-control" id="cc-number" placeholder="" required onChange={this.handleInputChange}/>
                      <div className="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 mb-3">
                      <label htmlFor="cc-expiration">Expiration</label>
                      <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
                      <div className="invalid-feedback">
                        Expiration date required
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <label htmlFor="cc-cvv">CVV</label>
                      <input type="text" className="form-control" id="cc-cvv" placeholder="" required onChange={this.handleInputChange}/>
                      <div className="invalid-feedback">
                        Security code required
                      </div>
                    </div>
                  </div>
                  <hr className="mb-4"/>
                  <button onClick={this.CompleteCheckout} className="btn btn-primary btn-lg btn-block" type="submit">Complete Checkout</button>
                </form>
              </div>

              <div className="col-md-6">
                  <Cart isCheckout="1"></Cart>
              </div>
      </div>
        );
        }

        }