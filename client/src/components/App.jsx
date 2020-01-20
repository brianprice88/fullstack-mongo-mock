import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import Axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allProducts: [],
      currentlyShowing: ''
    }
  this.getTenProducts = this.getTenProducts.bind(this)
  }

  getTenProducts() {
    Axios.get('/name/products')
    .then(response => this.setState({
      allProducts: response.data.slice(1),
      currentlyShowing: response.data[0]
    }, () => console.log(this.state)))
    .catch(err => console.error(err))
  }

  componentDidMount() {
    this.getTenProducts()
  }

  render(){
  
    return(
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer product = {this.state.currentlyShowing}/>
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList  products = {this.state.allProducts}/>
          </div>
        </div>
      </div>
    )
  }
}