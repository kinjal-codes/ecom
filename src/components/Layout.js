import React, {Component} from 'react';


export default class Layout extends Component {
  
  render() {
    return (
    <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="container">
        <a className="navbar-brand" href="/">TopView Bike Rental</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
            <ul className="navbar-nav m-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/">Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Cart">Cart</a>
                </li>
            </ul>
            </div>
         </div>
        </nav>
      <section className="jumbotron text-center">
         <div className="container">
             <h1 className="jumbotron-heading">Renting Bikes Made Easy!</h1>
         </div>
        </section>
    <div className="container mt-3">
    <div className="row">
        <div className="col-sm">
           
                         {this.props.children}
                    
        </div>
    </div>
</div>
    </div>
    )
  }
}