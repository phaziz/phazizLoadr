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