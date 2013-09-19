/*global define, console*/
define([
    "dojo/_base/lang",
    "dojo/on",
    "dworklight/activity",
    
    
    "dojo/text!app/views/activity/activity.html",
    "dojox/mobile/EdgeToEdgeList",
    "dojox/mobile/Heading",
    "dojox/mobile/ListItem",
    "dojox/mobile/RoundRect",
    "dojox/mobile/RoundRectCategory",
    "dojox/mobile/TextBox",
    "dojox/mobile/ToolBarButton"
], function (lang, on, activity) {
    "use strict";
    return {
        init: function () {
            // summary:
            //      view life cycle init()
            console.log(this.name + " view:init()");
            this.own(
				on( this.dapMessageButton.domNode  , "click", lang.hitch(this, "processMessageBusy")  ),
				on( this.dapCountdownButton.domNode, "click", lang.hitch(this, "processCountdownBusy") )
			);
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
		processMessageBusy: function() {		
			var F = this.name + ":processMessageBusy: ";
			var msg = this.dapText.get("value");
			console.log(F,"Starting message busy: ", msg);
			activity.start(msg);
			setTimeout( function() {
				console.log(F,"Stopping message busy");
				activity.stop();
			}, 5000);
		},
		
		//-----------------------------------------------------------------------------------------
		processCountdownBusy: function() {		
			var F = this.name + ":processCountdownBusy: ";
			var cntr = 5;
			var msg = "Countdown: " + cntr;
			console.log(F,"Starting countdown busy with:", cntr);
			activity.start(msg);
			var f = function() {
				setTimeout( function() {
					msg = "Countdown: " + cntr;
					console.log(F,"Updating countdown busy:", msg);
					activity.start(msg);
					if ( cntr-- > 0 ) {
						f();
					} else {
						activity.stop();
					}
				}, 1000);
			};
			f();
		},

    };
});
