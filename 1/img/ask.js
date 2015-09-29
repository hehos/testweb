
//�ٶ�ͳ�ƴ���2015-05-06
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?0a3de124db1ece34855c1c63d9be1bc6";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

//微信下拉效果
$(".qita a:nth-child(3)").hover(function(){		
		$(this).children("span").show();
	},function(){
		$(this).children("span").hide();
});
//微信下拉效果
$(".lx1 a:nth-child(3)").hover(function(){		
		$(".lx1 ").children("span").show();
	},function(){
		$(".lx1 ").children("span").hide();
});