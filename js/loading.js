/*
 * plin.cc
lodaing 插件

new Loading(arry:[{
		name:名称,
		type:类型,//mp3,img,font
		src:url,
		success:function(elem){当前加载完成,有返回值elem}
	}],conduct:function(elem){单次加载完成,有返回值elem},success:function(n){全部加载完成,有返回值n})

font类型 css必须配置
@font-face{font-family:'造字工房悦黑细体';src:url('font/造字工房悦黑细体.otf') format('truetype');}
@font-face{font-family:'STXINGKA';src:url('font/STXINGKA.TTF') format('truetype');}
@font-face{font-family:'华康海报体W12';src:url('font/华康海报体W12.TTF') format('truetype');}
@font-face{font-family:'简大黑';src:url('font/简大黑.TTF') format('truetype');}
@font-face{font-family:'造字工房悦黑细体';src:url('font/造字工房悦黑细体.otf') format('truetype');}

 * */
function Loading(){
	this.init.apply(this,arguments)
}
Loading.prototype.init=function(aload){
	var iCount=0,
		iLoaded=0,
		num=0;
	for(var i=0,iCount=aload.arry.length;i<iCount;i++){
		(function(i){
			console.log(aload.arry[i].src)
			if(aload.arry[i].type=='img'){
				var oImg=new Image();				
				oImg.onload=function(){
					loadfun(i,oImg);
					this.onload=null;
				}
				oImg.src=aload.arry[i].src;
			}else if(aload.arry[i].type=='font'){
				document.fonts.load('1em ' + aload.arry[i].src).then(function(){
					loadfun(i,oImg);
				},function(){
					console.log(aload.arry[i].src+'字体加载失败');
				});
			}else if(aload.arry[i].type=='mp3'){
				var oAudio = new Audio();
				oAudio.onloadedmetadata=function(){
					loadfun(i,oAudio);
					this.onload=null;
				}
				oAudio.src = aload.arry[i].src
			}else{
				console.log('load格式错误');
				return false;
			}
			
		
		})(i);
	}
	var loadfun=function(i,o){
		num=Math.ceil(++iLoaded/iCount*100);
		if(typeof(aload.arry[i].success)=='function'){
			aload.arry[i].success({
				index:i,
				num:num,
				obj:o,
			});
		}
		if(typeof(aload.conduct)=='function'){
			aload.conduct({
				index:i,
				num:num,
				obj:o,
			});
		}		
		if(num=='100'){
			if(typeof(aload.success)=='function'){
				aload.success(num);
			}			
		}
	}
}

