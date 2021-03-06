(function (w){
	//兼容性事件
    var EventUtil={
		addHandler: function (ele,type,handler) {
			if(ele.addEventListener){
				ele.addEventListener(type,handler,false);
			}else if(ele.attachEvent){
				ele.attachEvent("on"+type,handler);
			}else{
				ele["on"+type]=handler;
			}
		},
		getEvent:function (event) {
			return event ? event : window.event;
		},
		getTarget:function (event) {
			return event.target || event.srcElement;
		},
		preventDefault:function (event) {
			if(event.preventDefault){
				event.preventDefault();
			}else{
				event.returnValue=false;
			}
		},
		removeHandler:function (ele,type,handler) {
			if(ele.removeEventListener){
				ele.removeEventListener(type,handler,false);
			}else if(ele.detachEvent){
				ele.detachEvent("on"+type,handler);
			}
			else{
				ele["on"+type]=null;
			}
		},
		stopPropagation:function (event) {
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelable=true;
			}
		}
	}
	w.EventUtil=EventUtil;
})(window)