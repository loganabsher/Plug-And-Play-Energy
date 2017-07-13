(function(module){
  const liveController = {};

  liveController.init = function(){
    $('#home').hide();
    $('#products').hide();
    $('#projects').hide();
    $('#team').hide();
    $('#live-data').fadeIn('slow');
  };

  module.liveController = liveController;
})(window);
