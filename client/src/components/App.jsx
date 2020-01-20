import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import Axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProducts: [],
      currentlyShowing: '',
      addItemForm: false
    }
    this.getTenProducts = this.getTenProducts.bind(this);
    this.showcaseProduct = this.showcaseProduct.bind(this);
    this.bidOnProduct = this.bidOnProduct.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
    this.addItemForm = this.addItemForm.bind(this);
    this.addItem = this.addItem.bind(this)

  }

  getTenProducts() {
    Axios.get('/name/products')
      .then(response => this.setState({
        allProducts: response.data.slice(1),
        currentlyShowing: response.data[0]
      }, () => console.log(this.state)))
      .catch(err => console.error(err))
  }

  addItemForm() {
    this.setState({
      addItemForm: true
    })
  }

  addItem(e) {
    e.preventDefault();
    var item = document.getElementById('itemName').value;
    var min_cost = document.getElementById('startingBid').value;
    var curr_bid = 0;
    var ends_in = document.getElementById('lengthOfBidding').value;
    var image = document.getElementById('pictureOfItem').value;
    this.setState({
      addItemForm: false
    })
    Axios.post('/name/products', {item, min_cost, curr_bid, ends_in, image})
    .then(() => this.getTenProducts())
    .catch(err => console.error(err))
  }

  showcaseProduct(product) {
    this.setState({ currentlyShowing: product })
  }

  bidOnProduct(e, _id, bid) {
    e.preventDefault();
    if (bid <= this.state.currentlyShowing.curr_bid) {
      alert('You must bid above the current bid!'); return
    }
    Axios.put(`/name/products/${_id}`, { 'curr_bid': bid })
      .then(() => this.getTenProducts())
      .catch(err => console.error(err))
  }


  searchProducts(e, query) {
    e.preventDefault;
    //search existing product names based on query and give the first result
    var result = this.state.allProducts.filter(product => product.item.toUpperCase().includes(query.toUpperCase()))
    if (result.length === 0) { alert('sorry, no matches found') }
    this.setState({
      currentlyShowing: result[0]
    })
  }

  componentDidMount() {
    this.getTenProducts()
  }

  render() {

    return (
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <div>
          <button onClick={this.addItemForm}>List your item here!</button>
          {this.state.addItemForm ? <form>
            <input type='text' id='itemName' placeholder='Item Name' style={{'width': 300}}></input>
            <input type='text' id='startingBid' placeholder='Starting Bid ($)' style={{'width': 200}}></input>
            <input type='text' id='lengthOfBidding' placeholder='Length of bidding (days)' style={{'width': 200}}></input>
            <input type='text' id='pictureOfItem' placeholder='Picture of item' style={{'width': 300}}></input>
            <input type='submit' onClick = {this.addItem}></input>
          </form> : ''}
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchProducts={this.searchProducts} />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer product={this.state.currentlyShowing} bidOnProduct={this.bidOnProduct} />
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList products={this.state.allProducts} showcaseProduct={this.showcaseProduct} />
          </div>
        </div>
      </div>
    )
  }
}