'use strict';

module.exports = exports = {};

exports.tohtml = function(arr, source, target){
  let template = Handlebars.compile($(source).html());
  arr.forEach((ele) => $(target).append(template(ele)));
};

exports.fetch = function(arr, data, Constructor){
  $.getJSON(data)
  .then((rawData) =>
  rawData.forEach((ele) =>
  arr.push(new Constructor(ele)));
  });
}
