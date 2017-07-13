(function(module){
  const projectsController = {};

  projectsController.init = function(){
    $('#home').hide();
    $('#products').hide();
    $('#live-data').hide();
    $('#team').hide();
    $('#projects').fadeIn('slow');
  }

  module.projectsController = projectsController;
})(window);
