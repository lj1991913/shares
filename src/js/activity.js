require('../css/index.less');
require("expose-loader?$!jquery");
let Ajax = require('./http/ajax.js');
let Host = require('./http/host.js');
let Popup = require('./module/Popup/Popup.js');
let getToken = require('./module/getToken/getToken.js');

'use strict'; 

//弹出层
Popup($('#gz'), 'click', 'active', [$('#mask'), $('#guize')], $("#know")); //规则
Popup($('#zj'), 'click', 'active', [$('#mask'), $('#zjinfo')], $("#know2")); //中奖
Popup($('#shareopen'), 'click', 'active', [$('#mask'), $('#shareinfo')], $("#close2")); //分享
//let token = getToken();
//lebaop://activity=openwx
//跳转微信
$(document).on('click', '#tovx', function() {
	let t = $('body').attr('token');
	if (t != '') {
		window.location.href = 'lebaop://activity=openwx';
	} else {
		window.location.href = 'http://100000121641.retail.n.weimob.com/saas/retail/100000121641/4864541/shop/index?code=061g2Ze21JNWyN1jMVe21J72f21g2ZeP&appid=wxa3f30fbeb034768f';
	}
});

//点击分享去列表页面
$(document).on('click', '#share', function() {
	let t = $('body').attr('token');
	let gotoApp = require('./module/gotoApp/gotoApp.js');
	if (t != '') {
		window.location.href = 'list.html';
	} else {
		gotoApp();
	}

});
//分享当前页
$(document).on('click', '#shareA', function() {
	let t = $('body').attr('token');
	let gotoApp = require('./module/gotoApp/gotoApp.js');
	if (t != '') {
		window.location.href = 'ebaop://activity=sharePrize';
	} else {
		gotoApp();
	}
});