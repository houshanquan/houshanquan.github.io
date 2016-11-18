document.addEventListener('DOMContentLoaded',function(){
	var ua = navigator.userAgent.toLowerCase();	
	
	var Proportion=window.innerWidth/320;
	var oNoWinning=document.querySelector('.NoWinning')//未获奖弹框
	var num=document.querySelector('.num');
	function getStyle(obj,sName){
		if(obj.currentStyle){
			return obj.currentStyle[sName];
		}else{
			return getComputedStyle(obj,false)[sName];
		}
	};
	function numRand() {//生成一个随机4位数
		var x = 777; //上限
		var y = 111; //下限
		var rand = parseInt(Math.random() * (x - y + 1) + y);
		return rand;
	}
	var isBegin = false;//开关
	$(function(){
		if (/iphone|ipad|ipod/.test(ua)) {
			var u =158*Proportion;		
		} else if (/android/.test(ua)) {
			var u =parseInt(158*Proportion);
		}
		$('.btnFoot').click(function(){
			if(isBegin) return false;
			isBegin = true;
			$(".num").css('backgroundPositionY',0);//初始全部为零
			var result = numRand();//得到一个随机3位数                         **需替换***
			var num_arr = (result+'').split('');//将生成的3位数转变为一个数组
			$(".num").each(function(index){
				var _num = $(this);
				setTimeout(function(){
					_num.animate({ 
						backgroundPositionY: (u*60) - (u*num_arr[index]),//算背景位置
					},{
						duration: 6000+index*3000,//运动持续时间
						easing: "easeInOutCirc",//运动类型 
						complete: function(){
							if(index==2){//运动结束
								isBegin = false;

								//判断是否中奖，中的什么奖
								oNoWinning.style.display='block';
								setTimeout(function(){
									oNoWinning.style.display='none';
								},1000)
							} 

						}
					});
				}, index * 300);
			});
		});	
	});
	//活动规则
	;(function(){
		var oBtn=document.querySelector('.hd .ruleBtn');//活动规则按钮
		var oBox=document.querySelector('.ruleBox')//活动规则弹框
		oBtn.addEventListener('touchstart',function(){
			oBox.style.display='block';
		},false)
		oBox.addEventListener('touchstart',function(){
			this.style.display='none';
		},false)
	})();
	//抽奖按钮
	;(function(){
		var oBtn=document.querySelector('.btnFoot');//活动规则按钮
		var oAni=document.querySelector('.drawBtnChild');//动画元素
		oBtn.addEventListener('touchstart',function(){
			if(!isBegin){
				oAni.style.animation='drawBtn1 0.1s linear forwards';
				oAni.style.WebkitAnimation='drawBtn1 0.1s linear forwards';
				oAni.addEventListener('animationEnd',fnUp,false)
				oAni.addEventListener('webkitAnimationEnd',fnUp,false)
				function fnUp(){
					oAni.style.animation='drawBtn2 0.1s linear forwards';
					oAni.style.WebkitAnimation='drawBtn2 0.1s linear forwards';
				}
			}
		},false)
	})();
	//提交信息
	;(function(){
		var oBtn=document.querySelector('.submitBtn')//提交按钮
		var oTkYes=document.querySelector('.data .submitYes')//提交成功弹框
		var oTkNo=document.querySelector('.data .submitNo')//提交失败弹框
	})()
},false)
