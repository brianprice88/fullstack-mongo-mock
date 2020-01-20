import React from 'react';
  
var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" id='searchForm'/>
    <button className="btn hidden-sm-down" onClick = {(e) => {props.searchProducts(e, document.getElementById('searchForm').value)}}>
      <span className="glyphicon glyphicon-search">Search product by name here</span>
    </button>
  </div> 
);

export default Search;