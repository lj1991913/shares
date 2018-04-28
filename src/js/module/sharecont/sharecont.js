function workShare(opts) {
	this.title = opts.title;
	this.logo = opts.logo;
	this.desc = opts.desc;
	this.successText = opts.successText || "分享成功";
	this.errorText = opts.errorText || "取消分享";
	this.delay = opts.delay || 2000;
	this.init();
}
workShare.prototype.init = function() {
	var host = window.location.origin,
		sing, link, url;
	//host = 'https://test.api.lebaoedu.com/';
	var desc = this.desc,
		title = this.title,
		logo = this.logo;
	link = window.location.href;
	Ajax.request({
		url: host + '/upload/static/web/wxsign/',
		method: 'POST',
		data: "url=" + encodeURIComponent(link),
		success: function(data) {
			sing = JSON.parse(data.responseText);
			url = sing.url;
			wx.config({
				debug: false,
				appId: sing.appId,
				timestamp: parseInt(sing.timestamp),
				nonceStr: sing.nonceStr,
				signature: sing.signature,
				jsApiList: [
					// 所有要调用的 API 都要加到这个列表中
					'onMenuShareTimeline',
					'onMenuShareAppMessage',
					'onMenuShareQQ'
				]
			});
			wx.ready(function() {
				wx.onMenuShareAppMessage({
					title: title, // 分享标题
					desc: desc, // 分享描述
					link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: logo, // 分享图标
					type: '', // 分享类型,music、video或link，不填默认为link
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					success: function() {
						// 用户确认分享后执行的回调函数
					},
					cancel: function() {
						// 用户取消分享后执行的回调函数

					}
				});

				//分享朋友圈
				wx.onMenuShareTimeline({
					title: title, // 分享标题
					link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: logo, // 分享图标
					success: function() {
						// 用户确认分享后执行的回调函数
					},
					cancel: function() {
						// 用户取消分享后执行的回调函数
					}
				});
				//分享朋友圈

				//分享QQ
				wx.onMenuShareQQ({
					title: title, // 分享标题
					desc: desc, // 分享描述
					link: url, // 分享链接
					imgUrl: logo, // 分享图标
					success: function() {
						// 用户确认分享后执行的回调函数
					},
					cancel: function() {
						// 用户取消分享后执行的回调函数
					}
				});

				//分享QQ
			});
			wx.error(function(res) {});
		}
	});
};

workShare.prototype.shareSuccess = function() {
	//分享成功
	var str = '<div id="sharesuccess" class="sharesuccess-mask"></div><div class="sharesuccess-tip">' + this.successText + '</div>';
	$('body').append(str);
};


