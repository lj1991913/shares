require('../css/index.less');
require("expose-loader?$!jquery");
let Ajax = require('./http/ajax.js');
let Host = require('./http/host.js');
let renderList = require('./module/drawWorkList/renderList.js');
Ajax({
	url: Host() + '/Api/CshareWork/top/',
	method: 'GET',
	success: function(data) {
		console.log(data)
		let list = new renderList.workList({
			target : $('#cont'),
			data : data
		});
		list.init();
	},
	error: function(xhr, status, error) {
		console.log(xhr, status, error);
	}
});

$(document).on('click','.work-list-item',function(){
	var workid = $(this).attr('classworkid');
	window.location.href ="lebaop://activity=homework&params=" + workid;
});