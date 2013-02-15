/*
 DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004
 
 Copyright (C) 2013 Christian Becher / phaziz.com
 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.
 
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 
  0. You just DO WHAT THE FUCK YOU WANT TO.
*/
;(function ( $, window, document, undefined ) {
    var pluginName = 'phazizLoadr',
        defaults = {
            fadeInSpeed     :   1750,
            loadurl         : 	'',
            consoleDebug    :   true
        };
    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }
    Plugin.prototype.init = function () {
		var options = $.extend(defaults, options);
    };
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
			//console.log(this);
			$(this).hide();
            var o = options;
            var c = $(this);
            //console.log(c);
            jQuery.ajax({
                url:        o.loadurl,
                dataType:   "json",
                success:    function(data)
                            {
                                jQuery.each(data, function(i)
                                {
                                    jQuery(c).append(data[i].CONTENT);
                                    if(o.consoleDebug == true){
                                        console.log('phazizLoadr say\'s : ' + data[i].CONTENT);
                                    }
                                });
                                $(c).fadeIn(o.fadeInSpeed);
                            }
            });
        });
    }
})( jQuery, window, document );