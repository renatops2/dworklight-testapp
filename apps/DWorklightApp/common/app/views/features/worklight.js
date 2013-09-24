define([
    "dojo/_base/array",
    "dojo/dom-construct",
    "dojo/has",
    "dojox/mobile/ListItem",
    
    "dworklight/features",
    "dojox/mobile/Heading",
    "dojox/mobile/RoundRect",
    "dojox/mobile/RoundRectCategory",
    "dojox/mobile/RoundRectList"
], function (array, domConstruct, has, ListItem) {
    "use strict";
    return {
    	
    	title : "Worklight 'Features'",

    	hasTests : [
       	    "worklight",
       	    "worklight-device",
       	    "worklight-hybrid",
       	    "worklight-android",
       	    "worklight-iphone",
       	    "worklight-ipad",
       	    "worklight-ios",
       	    "worklight-tablet",
       	    "worklight-webapp",
       	    "worklight-preview",
       	    "worklight-preview-android",
       	    "worklight-preview-ipad",
       	    "worklight-preview-iphone",
       	    "worklight-preview-ios",
       	    "worklight-preview-tablet",
       	    "worklight-preview-webapp",
       	    "worklight-phone-size",
       	    "worklight-tablet-size",
       	    "worklight-tablet-like",
       	    "worklight-mobile-browser",
       	    "worklight-desktop-browser",
       	    "worklight-jsonstore"
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
