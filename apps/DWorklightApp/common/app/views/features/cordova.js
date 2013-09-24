define([
    "dojo/_base/array",
    "dojo/dom-construct",
    "dojo/has",
    "dojox/mobile/ListItem",
    
    "dcordova/features",
    "dojox/mobile/Heading",
    "dojox/mobile/RoundRect",
    "dojox/mobile/RoundRectCategory"
], function (array, domConstruct, has, ListItem) {
    "use strict";
    return {
    	
    	title : "Cordova 'Features'",
    	
    	hasTests : [
	  		"cordova",
	  		"cordova-accelerometer",
	  		"cordova-alert",
	  		"cordova-android",
	  		"cordova-beep",
	  		"cordova-blackberry",
	  		"cordova-camera",
	  		"cordova-capture-audio",
	  		"cordova-capture-image",
	  		"cordova-capture-video",
	  		"cordova-compass",
	  		"cordova-confirm",
	  		"cordova-connection",
	  		"cordova-contacts",
	  		"cordova-device",
	  		"cordova-file",
	  		"cordova-geolocation",
	  		"cordova-ios",
	  		"cordova-ipad",
	  		"cordova-iphone",
	  		"cordova-media",
	  		"cordova-platform",
	  		"cordova-storage",
	  		"cordova-webos",
	  		"cordova-windows"
	  	],

        init: function () {
            // summary:
            //      view life cycle init()
            console.log(this.name + " view:init()");
			
			var target = this.dapList.domNode;
            array.forEach(this.hasTests, function( ht ) {
            	var result = has( ht );
                var li = new ListItem({
                    "label"          : ht,
                    "rightText"      : result, 
                    "rightIcon"      : result ? "mblDomButtonCheckboxOn" : "mblDomButtonCheckboxOff",
                    "variableHeight" : true
                }, domConstruct.create("li",{},target) );
                li.startup();
            });
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
        }
        		
    };
});
