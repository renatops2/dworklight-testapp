/*global define, console*/
define([
    "dojo/_base/array",
    "dojo/has",
    
    "dworklight/console",
    "dojox/mobile/Heading",
    "dojox/mobile/RoundRect",
    "dojox/mobile/RoundRectCategory",
], function (array, has) {
    "use strict";
    return {
        init: function () {
            // summary:
            //      view life cycle init()
            console.log(this.name + " view:init()");
        },
        beforeActivate: function (previousView, data) {
            // summary:
            //      view life cycle beforeActivate()
            console.log(this.name + " view:beforeActivate(" + (previousView ? previousView.name : "") + ",data)" + data);
        },
        afterActivate: function (previousView, data) {
            // summary:
            //      view life cycle afterActivate()
            console.log(this.name + " view:afterActivate(" + (previousView ? previousView.name : "") + ",data)" + data);
			this.processConsoleMessages();
        },
        beforeDeactivate: function (nextView, data) {
            // summary:
            //      view life cycle beforeDeactivate()
            console.log(this.name + " view:beforeDeactivate(" + (nextView ? nextView.name : "") + ",data)" + data);
        },
        afterDeactivate: function (nextView, data) {
            // summary:
            //      view life cycle afterDeactivate()
            console.log(this.name + " view:afterDeactivate(" + (nextView ? nextView.name : "") + ",data)" + data);
        },
        
		//-----------------------------------------------------------------------------------------
		processConsoleMessages: function() {		
			var F = this.name + ":processConsoleMessages: ";

			var obj = {
				"myString"  : "a string",
				"myInt"     : 123,
				"myDecimal" : 123.45,
				"myBool"    : true
			};
			
			console.log(F,"Testing console logging. Output should contain; string, int, decimal, boolean, null, object, and a full combination.");
			array.forEach(["debug", "log", "info", "warn", "error"], function(lvl) {
				console.log(F,">>>>> Testing console log level: ", lvl);
				console[lvl]("Hello string");
				console[lvl](123);
				console[lvl](123.45);
				console[lvl](true);
				console[lvl](null);
				console[lvl]( obj );
				console[lvl]( "Hello", 123, 123.45, true, null, obj );
			});
			
			if ( has("worklight") ) {
				console.log(F,"Testing Worklight logging. Output should contain; string, int, decimal, boolean, null, object, and a full combination.");
				array.forEach(["debug", "error"], function(lvl) {
					console.log(F,">>>>> Testing worklight logger level: ", lvl);
					WL.Logger[lvl]("Hello string");
					WL.Logger[lvl](123);
					WL.Logger[lvl](123.45);
					WL.Logger[lvl](true);
					WL.Logger[lvl](null);
					WL.Logger[lvl]( obj );
					WL.Logger[lvl]( "Hello", 123, 123.45, true, null, obj );
				});
				
			} else {
				console.log(F,"Not a Worklight environment");
			}
			console.log(F,">>>>> All console tests complete.");

		}
		
    };
});
