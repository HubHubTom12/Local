var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	


    // device APIs are available
    //
    function onDeviceReady() {
		alert("device ready");
        
        var key = "pen";
        var value = "blue";
        window.localstorage.setItem (key, value);
        
		document.addEventListener("resume", onResume, false);
		document.addEventListener("pause", onPause, false);
		
    }

  