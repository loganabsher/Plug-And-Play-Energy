'use strict';

// bio constructor
function Team(data){
  this.name = data.name;
  this.title = data.title;
  this.bio = data.bio;
};

Team.all = [];

Team.tohtml = function(){
  let template = Handlebars.compile($('#team-template').html());
  Team.all.forEach((ele) => $('#team').append(template(ele)));
};

Team.fetch = function(){
  $.getJSON('data/teamData.json').then(function(rawData){
    rawData.forEach((ele) => Team.all.push(new Team(ele)));
  }).then(() => Team.tohtml());
}();
