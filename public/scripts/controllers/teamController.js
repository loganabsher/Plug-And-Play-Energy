(function(module){
  const teamController = {};

  teamController.init = function(){
    $('#home').hide();
    $('#team').fadeIn('slow');
  };

  module.teamController = teamController;
})(window);
