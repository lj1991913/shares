module.exports = function(opt){
	console.log(opt);
	$.ajax({
		url :opt.url,
		method :opt.method,
		data : opt.data,
		dataType : 'json',
		success :function(data){
			opt.success(data);
		},
		error : function(xhr,status,error){
			opt.error(xhr,status,error);
		}
	});
};