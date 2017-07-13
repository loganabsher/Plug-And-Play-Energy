'use strict';

function Product(data){
  this.product = data.product;
  this.discription = data.discription;
  this.links = data.links;
};

Product.all = [];

Product.tohtml = function(){
  let template = Handlebars.compile($('#product-template').html());
  Product.all.forEach((ele) => $('#products').append(template(ele)));
};

Product.fetch = function(){
  $.getJSON('data/productData.json').then(function(rawData){
    rawData.forEach((ele) => Product.all.push(new Product(ele)));
  }).then(() => Product.tohtml());
}();
