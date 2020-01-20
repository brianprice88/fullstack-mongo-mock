import React from 'react';
  
const Products = (props) => {
  let {item, min_cost, curr_bid, ends_in, image} = props.product
   return(
    <div className='product-list-entry' onClick = {() => props.showcaseProduct(props.product)}>
      <img src = {image}/>
      <h4>{item}</h4>
      <h5>Minimum Cost: ${min_cost}</h5>
      <h5>Current Bid: ${curr_bid}</h5>
      <h5>Bidding Ends In: {ends_in} Day(s) </h5>
    </div>
  )
}

export default Products