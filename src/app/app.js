(function(){
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: 'app.component.html'
            });
    }
    
    angular
        .module('csv-simplified', ['ui.router'])
        .config(config);
})();