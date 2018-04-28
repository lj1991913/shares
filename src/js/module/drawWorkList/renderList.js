	let pic1 = require('../../../images/worklist-left-1.png');
	let pic2 = require('../../../images/worklist-left-2.png');
	let pic3 = require('../../../images/worklist-left-3.png');
	let pic4 = require('../../../images/worklist-left-4.png');
	let icon = require('../../../images/workList-los.png');
	class workList{
		constructor(options){
			this.target = options.target || '';
			this.data = options.data || {};
		}
		init(){
			this.createElemet();
		}
		show(){
			
		}
		createElemet(){
			let index = 0, img;
			for(var i=0;i<this.data.data.length;i++){
				index++;
				if(index >4) index = 1;

				if(index == 1){
					img = pic1
				}else if(index == 2){
					img = pic2
				}else if(index== 3){
					img = pic3
				}else{
					img = pic4
				}
				let str = '';
				str='<div class="work-list-item" classworkId = "'+this.data.data[i].class_work_id+'"><div class="work-list-item-left"><img class="work-left-bg"src="'+img+'"alt=""><img class="work-left-icon"src="'+icon+'"alt=""></div><div class="work-list-item-right"><div class="work-list-item-right-title">'+this.data.data[i].json.lessonName+'</div><div class="work-list-item-right-cont">'+this.data.data[i].json.homeworkdescription+'</div><div class="work-list-item-right-button">有奖作业</div></div></div>';
				this.target.append(str)
				//lebaop://activity=homework&params=[homeworkID]
			}
		}
		moto (){
		}
	}

	export {workList}