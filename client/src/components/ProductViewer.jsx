import React from 'react';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showing: this.props.product
    }
  }
  
  render(){
    let {item, min_cost, curr_bid, ends_in, image} = this.props.product
    return(
      <div className = 'product-viewer'>
        { <img src = {image}/>}
      { <h4>{item}</h4> }
      {<h5>Minimum Cost: ${min_cost}</h5> }
      <h5>Current Bid: ${curr_bid}</h5>
      <h5>Bidding Ends In: {ends_in} Day(s) </h5> 
      </div>
    )
  }
}