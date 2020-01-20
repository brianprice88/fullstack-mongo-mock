var mongoose = require('mongoose');
// Complete the productSchema below.
var productSchema= new mongoose.Schema ({
  item: {type: String},
  min_cost: {type: Number},
  curr_bid: {type: Number},
  ends_in: {type: Number},
  image: {type: String}
});
 
 /*
  ensure your schema has the following:
    item:
      - string,
    min_cost:
      - number,
    curr_bid:
      - number,
    ends_in:
      - number
    image:
      - string
*/

module.exports = productSchema;
