let path = require('path');
let src = path.resolve(__dirname, './src');
let isApp = require('../checkAPP/checkAPP.js');
module.exports = function() {
	let flag = isApp(); //判断是否在小程序
	let user_id = GetQueryString('user_id');
	if (user_id != null) {
		return user_id;
	} else {
		
		return "";
	}
};


function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}