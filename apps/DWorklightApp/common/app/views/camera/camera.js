/*global define, console*/
define([
    "dojo/_base/lang",
    "dojo/dom-style",
    "dojo/has",
    "dojo/on",
    
    "dojox/mobile/EdgeToEdgeList",
    "dojox/mobile/Heading",
    "dojox/mobile/ListItem",
    "dojox/mobile/RoundRect",
    "dojox/mobile/RoundRectCategory",
    "dojox/mobile/Button"
], function (lang, domStyle, has, on) {
    "use strict";
    return {
        init: function () {
            // summary:
            //      view life cycle init()
            console.log(this.name + " view:init()");
            if ( has("cordova-camera") ) {
            	domStyle.set(this.dapHasCamera, "display", "block");
            } else {
            	domStyle.set(this.dapNoCamera, "display", "block");
            }
            this.own(
				on( this.dapTakeDataPicture, "click", lang.hitch(this, "takePicture", "data") ),
				on( this.dapTakeFilePicture, "click", lang.hitch(this, "takePicture", "file") )
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
        takePicture: function( type ) {
        	var F = this.name + ":takePicture:";
        	console.log(F,"Starting. Type:", type);
        	var dtype = type === "data" ? Camera.DestinationType.DATA_URL : Camera.DestinationType.FILE_URI
        	var image = this.dapImage;
        	var label = this.dapLabel;
            image.src = "";
        	navigator.camera.getPicture(
        		function(imageData) {
        			if ( type === "data" ) {
        				var sz = (imageData.length / 1024 ) + "K";
        				console.log(F + "Got Picture. Size: " + sz);
        				label.innerHTML = "Picture size: " + sz;
        				image.src = "data:image/jpeg;base64," + imageData;
        			} else {
        				console.log(F + "Got Picture. URL: " + imageData);
        				label.innerHTML = "Picture URL: " + imageData;
        				image.src = imageData;
        			}
        		},
        		function(err) {
        			console.error(F+"Error: " + err);
        		},
        		{
        			quality: 49,
        			destinationType: dtype
        		}
        	); 
        }
    };
});
