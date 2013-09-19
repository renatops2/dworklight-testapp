/*
 *  Licensed Materials - Property of IBM
 *  5725-G92 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

//-----------------------------------------------------------------------------------------
//  Log string content in logData to Worklight
//-----------------------------------------------------------------------------------------
function logToWorklight(logData) {
	try{
		WL.Logger.info(_toJson(logData));
		return {resp:"Logging Success"};
	}catch(e){
		WL.Logger.error("logToWorklight exception::" + e.message);
		return  { isSuccessful:false, resp:"Logging Failure"};
	}
}

//-----------------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------------
function _toJson( obj ) {
	//return com.worklight.server.integration.api.JSObjectConverter.toFormattedString( obj );	
	var cx = org.mozilla.javascript.Context.enter();
	var scope = cx.initStandardObjects();
	return org.mozilla.javascript.NativeJSON.stringify(cx, scope, obj, null, null); 
}

//-----------------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------------
function _JsonObjToJs( obj ) {
	return eval("(" + _toJson(obj) + ")"); 
}

//-----------------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------------
function _evalprocess( obj ) {
	return eval("(" + obj + ")");	
}

//-----------------------------------------------------------------------------------------
//
//-----------------------------------------------------------------------------------------
function _base64Decode(/* string */str) {
//	// summary:
//	//		Convert a base64-encoded string to an array of bytes
//	// description:
//	//		Taken from Dojo's Base64 module (dojox/encoding/base64.js).
	var p="=";
	var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var s=str.split(""), out=[];
	var l=s.length;
	while(s[--l]==p){ }	//	strip off trailing padding
	for (var i=0; i<l;){
		var t=tab.indexOf(s[i++])<<18;
		if(i<=l){ t|=tab.indexOf(s[i++])<<12; };
		if(i<=l){ t|=tab.indexOf(s[i++])<<6; };
		if(i<=l){ t|=tab.indexOf(s[i++]); };
		out.push((t>>>16)&0xff);
		out.push((t>>>8)&0xff);
		out.push(t&0xff);
	}
	//	strip off any null bytes
	while(out[out.length-1]==0){ out.pop(); }
	return out;	//	byte[]
};


//----------------------------------------------------------------------------
function _getObjectFromList( list, key, val ) {
	// summary:
	//		Retrieves FIRST matching Object from a list of objects
	// example:
	//		_getObjectFromList( accountsStub, "accountNumber", "178" )
	// returns:
	//		First matching object in list or null
	var list = _getObjectsFromList(list, key, val);
	return list.length > 0 ? list[0] : null;
}

//----------------------------------------------------------------------------
function _getObjectsFromList( list, key, val ) {
	// summary:
	//		Retrieves matching Object(s) from a list of objects
	// example:
	//		_getObjectsFromList( accountsStub, "city", "Miami" )
	// returns:
	//		List of matching objects
	var ol  = [];
	var len = list.length;
	for (var i=0; i < len; i++) {
		if ( list[i][key] == val ) {
			ol.push( list[i] );
		}
	}
	return ol;
}


//----------------------------------------------------------------------------
accountsStub = [
	{
		"accountNumber"  : "123",
		"streetAddress"   : "232 NW South Street East",
	    "city"           : "Miami",
	    "status"         : "Active",
	    "currentBalance" : "999.99",
  },
  {
		"accountNumber"  : "125",
	    "streetAddress"   : "1111 S. Coconut Lane",
	    "city"           : "Coral Gables",
	    "status"         : "Inactive",
	    "currentBalance" : "3435.23",
  },
  {
		"accountNumber"  : "178",
	    "streetAddress"   : "232 NW South Street East",
	    "city"           : "Miami",
	    "status"         : "Active",
	    "currentBalance" : "999.99",
  },
  {
		"accountNumber"  : "182",
	    "streetAddress"   : "232 NW South Street East",
	    "city"           : "Miami",
	    "status"         : "Active",
	    "currentBalance" : "99.99",
   }
];

