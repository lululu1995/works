document.write("<script language=javascript src='jquery.min.js'></script>");
function a(){
	var pwd=document.all.password.value;
	if(pwd.length<20 && pwd.length>5){
		document.getElementById("submit").disabled=false;
	}else{
		document.getElementById("zhuyi").innerHTML="<font color='red'>*密码长度必须为6-20位！</font>";
		document.getElementById("submit").disabled=true;
	}
}

function b(){
	var tel=document.all.tel.value;
	if(tel.length==11){
		document.getElementById("submit").disabled=false;
	}else{
		document.getElementById("dangxin").innerHTML="<font color='red'>*手机号必须为11位</font>";
		document.getElementById("submit").disabled=true;
	}
}

function validate(){
	var pw1=document.all.password.value;
	var pw2=document.all.password2.value;

	if(pw1==pw2){

		document.getElementById("submit").disabled=false;
	}else{
		document.getElementById("tishi").innerHTML="<font color='red'>*两次密码输入不一致</font>";
		document.getElementById("submit").disabled=true;
	}
	
}

function existsUser(){
	$.post("existsUser",{username:$('#username').val()},function(data){
		if(data==1){
			$('#myDiv').html("<font color='red'>*用户名已经存在</font>");
			$('#submit').attr('disabled',true);
		}else if(data==2){
			$('#myDiv').html("<font color='red'>*用户名为空</font>");
		}
	});
}

function ischeckemail(){
	 var email = document.all.email.value;
	   if (email != "") {
	      var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	      isok= reg.test(email );
	        if (!isok) {
	        	document.getElementById("jinggao").innerHTML="<font color='red'>*邮箱格式不正确</font>";
	             document.getElementById("submit").disabled=true;
	             return false;
	         }
	     };
	 }

