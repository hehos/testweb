var zj_sta_nu=0;
var zj_g_nums=2;
var zj_height=313;/*�߶�*/
var zj_dis=0;/*ר�Ҿ���*/
var zjg_01;
function zj_round(){
zj_sta_nu=zj_sta_nu+1;
if(zj_sta_nu==zj_g_nums){
	//clearInterval(zjg_01);
	zj_sta_nu=0;
	}
var tk_ids="#huan_so li:eq("+zj_sta_nu+")";
$("#huan_so li").removeClass("huan_d");	
$(tk_ids).addClass("huan_d");
zj_dis=-(zj_height*zj_sta_nu);
$("#zj_gund ul").stop().animate({top:zj_dis+"px"});

	}
zjg_01=setInterval(zj_round,6000);
$(".kan_xinb").mouseover(function(){
clearInterval(zjg_01);

})
$("#huan_so li").mouseover(function(){

	var suib_id=$("#huan_so li").index(this)-1; 
	zj_sta_nu=suib_id;
	$("#huan_so li").removeClass("huan_d");								
    $(this).addClass("huan_d");
	zj_round();
	//alert(zj_sta_nu);
})
$(".kan_xinb").mouseleave(function(){
									//alert(zj_sta_nu);
zjg_01=setInterval(zj_round,6000);							
})


//��ҳ����Ч��
$(function() {
	$('.mbox1>ul>li').each(function() {
        $(this).hover(function(){
			$('.mbox1 .move_bg').remove();
			var oDiv=$("<div class='move_bg'></div>");
			oDiv.insertBefore($(this).children('a'));
			var oMove=$(this).find('.move_bg');
			oMove.animate({'left':20},280,function(){
				oMove.animate({'left':0},280);
			})
		},function(){
			$('.mbox1 .move_bg').remove();
		});
    });
})



function showtime(ID){
	document.getElementById('feiwu'+ID).style.display='none';
	document.getElementById('secai'+ID).style.background='#A3161F';
	document.getElementById('ouaik'+ID).style.color='#FFF';
	}
function showtimes(IDs){
	document.getElementById('feiwu'+IDs).style.display='';
	document.getElementById('secai'+IDs).style.background='#FBFBFB';
	document.getElementById('ouaik'+IDs).style.color='#666';
	}


var ttIDgs=0;
function xuanzhong(IDgs){
	document.getElementById('zj_c_'+ttIDgs).style.display='none';
	document.getElementById('zj_c_'+IDgs).style.display=''; 
		ttIDgs=IDgs;
}


//main2_L ��ʼ
$(".main2_L li").mouseover(function(){
$(".main2_L li .kuan_ds").css("display","none");										 
$(this)	.children(".kuan_ds").css("display","block");								 
})

$(".main2_L").mouseleave(function(){
$(".main2_L .kuan_ds").css("display","none");								 
})
//main2_L ����


//��ҳbanner��ʼ
var current = 0;
var imgNum = 1;
var interval = 0;
function showContent(index){
	var oldTag = document.getElementById("list" + current.toString());
	var oldCon = document.getElementById("showCon" + current.toString());
	var newTag = document.getElementById("list" + index.toString());
	var newCon = document.getElementById("showCon" + index.toString());
	if(current != index){
		oldTag.className="ons";
		oldCon.style.display = "none";
		current = index;
		newTag.className="on";
		newCon.style.display = "block";
	}
}
function setMode(n){
	if(n != null){
		imgNum = n+1;
	}
	if(interval == 0){
		interval = setInterval("showTime()", 5000);  //ʱ�����
	}
}
function showTime(){
	if(imgNum > 2){
		imgNum = 0;
	}
	showContent(imgNum);
	imgNum ++;
}
setMode(); 
//��ҳbanner����

$(".sunnhix_top li:eq(0)").addClass("on");
$(".sunnhix_rit:eq(0)").css("display","block");
$(".sunnhix_top li").mouseover(function(){
$(".sunnhix_top li").removeClass("on");
$(".sunnhix_rit").css("display","none");										
var nop_isu=$(".sunnhix_top li").index(this);
$(".sunnhix_rit:eq("+nop_isu+")").css("display","block");
$(this).addClass("on");
})






//Ԯ������
function hide(IDg){
	document.getElementById('chent'+IDg).style.display='none';
	document.getElementById('moshi'+IDg).style.height='208px'; 
}
 
function hides(IDgs){
	document.getElementById('moshi'+IDgs).style.height='0px';
	document.getElementById('chent'+IDgs).style.display=''; 
}

function ahide(IDg){
	document.getElementById('achent'+IDg).style.display='none';
	document.getElementById('amoshi'+IDg).style.height='208px'; 
}
 
function ahides(IDgs){
	document.getElementById('amoshi'+IDgs).style.height='0px';
	document.getElementById('achent'+IDgs).style.display=''; 
}


var Bnbq1 = $("\x23\x6e\x6f\x5f\x70\x6c\x6f\x69\x73");
var srmmhT2 = Bnbq1["\x6f\x66\x66\x73\x65\x74"]()["\x74\x6f\x70"];
$(window)["\x73\x63\x72\x6f\x6c\x6c"](function(){
if ($(window)["\x73\x63\x72\x6f\x6c\x6c\x54\x6f\x70"]() >= srmmhT2){
$("\x23\x70\x6f\x6c\x69\x73")["\x63\x73\x73"]({"\x70\x6f\x73\x69\x74\x69\x6f\x6e":"\x66\x69\x78\x65\x64","\x74\x6f\x70":"\x30"});}
else{
$("\x23\x70\x6f\x6c\x69\x73")["\x63\x73\x73"]({"\x70\x6f\x73\x69\x74\x69\x6f\x6e":"\x72\x65\x6c\x61\x74\x69\x76\x65","\x74\x6f\x70":"\x30"});
}
})  


//��ҳԤԼ�ɹ�Ч��
$(function(){
	if(document.getElementById('main2-l2-c'))
	{
		var _ul = $("#main2-l2-c").children('ul');
		function autoScroll(){
			_ul.animate({marginTop:'-30px'},300,function(){
				$(this).children('li').eq(0).remove().appendTo($(this));
				$(this).css('margin-top','0px');
			});
		}
		var _auto = setInterval(autoScroll,2000);
		$("#main2-l2-c").hover(function(){
			clearInterval(_auto);
		},function(){
			_auto = setInterval(autoScroll,2000);
		});
	}
	
	if(document.getElementById('nowyy') && document.getElementById('lastyy')){
		
		var newD = new Date();
		document.getElementById('nowyy').innerHTML = 50 + parseInt(newD.getSeconds()); 
			
		document.getElementById('lastyy').innerHTML = 60 - parseInt(newD.getSeconds());
		
		setInterval(function(){
			var newD = new Date();
			document.getElementById('nowyy').innerHTML = 50 + parseInt(newD.getSeconds()); 
			
			document.getElementById('lastyy').innerHTML = 60 - parseInt(newD.getSeconds());
		},20000);
	}
})










//��ҳŮ�Է�����껮��������ɫ

function caise(IDgn){
	document.getElementById('tuku'+IDgn).style.display='none';
	document.getElementById('tukus'+IDgn).style.display='';
}
function caises(IDgns){
	document.getElementById('tukus'+IDgns).style.display='none';
	document.getElementById('tuku'+IDgns).style.display='';
}


//ѡ��л�Ч�� JavaScript Document
function nTabs(thisObj,Num){
if(thisObj.className == "active")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++)
{
if (i == Num)
{
   thisObj.className = "active"; 
      document.getElementById(tabObj+"_Content"+i).style.display = "block";
}else{
   tabList[i].className = "normal"; 
   document.getElementById(tabObj+"_Content"+i).style.display = "none";
}
} 
}
//ѡ��л�Ч�� JavaScript Document ========a
function anTabs(thisObj,Num){
if(thisObj.className == "active")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++)
{
if (i == Num)
{
   thisObj.className = "aactive"; 
      document.getElementById(tabObj+"_aContent"+i).style.display = "block";
}else{
   tabList[i].className = "anormal"; 
   document.getElementById(tabObj+"_aContent"+i).style.display = "none";
}
} 
}
//ѡ��л�Ч�� JavaScript Document ========b
function bnTabs(thisObj,Num){
if(thisObj.className == "bactive")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++)
{
if (i == Num)
{
   thisObj.className = "bactive"; 
      document.getElementById(tabObj+"_bContent"+i).style.display = "block";
}else{
   tabList[i].className = "bnormal"; 
   document.getElementById(tabObj+"_bContent"+i).style.display = "none";
}
} 
}
//ѡ��л�Ч�� JavaScript Document ========c
function cnTabs(thisObj,Num){
if(thisObj.className == "cactive")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++)
{
if (i == Num)
{
   thisObj.className = "cbactive"; 
      document.getElementById(tabObj+"_cContent"+i).style.display = "block";
}else{
   tabList[i].className = "cnormal"; 
   document.getElementById(tabObj+"_cContent"+i).style.display = "none";
}
} 
}
//ѡ��л�Ч�� JavaScript Document ========d
function dnTabs(thisObj,Num){
if(thisObj.className == "dactive")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++)
{
if (i == Num)
{
   thisObj.className = "cdbactive"; 
      document.getElementById(tabObj+"_dContent"+i).style.display = "block";
}else{
   tabList[i].className = "cnormal"; 
   document.getElementById(tabObj+"_dContent"+i).style.display = "none";
}
} 
}

//ѡ��л�Ч�� JavaScript Document ========e
function enTabs(thisObj,Num){
if(thisObj.className == "eactive")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++)
{
if (i == Num)
{
   thisObj.className = "ebactive"; 
      document.getElementById(tabObj+"_eContent"+i).style.display = "block";
}else{
   tabList[i].className = "enormal"; 
   document.getElementById(tabObj+"_eContent"+i).style.display = "none";
}
} 
}
//ѡ��л�Ч�� JavaScript Document ========f
function fnTabs(thisObj,Num){
if(thisObj.className == "factive")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++)
{
if (i == Num)
{
   thisObj.className = "fbactive"; 
      document.getElementById(tabObj+"_fContent"+i).style.display = "block";
}else{
   tabList[i].className = "fnormal"; 
   document.getElementById(tabObj+"_fContent"+i).style.display = "none";
}
} 
}
//ѡ��л�Ч�� JavaScript Document ========g
function gnTabs(thisObj,Num){
if(thisObj.className == "gactive")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++)
{
if (i == Num)
{
   thisObj.className = "gbactive"; 
      document.getElementById(tabObj+"_gContent"+i).style.display = "block";
}else{
   tabList[i].className = "gnormal"; 
   document.getElementById(tabObj+"_gContent"+i).style.display = "none";
}
} 
}











//�������� ��ʼ
(function($){
	$.extend($.easing,{
		easeInSine: function (x, t, b, c, d) {
			return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
		}
	});

	$.fn.Xslider=function(settings){
		settings=$.extend({},$.fn.Xslider.sn.defaults,settings);
		this.each(function(){
			var scrollobj=settings.scrollobj ? $(this).find(settings.scrollobj) : $(this).find("ul"),
			    viewedSize=settings.viewedSize || (settings.dir=="H" ? scrollobj.parent().width() : scrollobj.parent().height()),
			    scrollunits=scrollobj.find("li"),//units to move;
			    unitlen=settings.unitlen || (settings.dir=="H" ? scrollunits.eq(0).outerWidth() : scrollunits.eq(0).outerHeight()),
			    unitdisplayed=settings.unitdisplayed,//units num displayed;
				numtoMove=settings.numtoMove > unitdisplayed ? unitdisplayed : settings.numtoMove,
			    scrollobjSize=settings.scrollobjSize || scrollunits.length*unitlen,//length of the scrollobj;
			    offset=0,//max width to move;
			    offsetnow=0,//scrollobj now offset;
			    movelength=unitlen*numtoMove,
				pos=settings.dir=="H" ? "left" : "top",
			    moving=false,//moving now?;
			    btnright=$(this).find("a.aright"),
			    btnleft=$(this).find("a.aleft");
			
			btnright.unbind("click");
			btnleft.unbind("click");
					
			settings.dir=="H" ? scrollobj.css("left","0px") : scrollobj.css("top","0px");
							
			if(scrollobjSize>viewedSize){
				if(settings.loop=="cycle"){
					btnleft.removeClass("agrayleft");
					if(scrollunits.length<2*numtoMove+unitdisplayed-numtoMove){
						scrollobj.find("li").clone().appendTo(scrollobj);	
					}
				}else{
					btnleft.addClass("agrayleft");
					offset=scrollobjSize-viewedSize;
				}
				btnright.removeClass("agrayright");
			}else{
				btnleft.addClass("agrayleft");
				btnright.addClass("agrayright");
			}

			btnleft.click(function(){
				if($(this).is("[class*='agrayleft']")){return false;}
				
				if(!moving){
					moving=true;
					
					if(settings.loop=="cycle"){
						scrollobj.find("li:gt("+(scrollunits.length-numtoMove-1)+")").prependTo(scrollobj);
						scrollobj.css(pos,"-"+movelength+"px");
						$.fn.Xslider.sn.animate(scrollobj,0,settings.dir,settings.speed,function(){moving=false;});
					}else{
						offsetnow-=movelength;
						if(offsetnow>unitlen*unitdisplayed-viewedSize){
							$.fn.Xslider.sn.animate(scrollobj,-offsetnow,settings.dir,settings.speed,function(){moving=false;});
						}else{
							$.fn.Xslider.sn.animate(scrollobj,0,settings.dir,settings.speed,function(){moving=false;});
							offsetnow=0;
							$(this).addClass("agrayleft");
						}
						btnright.removeClass("agrayright");
					}
				}

				return false;
			});
			btnright.click(function(){
				if($(this).is("[class*='agrayright']")){return false;}
				
				if(!moving){
					moving=true;
					
					if(settings.loop=="cycle"){
						var callback=function(){
							scrollobj.find("li:lt("+numtoMove+")").appendTo(scrollobj);
							scrollobj.css(pos,"0px");
							moving=false;
						}
						$.fn.Xslider.sn.animate(scrollobj,-movelength,settings.dir,settings.speed,callback);
					}else{
						offsetnow+=movelength;
						if(offsetnow<offset-(unitlen*unitdisplayed-viewedSize)){
							$.fn.Xslider.sn.animate(scrollobj,-offsetnow,settings.dir,settings.speed,function(){moving=false;});
						}else{
							$.fn.Xslider.sn.animate(scrollobj,-offset,settings.dir,settings.speed,function(){moving=false;});//���������һ��λ��;
							offsetnow=offset;
							$(this).addClass("agrayright");
						}
						btnleft.removeClass("agrayleft");
					}
				}
				
				return false;
			});
			
			if(settings.autoscroll){
				$.fn.Xslider.sn.autoscroll($(this),settings.autoscroll);
			}
		})
	}
	
	$.fn.Xslider.sn={
		defaults:{
			dir:"H",
			speed:500
		},
		animate:function(obj,w,dir,speed,callback){
			if(dir=="H"){
				obj.animate({
					left:w
				},speed,"easeInSine",callback);
			}else if(dir=="V"){
				obj.animate({
					top:w
				},speed,"easeInSine",callback);	
			}	
		},
		autoscroll:function(obj,time){
			var  vane="right";
			function autoscrolling(){
				if(vane=="right"){
					if(!obj.find("a.agrayright").length){
						obj.find("a.aright").trigger("click");
					}else{
						vane="left";
					}
				}
				if(vane=="left"){
					if(!obj.find("a.agrayleft").length){	
						obj.find("a.aleft").trigger("click");
					}else{
						vane="right";
					}
				}
			}
			var scrollTimmer=setInterval(autoscrolling,time);
			obj.hover(function(){
				clearInterval(scrollTimmer);
			},function(){
				scrollTimmer=setInterval(autoscrolling,time);
			});
		}
	}
})(jQuery);
//�������� ����









//ѡ�а�����ʼ

//function setTab(name,cursel,n){ 
//for(i=1;i<=n;i++){ 
//
//var menu=document.getElementById(name+i); 
//var con=document.getElementById("con_"+name+"_"+i); 
//menu.className=i==cursel?"hover":""; 
//con.style.display=i==cursel?"block":"none"; 
//} 
//} 

$(function(){
	$(".doc_img").Xslider({
		unitdisplayed:7,
		numtoMove:1,
		dir:"H",
		loop:"cycle"
	});
	})
function setTab(name,cursel,n)
{
  for(i=1;i<=n;i++)
  {
    var menu=document.getElementById(name+i);
    var con=document.getElementById("con_"+name+"_"+i);
    menu.className=i==cursel?"hover":"";
    con.style.display=i==cursel?"inline":"none";
  }
}
//ѡ�а�������







// �����ղ� ����360��IE6 
function shoucang(sTitle,sURL) 
{ 
try 
{ 
window.external.addFavorite(sURL, sTitle); 
} 
catch (e) 
{ 
try 
{ 
window.sidebar.addPanel(sTitle, sURL, ""); 
} 
catch (e) 
{ 
alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������"); 
} 
} 
} 