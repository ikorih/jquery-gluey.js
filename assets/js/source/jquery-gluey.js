;(function($) {

	'use strick';

	var _parseOptions = function(options) {
		var opts = {
			byRow: true,
			property: 'height',
			target: null,
			remove: false
		};

		if (typeof options === 'object') {
			return $.extend(opts, options);
		}

		return opts;
	};

	var gluey = $.fn.gluey = function(options) {

		this.each(function(){
			var elem = this;

		});

	 };


})(jQuery);
