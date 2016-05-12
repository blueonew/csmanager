(function(){
	
	var CorrelationTimestamp = function(tlvMaster,tlvOther){
		this.tlvMaster = tlvMaster;
		this.tlvOther = tlvOther;
	}
	
	var onError = function(lastError,lastErrorSource){
		
	}
	
	var onSyncNowAchievable = function(mediaObject){
		
	}
	
	var onInterDeviceSyncDispersionUpdate = function(){
		
	}
	
	var initMediaSynchroniser = function(mediaObject,timelineSelector){
		
	}
	
	var initSlaveMediaSynchroniser = function(css_ci_service_url){
		
	}
	
	var addMediaObject = function(mediaObject,timelineSelector,correlationTimestamp,tolerance,multiDecoderMode){
	
	}
	
	var removeMediaObject = function(mediaObject){
		
	}
	
	var updateCorrelationTimestamp = function(mediaObject,correlationTimestamp){
		
	}
	
	var enableInterDeviceSync = function(callback){
		
	}
	
	var disableInterDeviceSync = function(callback){
		
	}
	
	var HbbTVMediaSynchroniser = function(){
		this.onError = onError; 
		this.onSyncNowAchievable = onSyncNowAchievable;
		this.lastError = 0;
		this.lastErrorSource = null;
		this.nrOfSlaves = 0;
		this.interDeviceSyncEnabled = false;
		this.interDeviceSyncDispersion;
		this. onInterDeviceSyncDispersionUpdate =  onInterDeviceSyncDispersionUpdate;
		this.minSyncBufferSize = 0;
		this.maxBroadbandStreamsWithBroadcast = 1;
		this.maxBroadbandStreamsNoBroadcast = 2;
		this.currentTime;
		this.initMediaSynchroniser = initMediaSynchroniser;
		this.initSlaveMediaSynchroniser = initSlaveMediaSynchroniser;
		this.addMediaObject = addMediaObject;
		this.removeMediaObject = removeMediaObject;
		this.updateCorrelationTimestamp = updateCorrelationTimestamp;
		this.enableInterDeviceSync (function callback)
		
	};
	
	window.oipfObjectFactory = window.oipfObjectFactory || {};
	window.oipfObjectFactory.createMediaSynchroniser = oipfObjectFactory.createMediaSynchroniser || function(){
		return new HbbTVMediaSynchroniser()
	}
	
})();