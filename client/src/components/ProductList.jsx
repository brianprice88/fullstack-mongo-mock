import React from 'react';
import Products from './Products';
  
const ProductList = (props) => {
   return(
    <div className='product-list'>
      {props.products.map (product => 
      <Products product={product} key={product._id} showcaseProduct = {props.showcaseProduct}/>
      )}
    </div>
  )
}

export default ProductList