module.exports = function() {
	let host = window.location.origin;
	/*if (host.indexOf('test')) {
		host = 'https://test.api.lebaoedu.com';
	} else {
		host = 'https://api.lebaoedu.com';
	}*/
	host = 'https://test.api.lebaoedu.com';
	return host;
}