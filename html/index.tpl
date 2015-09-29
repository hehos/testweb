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
	<div class="box"><a href="/index/" style="letter-spacing:3px; padding-left:30px;">������ԡ������������</a>
	<h5>��ѯ���ߣ�<{$sinfo.phone}></h5>
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
        <div class="ttl"><h4>��������</h4><span>SERVICE</span><h5><a href="#">+MORE</a></h5></div>
<div class="main_pic"><img src="_USER/img/p3.jpg" /></div>
        <{mod_contact}>
        </div>
        
</div> 

<div class="btm">
<div class="foot_P">
<div class="bottom-nav">
			<h4>������ԡ������</h4>
			<ul>
				<li>
					<p class="txt">service<br />����</p>
					<span class="icon bottomIcon-1"></span>
					<p class="txt2">���ְٷ�֮�ٵĳ�ŵ<br />׷��ٷ�֮�ٵ�����</p>
				</li>
				<li>
					<p class="txt">grade<br />Ʒζ</p>
					<span class="icon bottomIcon-2"></span>
					<p class="txt2">��Լ ����<br />ʱ�� ����</p>
				</li>
				<li>
					<p class="txt">credit<br />����</p>
					<span class="icon bottomIcon-3"></span>
					<p class="txt2">���� һ�ԾŶ�<br />һŵǧ�� ��ʵ</p>
				</li>
				<li>
					<p class="txt">style<br />���</p>
					<span class="icon bottomIcon-4"></span>
					<p class="txt2 one-row">���ַ��ϵ����������</p>
				</li>
				<li>
					<p class="txt">colour<br />ɫ��</p>
					<span class="icon bottomIcon-5"></span>
					<p class="txt2 one-row">18����ɫ��������</p>
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
     <li><a href="#" class="a1">���������&nbsp;&laquo;</a></li>
	 <li><a href="#" class="a2">��Ƶչʾ&nbsp;&laquo;</a></li>
	 <li><a href="#" class="a3">�Ա����&nbsp;&laquo;</a></li>
  </ul>
</div>
<div class="fot_nav">
��Ȩ���У� <{$sinfo.copyright}>  All rights reserved<br />
_L(��ַ):<{$sinfo.address}>&nbsp;&nbsp;_L(�绰):<{$sinfo.phone}> <{$sinfo.mobilephone}> &nbsp;&nbsp;_L(����):<{$sinfo.fax}> <{hook name="page_footer_link"}>
</div>
</div>
<div id="floatTools" class="rides-cs">
	<div class="floatL">
		<a style="display: block" id="aFloatTools_Show" class="btnOpen" title="�鿴���߿ͷ�" onClick="javascript:$('#divFloatToolsView').animate({width: 'show', opacity: 'show'}, 'normal',function(){ $('#divFloatToolsView').show();kf_setCookie('RightFloatShown', 0, '', '/', 'www.shopnc.net'); });$('#aFloatTools_Show').attr('style','display:none');$('#aFloatTools_Hide').attr('style','display:block');" href="javascript:void(0);">
		չ��</a>
		<a style="display: none" id="aFloatTools_Hide" class="btnCtn" title="�ر����߿ͷ�" onClick="javascript:$('#divFloatToolsView').animate({width: 'hide', opacity: 'hide'}, 'normal',function(){ $('#divFloatToolsView').hide();kf_setCookie('RightFloatShown', 1, '', '/', 'www.shopnc.net'); });$('#aFloatTools_Show').attr('style','display:block');$('#aFloatTools_Hide').attr('style','display:none');" href="javascript:void(0);">
		����</a> </div>
	<div id="divFloatToolsView" class="floatR" style="display: none">
		<div class="cn">
			<h3 class="titZx">���߿ͷ�</h3>
			<ul>
				<li><span>�ͷ�1</span>
				<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2367778082&site=qq&menu=yes">
				<img border="0" src="http://wpa.qq.com/pa?p=2:123456:51" alt="ShopNC�ͷ�1" title="ShopNC�ͷ�1" /></a>
				</li>
				</li>
				<li><span>�ͷ�2</span>
				<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2277858656&site=qq&menu=yes">
				<img border="0" src="http://wpa.qq.com/pa?p=2:123456:51" alt="ShopNC�ͷ�2" title="ShopNC�ͷ�2" /></a></li>
				<li><span>�ͷ�3</span>
				<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1607146354&site=qq&menu=yes">
				<img border="0" src="http://wpa.qq.com/pa?p=2:123456:51" alt="ShopNC�ͷ�2" title="ShopNC�ͷ�3" /></a></li>
				<li><span>�ͷ�4</span>
				<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2914094588&site=qq&menu=yes">
				<img border="0" src="http://wpa.qq.com/pa?p=2:123456:51" alt="ShopNC�ͷ�2" title="ShopNC�ͷ�4" /></a></li>
				<li><span>�ͷ�5</span>
				<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=1776805789&site=qq&menu=yes">
				<img border="0" src="http://wpa.qq.com/pa?p=2:123456:51" alt="ShopNC�ͷ�2" title="ShopNC�ͷ�5" /></a></li>
			</ul>
		</div>
	</div>
</div>
</body>
</html>
<!--<script type="text/javascript" src="_USER/js/jquery.blackbox.min.js"></script>
<script type="text/javascript" src="_USER/js/demo.js"></script>
<script type="text/javascript" src="_USER/js/highlight.js"></script>-->