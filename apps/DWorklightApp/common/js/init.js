// Uncomment the initialization options as required. For advanced initialization options please refer to IBM Worklight Information Center 
 
window.$ = window.jQuery = WLJQ;

var wlInitOptions = {
    connectOnStartup : false,
	//onConnectionFailure: function (){},
	//timeout: 30000,
	//heartBeatIntervalInSecs: 20 * 60,
	logger : {enabled: true, level: 'debug', stringify: true, pretty: false,
		tag: {level: false, pkg: true}, whitelist: [], blacklist: []},
	analytics : {
		enabled: false
		//url : ''
	}
	//busyOptions: {text: "Loading..."}
};

if (window.addEventListener) {
	window.addEventListener('load', function() { WL.Client.init(wlInitOptions); }, false);
} else if (window.attachEvent) {
	window.attachEvent('onload',  function() { WL.Client.init(wlInitOptions); });
}

Messages = {};

//-----------------------------------------------------------------------
function wlCommonInit(){

	console.log(">>>>>>>>>> App Starting <<<<<<<<<<");
//	require([
//	    // Add any common layer files here
//	], function() {
		require([
		  // Add any discreet required module here.
		  "app/main",
		  "dworklight/main"
		], function() {
			console.log(">>>>>>>>>> Modules loaded <<<<<<<<<<");
			
		});
//	});

}
