//'use strict'
//document.addEventListener('DOMContentLoaded',function(){
	
	function getStyle(obj,sName){
		if(obj.currentStyle){
			return obj.currentStyle[sName];
		}else{
			return getComputedStyle(obj,false)[sName];
		}
	};
	var scaleW1=parseInt(document.body.clientWidth||document.documentElement.clientWidth)/320; 
	
	var resizesZ = document.querySelectorAll('.resizeZ');
	var resizesX = document.querySelectorAll('.resizeX');
	
	//计算除图片元素以外的宽、高、top、left
	for (var j=0; j<resizesZ.length;j++) {
		
	   resizesZ[j].style.width=parseInt(getStyle(resizesZ[j],'width'))*scaleW1+'px';
	   resizesZ[j].style.height=parseInt(getStyle(resizesZ[j],'height'))*scaleW1+'px';
	   resizesZ[j].style.top=parseInt(getStyle(resizesZ[j],'top'))*scaleW1+'px';
	   resizesZ[j].style.left=parseInt(getStyle(resizesZ[j],'left'))*scaleW1+'px';
	};
	//图片元素的宽、top、left
	for (var i=0; i<resizesX.length;i++) {
	   resizesX[i].style.width=parseInt(getStyle(resizesX[i],'width'))*scaleW1+'px';
	   //resizes1[i].style.height=parseInt(getStyle(resizes1[i],'height'))*scaleW+'px';
	   resizesX[i].style.top=parseInt(getStyle(resizesX[i],'top'))*scaleW1+'px';
	   resizesX[i].style.left=parseInt(getStyle(resizesX[i],'left'))*scaleW1+'px';
	};
	
//},false)








