'use strict';
page('/', homeController.init);
page('/products', productsController.init);
page('/projects', projectsController.init);
page('/live', liveController.init);
page('/team', teamController.init);

page();
