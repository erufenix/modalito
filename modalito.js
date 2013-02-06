// jQuery Plugin Boilerplate
// A boilerplate for jumpstarting jQuery plugins development
// version 1.1, May 14th, 2011
// by Stefan Gabos

;(function($) {

    $.modalito = function(element, options) {

        var defaults = {
            show:     false,
            backdrop: true,
            ulr : '',
            onFoo: function() {}
        }
        
        var tmpl = '<div class="close"></div>\n'+
                      '<div class="content">\n'+
                   '</div>\n';

        var plugin = this;
        var $backdrop = null;

        plugin.settings = {}

        var $element = $(element),
             element = element;                
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            plugin.build();
        }

        plugin.foo_public_method = function() {
            // code goes here
        }
        
        plugin.build = function(){
             //element.html(tmpl);
             if(plugin.settings.backdrop){
                if(window.parent.document.body){
                    $backdrop = $('<div class="modalito-backdrop"/>').appendTo(window.parent.document.body)
                }
                else{   
                    $backdrop = $('<div class="modalito-backdrop"/>').appendTo(window.parent.document.body)
                }
                console.log($backdrop);
             }             
             $element.html(tmpl);
             $element.removeClass("mhide").addClass("modalito").addClass("mshow");
        }
        
        plugin.init(); 

    }

    $.fn.modalito = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('modalito')) {
                var plugin = new $.modalito(this, options);
                $(this).data('modalito', plugin);
            }
        });

    }

})(jQuery);