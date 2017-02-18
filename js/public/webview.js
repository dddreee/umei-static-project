/**
 * 与IOS交互相关JS
 */
window.onerror = function(err) {
		log('window.onerror: ' + err);
	}
	
	function connectWebViewJavascriptBridge(callback) {
		if (window.WebViewJavascriptBridge) {
			callback(WebViewJavascriptBridge);
		} else {
			document.addEventListener('WebViewJavascriptBridgeReady', function() {
				callback(WebViewJavascriptBridge);
			}, false)
		}
	}
	
	connectWebViewJavascriptBridge(function(bridge) {
		var uniqueId = 1;
		function log(message, data) {
			var log = document.getElementById('log');
			var el = document.createElement('div');
			el.className = 'logLine';
			el.innerHTML = uniqueId++ + '. ' + message + ':<br/>' + JSON.stringify(data);
			if (log.children.length) { log.insertBefore(el, log.children[0]) }
			else { log.appendChild(el); }
		}
		bridge.init(function(message, responseCallback) {
			log('JS got a message', message);
			var data = { 'Javascript Responds':'Wee!' };
			log('JS responding with', data);
			responseCallback(data);
		})

//		bridge.registerHandler('testJavascriptHandler', function(data, responseCallback) {
//			log('ObjC called testJavascriptHandler with', data);
//			var responseData = { 'Javascript Says':'Right back atcha!' };
//			log('JS responding with', responseData);
//			responseCallback(responseData);
//		})

		/**
		 * 去购买
		 */
		var buyBtn = document.getElementById('toBuy');
		buyBtn.onclick = function(e) {
			e.preventDefault();
			var data = {id : 1};
//			data = JSON.stringify(data);
			log('JS sending message', data);
			bridge.send(data, function(responseData) {
				log('JS got response', responseData);
			})
		}
		
		/**
		 * 用户端分享
		 */
		var shareBtnC = document.getElementById('toShareC');
		shareBtnC.onclick = function(e) {
			e.preventDefault();
			var data = { 
				id : 2,
				ico : 'http://app.umei.me/pzClubNew/events/images/fall2015/logo.jpg',
				title : '一线品牌送染膏，染发不办卡只要149！',
				desc : '最低价已经没有利润可言！染膏由顶尖品牌直接提供你来验货！'
			};
			//			data = JSON.stringify(data);			
			log('JS sending message', data);
			bridge.send(data, function(responseData) {
				log('JS got response', responseData);
			})
		}
		
		/**
		 * 发型师端分享
		 */
		var shareBtnM = document.getElementById('toShareM');
		shareBtnM.onclick = function(e) {
			e.preventDefault();
			var data = {
				id : 2,
				ico : 'http://app.umei.me/pzClubNew/events/images/fall2015/logo.jpg',
				title : '一线品牌送染膏，染发不办卡只要149！',
				desc : '最低价已经没有利润可言！染膏由顶尖品牌直接提供你来验货！'
			};
//			data = JSON.stringify(data);
			log('JS sending message', data);
			bridge.send(data, function(responseData) {
				log('JS got response', responseData);
			})
		}
		
		/**
		 * 拨打电话
		 */
		var callButton = document.getElementById('toCall');
		if(null != callButton && "undefined" != callButton)
		{
			callButton.onclick = function(e) {
				e.preventDefault()
				log('JS calling handler "testObjcCallback"')
				bridge.callHandler('onCallPhone', '4000619898', function(response) {
					log('JS got response', response)
				})
			}
		}
	})