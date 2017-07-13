(function(module){
  const teamController = {};

  teamController.init = function(){
    $('#home').hide();
    $('#products').hide();
    $('#projects').hide();
    $('#live-data').hide();
    $('#team').fadeIn('slow');
  };

  module.teamController = teamController;
})(window);
