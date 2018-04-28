
module.exports = function(target,sj,animation,openElement,closeElement){
	let $target = $(target) || '';
	let event = sj;
	let donghua = animation || '';
	let $openElement = openElement || '';
	let $closeElement = closeElement || '';
	//事件
	if(event == 'click'){
		$target.click(function(){
			for(var i =0;i<$openElement.length;i++){
				if(i==0){
					$openElement[i].show();
				}else{
					$openElement[i].addClass(donghua);
				}
			}
		});
		$closeElement.click(function(){
			for(var i =0;i<$openElement.length;i++){
				if(i==0){
					$openElement[i].hide();
				}else{
					$openElement[i].removeClass(donghua);
				}
			}
		});
	}
};