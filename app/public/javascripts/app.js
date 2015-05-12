(function(){
    
    var app = angular.module('main',[]);
    
    app.controller('AppController', function(){
        
        
    });
    
    app.controller('HeaderController', ['$scope', function($scope){
        
    }]);
    
    app.directive("signatureInit", function(){
             
        return {

            link: function(scope, element, attrs){
                
                var initSignature = function(element_name){

                    return $(element_name).each(function () {
                        
                        var delay, i, len, length, path, paths, previousStrokeLength, results, speed;
                        paths = $('path, circle, rect', this);
                        delay = 0;
                        results = [];
                        for (i = 0, len = paths.length; i < len; i++) {
                            path = paths[i];
                            length = path.getTotalLength();
                            previousStrokeLength = speed || 0;
                            speed = length < 100 ? 20 : Math.floor(length);
                            delay += previousStrokeLength + 100;
                            results.push($(path).css('transition', 'none').attr('data-length', length).attr('data-speed', speed).attr('data-delay', delay).attr('stroke-dashoffset', length).attr('stroke-dasharray', length + ',' + length));
                        }
                        return results;
                    });
                }

                var animateSignature = function(element_name){
                    
                    return $(element_name).each(function () {
                        var delay, i, len, length, path, paths, results, speed;
                        paths = $('path, circle, rect', this);
                        results = [];
                        for (i = 0, len = paths.length; i < len; i++) {
                            path = paths[i];
                            length = $(path).attr('data-length');
                            speed = $(path).attr('data-speed');
                            delay = $(path).attr('data-delay');
                            results.push($(path).css('transition', 'stroke-dashoffset ' + speed + 'ms ' + delay + 'ms linear').attr('stroke-dashoffset', '0'));
                        }
                        return results;
                    });
                }
                
                initSignature(attrs.signatureInit);
                console.log(animateSignature(attrs.signatureInit));
            }
        }
    });
    
    app.directive("headerInit", function(){
       
        return {
         
            link: function(scope, element, attrs){
             
                new headsUp(attrs.headerInit);
            }
        }
    });
    
    app.controller('NavController', function(){
       
        this.scrollToTag = function(tag){
         
            var scrollTop = $('[name="' + tag + '"]').offset().top;
                
            $('html, body').animate({
                scrollTop: scrollTop
            }, scrollTop > 0? scrollTop : 2000);
        }
    });
    
})();