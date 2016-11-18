'use strict'
//document.addEventListener('DOMContentLoaded',function(){
	
	var aGameBtn=document.querySelectorAll('.gameBtn');//点击出现游戏框
	var aImgBtn=document.querySelectorAll('.ImgBtn');//点击出现游戏框
	var aGame=document.querySelectorAll('.game');//游戏框
	var aClose=document.querySelectorAll('.close')//点击关闭游戏框
	var oBrowse=document.querySelectorAll('.browse')//点击关闭游戏框
	
	var aYouxi1=document.querySelectorAll('.textList1 .youxi1');//第一页li（字的框）
	var oResult1=document.querySelector('.oResult1');//第一页用户选择的字（字的框）
	var oGravity1=document.querySelector('.Gravity1');//第一页重选按钮
	var oZhengque1=document.querySelector('.zhengque1');//第一页回答正确提示
	var oCuowu1=document.querySelector('.oCuowu1');//第一页回答错误提示
	
	var aYouxi2=document.querySelectorAll('.textList2 .youxi2');//第二页li（字的框）
	var oResult2=document.querySelector('.oResult2');//第二页用户选择的字（字的框）
	var oGravity2=document.querySelector('.Gravity2');//第二页重选按钮
	var oZhengque2=document.querySelector('.zhengque2');//第二页回答正确提示
	var oCuowu2=document.querySelector('.oCuowu2');//第一页回答错误提示
	
	var aYouxi3=document.querySelectorAll('.textList3 .youxi3');//第三页li（字的框）
	var oResult3=document.querySelector('.oResult3');//第三页用户选择的字（字的框）
	var oGravity3=document.querySelector('.Gravity3');//第三页重选按钮
	var oZhengque3=document.querySelector('.zhengque3');//第三页回答正确提示
	var oCuowu3=document.querySelector('.oCuowu3');//第一页回答错误提示
	
	var aYouxi4=document.querySelectorAll('.textList4 .youxi4');//第三页li（字的框）
	var oResult4=document.querySelector('.oResult4');//第三页用户选择的字（字的框）
	var oGravity4=document.querySelector('.Gravity4');//第三页重选按钮
	var oZhengque4=document.querySelector('.zhengque4');//第三页回答正确提示
	var oCuowu4=document.querySelector('.oCuowu4');//第一页回答错误提示
	
	var aYouxi5=document.querySelectorAll('.textList5 .youxi5');//第三页li（字的框）
	var oResult5=document.querySelector('.oResult5');//第三页用户选择的字（字的框）
	var oGravity5=document.querySelector('.Gravity5');//第三页重选按钮
	var oZhengque5=document.querySelector('.zhengque5');//第三页回答正确提示
	var oCuowu5=document.querySelector('.oCuowu5');//第一页回答错误提示
	
	var aYouxi6=document.querySelectorAll('.textList6 .youxi6');//第六页li（字的框）
	var oResult6=document.querySelector('.oResult6');//用户选择的字（字的框）
	var oGravity6=document.querySelector('.Gravity6');//第六页重选按钮
	var oZhengque6=document.querySelector('.zhengque6');//第六页回答正确提示
	var oCuowu6=document.querySelector('.oCuowu6');//第一页回答错误提示

	var arr=['苗绣','雷山鱼酱','吊脚楼','风雨桥','千户苗寨','贵州大数据中心'];
	var correctNum=0;//用户答对正确个数
	
	var choujiang=document.querySelector('.choujiang')//点击参与抽奖按钮
	var oDraw=document.querySelector('.draw')//参与抽奖弹框
	var oGuanbi=document.querySelector('.guanbi')//参与抽奖弹框关闭按钮
	var oInfo1=document.querySelector('.info1')//信息弹框
	var oInfo2=document.querySelector('.info2')//提示对三题才能提交
	var oInfo3=document.querySelector('.info3')//奖项说明
	var oXinxi=document.querySelector('.xinxi')//信息
	var oShuoming=document.querySelector('.shuoming')//奖项说明
	var oNameInput=document.querySelector('.nameInp')//提示对三题才能提交
	var oPhone=document.querySelector('.phoneInp')//提示对三题才能提交
	var oFXBtn=document.querySelector('.FXBtn')//分享按钮
	var oFX=document.querySelector('.FX')//分享页
	var oHuatiBtn=document.querySelector('.huatiBtn')//参与话题按钮
	var oHuatiBox=document.querySelector('.huatiBox')//参与话题页
	
	//新增页
	var oFanzhuan1=document.querySelector('.oFanzhuan1');
	var oFanzhuan=document.querySelector('.oFanzhuan');
	setTimeout(function(){
		oFanzhuan.classList.remove('ani');
		oFanzhuan1.style.display='block';
		oFanzhuan.style.animation='oFanzhuan 2s linear 1s infinite alternate';
		oFanzhuan.style.WebkitAnimation='oFanzhuan 2s linear 1s infinite alternate';
		
		
	},1700)
	/*所有猜字的弹出按钮（点这里）*/
	for(var i=0;i<aGameBtn.length;i++){
		aGameBtn[i].index=i;
		aGameBtn[i].onclick=function(){
			for(var i=0;i<aGame.length;i++){
				aGame[this.index].style.display='block';
			}	
		}
	}
	for(var i=0;i<aImgBtn.length;i++){
		aImgBtn[i].index=i;
		aImgBtn[i].onclick=function(){
			for(var i=0;i<aGame.length;i++){
				aGame[this.index].style.display='block';
			}	
		}
	}
	
	/*所有猜字的关闭按钮（差号）*/
	for(var i=0;i<aClose.length;i++){
		aClose[i].onclick=function(){
			this.parentNode.style.display='none';	
		}
	};
	for(var i=0;i<oBrowse.length;i++){
		oBrowse[i].onclick=function(){
			this.parentNode.style.display='none';	
		}
	};
	/*计算游戏字体行高*/
	function aLineHeight(obj){
		var objLien=parseInt(obj[0].style.height);
		for(var i=0;i<obj.length;i++){
			obj[i].style.lineHeight=objLien+'px';
		}
	};
	function oLineHeight(obj){
		obj.style.lineHeight=parseInt(obj.style.height)+'px';
	};
	aLineHeight(aYouxi1);
	oLineHeight(oResult1);
	aLineHeight(aYouxi2);
	oLineHeight(oResult2);
	aLineHeight(aYouxi3);
	oLineHeight(oResult3);
	aLineHeight(aYouxi4);
	oLineHeight(oResult4);
	aLineHeight(aYouxi5);
	oLineHeight(oResult5);
	aLineHeight(aYouxi6);
	oLineHeight(oResult6);
	
	/*----六页选字部分----*/
	//aName:用户选择的字（li）
	//oName:结果框（用户选择的结果框）
	//oZheng：正确图片显示
	//oChong:重选按钮
	//shuzi:正确答案的文字个数
	function xuanzi(aName,oName,oZheng,oChong,oCuo,shuzi){
	 	var str='';
		var num=0;
		for(var i=0;i<aName.length;i++){
			aName[i].onclick=function(){
				num++;	
				if(num<=shuzi){ 
					str=str+this.innerHTML;
					oName.innerHTML=str;
					for(var i=0;i<=arr.length;i++){
						if(arr[i]==str){
							//用户选对了
							correctNum++;
							console.log(correctNum)
							oChong.onclick=null;
							oZheng.style.display='block';
			 				for(var i=0;i<aName.length;i++){
								aName[i].onclick=null;
							}
						}else if(num==shuzi&&arr[0]!=str&&arr[1]!=str&&arr[2]!=str&&arr[3]!=str&&arr[4]!=str&&arr[5]!=str){
							//用户选错了
							oCuo.style.display='block';
						}
					}
				}else{
					oName.innerHTML=str;
				}
			}
		};
		oChong.onclick=function(){
			str='';
			num=0;
			oName.innerHTML='';
			oCuo.style.display='none';
		}
	};
	//第一页选字游戏
	xuanzi(aYouxi1,oResult1,oZhengque1,oGravity1,oCuowu1,2);
	
	//第二页选字游戏
	xuanzi(aYouxi2,oResult2,oZhengque2,oGravity2,oCuowu2,4);
	
	//第三页选字游戏
	xuanzi(aYouxi3,oResult3,oZhengque3,oGravity3,oCuowu3,3);
	
	//第四页选字游戏
	xuanzi(aYouxi4,oResult4,oZhengque4,oGravity4,oCuowu4,3);
	
	//第五页选字游戏
	xuanzi(aYouxi5,oResult5,oZhengque5,oGravity5,oCuowu5,4);
	
	//第六页选字游戏
	xuanzi(aYouxi6,oResult6,oZhengque6,oGravity6,oCuowu6,7);
	
	
	/***-----------最后一页参与抽奖---------***/
	choujiang.onclick=function(){
		oDraw.style.display='block';
		if(correctNum>=3){
			oInfo1.style.display='block';
		}else{
			oInfo2.style.display='block';
		}
	}
	oGuanbi.onclick=function(){
		oDraw.style.display='none';
		oInfo1.style.display='none';
		oInfo2.style.display='none';
		oInfo3.style.display='none';
	}
	oXinxi.onclick=function(){
		var reg = /^1[34578]\d{9}$/g;
		if(!reg.test(oPhone.value)){
			alert('请输入正确的手机号')
		}else{
			saveUser(oNameInput.value, oPhone.value,correctNum);
		}
	}
	/*分享页*/
	oFXBtn.onclick=function(){
		oFX.style.display='block';
	}
	oFX.onclick=function(){
		this.style.display='none';
	}
	oHuatiBtn.onclick=function(){
		oHuatiBox.style.display='block';
	}
	oHuatiBox.onclick=function(){
		this.style.display='none';
	}
	
	//奖项说明
	oShuoming.onclick=function(){
		oInfo1.style.display='none';
		oInfo3.style.display='block';
	}
	document.querySelector('.zuihou122').onclick = function(){
		oInfo2.style.display='none';
		oInfo3.style.display='block';
	}
	
	document.querySelector('.success').onclick = function(){
		oDraw.style.display='none';
    document.querySelector('.success').style.display = 'none';
		oInfo3.style.display='none';
	}
	 
//},false)


//need zepto.js
//通过ajax请求，保存高通-5月贵州大数据h5的用户信息
function saveUser(name, phone, gamepoint){
  $.ajax({
    type: 'POST',
    url: 'http://monitor.iblacktree.com/user-reg/qualcomm/guizhoucheckin',
    data: {
      name: encodeURI(name),
      phone: encodeURI(phone),
      gamepoint: gamepoint
    },
    dataType: 'json',
    success: function(data){
      if(data.success){
        //提交成功
        //alert('提交成功')
        document.querySelector('.success').style.display = 'block';
        setTimeout(function(){
        	oDraw.style.display='none';
			    document.querySelector('.success').style.display = 'none';
					oInfo3.style.display='none';
        }, 800);
        //oXinxi.onclick=null;
        //oShuoming.onclick=null;
        //oDraw.style.display='none';
      }
    },
    error: function(xhr, type){
      alert('对不起，提交失败请重试!')
    }
  })
}

var scaleW=window.innerWidth/320;
	var scaleH=window.innerHeight/480;
	var resizes = document.querySelectorAll('.resize');
	for (var j=0; j<resizes.length; j++) {
	   resizes[j].style.width=parseInt(resizes[j].style.width)*scaleW+'px';
	   resizes[j].style.height=parseInt(resizes[j].style.height)*scaleW+'px';
	   resizes[j].style.top=parseInt(resizes[j].style.top)*scaleW+'px';
	   resizes[j].style.left=parseInt(resizes[j].style.left)*scaleW+'px'; 
	
	}
	var scales = document.querySelectorAll('.txt');
	for (var i=0; i<scales.length; i++) {
	ss=scales[i].style;
	ss.webkitTransform = ss.MsTransform = ss.msTransform = ss.MozTransform = ss.OTransform =ss.transform='translateX('+scales[i].offsetWidth*(scaleW-1)/2+'px) translateY('+scales[i].offsetHeight*(scaleH-1)/2+'px)scaleX('+scaleW+') scaleY('+scaleH+') ';
	}
	
		  
	var mySwiper = new Swiper ('.swiper-container', {
	direction : 'vertical',
	//pagination: '.swiper-pagination',
	mousewheelControl : true,
	onInit: function(swiper){
	swiperAnimateCache(swiper);
	swiperAnimate(swiper);
	  },
	onSlideChangeEnd: function(swiper){
	swiperAnimate(swiper);
	}	  
	   })         

