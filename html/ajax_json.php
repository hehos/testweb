<html>
	<title>php+jquery+ajax+json简单小例子</title>
	<?php header( "Content-Type:text/html;charset=utf-8"); ?>

	<head>
		<script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
		<script type="text/javascript">
			$(function() {  
				$("#subbtn").click(function() {  
					var params = $("input").serialize();  
					var url = "1.php";  
					$.ajax({  
						type: "post",  
						url: url,  
						dataType: "json",  
						data: params,  
						success: function(msg){  
							var backdata = "您提交的姓名为：" + msg.name +  
							"<br /> 您提交的密码为：" + msg.password;  
							$("#backdata").html(backdata);  
							$("#backdata").css({color: "green"});  
						}  
					});  
				});  
			  
			});
		</script>
	</head>

	<body>
		<p>
			<label for="name">姓名：</label>
			<input id="name" name="name" type="text" />
		</p>

		<p>
			<label for="password">密码：</label>
			<input id="password" name="password" type="password" />
		</p>

		<span id="backdata"></span>
		<p>
			<input id="subbtn" type="button" value="提交数据" />
		</p>
	</body>

</html>