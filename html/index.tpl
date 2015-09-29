<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<meta name="keywords" content="<{$seo.keywords}>" />
<meta name="description" content="<{$seo.desc}>" />
<title><{$seo.title}></title>
<{css}>
<link rel="stylesheet" type="text/css" href="_USER/style/bottomNav.css"/>
<script type="text/javascript" src="_USER/js/jquery-1.11.2.min.js"></script>
<!--<script type="text/javascript" src="_USER/js/jquery-1.4.2.min.js"></script>-->
<script type="text/javascript" src="_USER/js/kefu.js"></script>
<!--<script type="text/javascript" src="_USER/js/jquery.min.js"></script>-->
  <link rel="stylesheet" type="text/css" href="_USER/style/jquery.lightbox.css" />
  <script type="text/javascript" src="_USER/js/jquery.lightbox.min.js"></script>
  <script type="text/javascript">
    jQuery(document).ready(function($){
        $.lightbox("_USER/img/intro.jpg", {
            "onOpen": function () {
                $(".jquery-lightbox-background").click(function () {
                    window.location.href = "/goods/";
                }).css({ "cursor": "pointer" });
            }
        });
    });
  </script>
</head>
<body>
<div class="top_nav">
	<div class="box"><a href="/index/" style="letter-spacing:3px; padding-left:30px;">卡茜卫浴·让生活更惬意</a>
	<h5>咨询热线：<{$sinfo.phone}></h5>
	</div>
</div>
<div class="head box">
<div class="logo"><a href="/index/"><img src="_USER/img/logo.jpg" /></a></div>
<{mod_menu tpl=idx }>
</div>
<div class="banner">
<{mod_banner tpl=diy }>
</div>



<div class="main_idx">
		<{mod_news tpl=tpl strlen=16 nums=5}>
		<{mod_about tpl=diy strlen=200}>
        <div class="contact1">
        <div class="ttl"><h4>服务中心</h4><span>SERVICE</span><h5><a href="#">+MORE</a></h5></div>
<div class="main_pic"><img src="_USER/img/p3.jpg" /></div>
        <{mod_contact}>
        </div>
        
</div> 

<div class="btm">
<div class="foot_P">
<div class="bottom-nav">
			<h4>卡茜卫浴的优势</h4>
			<ul>
				<li>
					<p class="txt">service<br />服务</p>
					<span class="icon bottomIcon-1"></span>
					<p class="txt2">呈现百分之百的承诺<br />追求百分之百的满意</p>
				</li>
				<li>
					<p class="txt">grade<br />品味</p>
					<span class="icon bottomIcon-2"></span>
					<p class="txt2">简约 大气<br />时尚 环保</p>
				</li>
				<li>
					<p class="txt">credit<br />信誉</p>
					<span class="icon bottomIcon-3"></span>
					<p class="txt2">诚信 一言九鼎<br />一诺千金 真实</p>
				</li>
				<li>
					<p class="txt">style<br />风格</p>
					<span class="icon bottomIcon-4"></span>
					<p class="txt2 one-row">四种风格系列完美呈现</p>
				</li>
				<li>
					<p class="txt">colour<br />色彩</p>
					<span class="icon bottomIcon-5"></span>
					<p class="txt2 one-row">18种颜色随心所欲</p>
				</li>
			</ul>
		</div>
</div>
<script type="text/javascript">
		(function() {
			var items = $(".bottom-nav li");
			$(".bottom-nav li").mouseover(function() {
				var countWidth = (100-40)/(items.length-1);
				$.each(items, function(i, item) {    
					$(item).css("width", countWidth + "%");                                                          
				});
				$(this).css("width", "40%");
				$(this).addClass("js-show-desc");
			});
			$(".bottom-nav li").mouseout(function() {
				$.each(items, function(i, item) {    
					$(item).css("width", "");                                                          
				});
				$(this).removeClass("js-show-desc");
			});
		})();
	</script>
<div class="foot_lik">
  <ul>
     <li><a href="#" class="a1">经销商入口&nbsp;&laquo;</a></li>
	 <li><a href="#" class="a2">视频展示&nbsp;&laquo;</a></li>
	 <li><a href="#" class="a3">淘宝入口&nbsp;&laquo;</a></li>
  </ul>
</div>
<div class="fot_nav">
版权所有： <{$sinfo.copyright}>  All rights reserved<br />
_L(地址):<{$sinfo.address}>&nbsp;&nbsp;_L(电话):<{$sinfo.phone}> <{$sinfo.mobilephone}> &nbsp;&nbsp;_L(传真):<{$sinfo.fax}> <{hook name="page_footer_link"}>
</div>
</div>
<div id="floatTools" class="rides-cs">
	<div class="floatL">
		<a style="display: block" id="aFloatTools_Show" class="btnOpen" title="查看在线客服" onClick="javascript:$('#divFloatToolsView').animate({width: 'show', opacity: 'show'}, 'normal',function(){ $('#divFloatToolsView').show();kf_setCookie('RightFloatShown', 0, '', '/', 'www.shopnc.net'); });$('#aFloatTools_Show').attr('style','display:none');$('#aFloatTools_Hide').attr('style','display:block');" href="javascript:void(0);">
		展开</a>
		<a style="display: none" id="aFloatTools_Hide" class="btnCtn" title="关闭在线客服" onClick="javascript:$('#divFloatToolsView').animate({width: 'hide', opacity: 'hide'}, 'normal',function(){ $('#divFloatToolsView').hide();kf_setCookie('RightFloatShown', 1, '', '/', 'www.shopnc.net'); });$('#aFloatTools_Show').attr('style','display:block');$('#aFloatTools_Hide').attr('style','display:none');" href="javascript:void(0);">
		收缩</a> </div>
	<div id="divFloatToolsView" class="floatR" style="display: none">
		<div class="cn">
			<h3 class="titZx">在线客服</h3>
			<ul>
				<li><span>客服1</span>
				<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2367778082&site=qq&menu=yes">
				<img border="0" src="http://wpa.qq.com/pa?p=2:123456:51" alt="ShopNC客服1" title="ShopNC客服1" /></a>
				</li>
				</li>
				<li><span>客服2</span>
				<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2277858656&site=qq&menu=yes">
				<img border="0" src="http://wpa.qq.com/pa?p=2:123456:51" alt="ShopNC客服2" title="ShopNC客服2" /></a></li>
				<li><span>客服3</span>
				<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1607146354&site=qq&menu=yes">
				<img border="0" src="http://wpa.qq.com/pa?p=2:123456:51" alt="ShopNC客服2" title="ShopNC客服3" /></a></li>
				<li><span>客服4</span>
				<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2914094588&site=qq&menu=yes">
				<img border="0" src="http://wpa.qq.com/pa?p=2:123456:51" alt="ShopNC客服2" title="ShopNC客服4" /></a></li>
				<li><span>客服5</span>
				<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1776805789&site=qq&menu=yes">
				<img border="0" src="http://wpa.qq.com/pa?p=2:123456:51" alt="ShopNC客服2" title="ShopNC客服5" /></a></li>
			</ul>
		</div>
	</div>
</div>
</body>
</html>
<!--<script type="text/javascript" src="_USER/js/jquery.blackbox.min.js"></script>
<script type="text/javascript" src="_USER/js/demo.js"></script>
<script type="text/javascript" src="_USER/js/highlight.js"></script>-->