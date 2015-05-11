(function(){
    
    var app = angular.module('main',[]);
    
    app.controller('AppController', function(){
        
        
    });
    
    app.controller('HeaderController', ['$scope', function($scope){
     
        console.log($scope.header);
        
        // Instantiate HeadsUp behaviour for the Header element
        // TODO : DOM manipulaiton in Controller is BAD!! Do this using directive.
        new headsUp( '.main-header' );
    }]);
    
    app.controller('NavController', function(){
       
        this.scrollToTag = function(tag){
         
            var scrollTop = $('[name="' + tag + '"]').offset().top;
                
            $('html, body').animate({
                scrollTop: scrollTop
            }, scrollTop > 0? scrollTop : 2000);
        }
    });
    
})();