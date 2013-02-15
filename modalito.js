/***
* Plugin para ventana modal con jqery
* Version 0.1
* By @erufenix
***/

;(function($) {

    $.modalito = function(element, options) {

        var defaults = {
            show          : false,
            backdrop      : true,
            url           : '',
            result        : '',
            width         : 560,
            heightFrame   : 500,
            eschide       : false
        }

        var plugin = this;

        plugin.settings = {}

        var tmpl = '<div class="close"></div>\n'+
                      '<div class="content">\n'+
                   '</div>\n';

        var init = function() {
            plugin.settings = $.extend({}, defaults, options);
            plugin.element = element;
            $element = plugin.element;
            build();            
            // code goes here
        }

        plugin.foo_public_method = function() {
            // code goes here
        }

        var show,build = function() {
            if(plugin.settings.backdrop){
                if(window.parent.document.body){
                    $backdrop = $('<div class="modalito-backdrop"/>').appendTo(window.parent.document.body)
                }
                else{   
                    $backdrop = $('<div class="modalito-backdrop"/>').appendTo(window.body)
                }                
             }             
             $element.width(plugin.settings.width);
             $element.css("margin-left",(plugin.settings.width/2)*-1);
             $element.html(tmpl);             
             $element.removeClass("mhide").addClass("modalito").addClass("mshow");
             if(plugin.settings.url != ''){
                switch(plugin.settings.result){
                    case 'iframe':
                         $("<iframe />", {
                            id          : 'frameContent',
                            name        : 'frameContent',
                            scrolling   : 'no',
                            frameborder : 0,
                            width       : '100%',
                            height      : plugin.settings.heightFrame,
                            src         : plugin.settings.url
                         }).appendTo($element.find(".content"));       
                    break; 
                    case 'ajax':
                    break;
                         $element.find(".content").html("Ups no se puede mostrar el contenido");
                    default:                    
                }
             }

             $element.on('click', $(".close"), function(event) {
                event.preventDefault();
                destroy();
             }); 
              
             if(plugin.settings.eschide){
                $(document).on('keyup',function(event) {
                    event.preventDefault();
                    if(event.which == 27){
                        destroy();
                    }
                });
             }              

        }

        var hide,destroy = function(){            
            $element.removeClass("mshow").addClass("modalito").addClass("mhide");
            $backdrop.remove();
        }

        init();

    }

})(jQuery);
