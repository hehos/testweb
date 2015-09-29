// JavaScript Document

function startMove(obj,json,endFn){
	
		clearInterval(obj.timer);
		
		obj.timer = setInterval(function(){
			
			var bBtn = true;
			
			for(var attr in json){
				
				var iCur = 0;
			
				if(attr == 'opacity'){
					if(Math.round(parseFloat(getStyle(obj,attr))*100)==0){
					iCur = Math.round(parseFloat(getStyle(obj,attr))*100);
					
					}
					else{
						iCur = Math.round(parseFloat(getStyle(obj,attr))*100) || 100;
					}	
				}
				else{
					iCur = parseInt(getStyle(obj,attr)) || 0;
				}
				
				var iSpeed = (json[attr] - iCur)/8;
			iSpeed = iSpeed >0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				if(iCur!=json[attr]){
					bBtn = false;
				}
				
				if(attr == 'opacity'){
					obj.style.filter = 'alpha(opacity=' +(iCur + iSpeed)+ ')';
					obj.style.opacity = (iCur + iSpeed)/100;
					
				}
				else{
					obj.style[attr] = iCur + iSpeed + 'px';
				}
				
				
			}
			
			if(bBtn){
				clearInterval(obj.timer);
				
				if(endFn){
					endFn.call(obj);
				}
			}
			
		},30);
	
	}
	
	
	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}
		else{
			return getComputedStyle(obj,false)[attr];
		}
	}
	
	
	$(function (){
	var x=0,width,height,ul=$(".content"),bottom=$(".bottom"),t
	function img_block(){
		bottom.stop();
		ul.stop();
		$(".content li").css("display","none");
		bottom.css({"height":"0px"});
		$("#xz").text(x+1);
        width=parseInt($(".content li:eq("+x+")").css("width"));
		height=parseInt($(".content li:eq("+x+")").css("height"));
		ul.animate({"width":width+"px","height":height+"px"},500,function (){
			$(".content li:eq("+x+")").css("display","block");
			bottom.css("width",width+"px");
			bottom.animate({"height":"50px"});
			$(".hbwz_left,.hbwz_right").css({"width":width/2+"px","height":height+"px"})
			});
		};
	function rights(){
		if(x==$(".content li").length-1){x=0;}
		else{x++};
		img_block();
		};
	$(document).ready(function() {
		$("#imgdata").text($(".content li").length);
		img_block();
		t=setInterval(rights,4000);
    });
	$(".hbwz_right").click(function (){rights()});
	$(".hbwz_left").click(function (){
		if(x==0){x=$(".content li").length-1;}
		else{x--};
		img_block();
		});
	$(".hbwz_right,.hbwz_right").hover(function (){clearTimeout(t)},function (){t=setInterval(rights,4000)});
});