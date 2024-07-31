// JavaScript Document
$(document).ready(function(){
	$("#sendemail").click(function(){
		$("#sendemail").attr('disabled', true);
		var url = "skin/default/contact.php?t=" + Math.random();
		var fullname=$("#contact_name").val();
		var guestemail=$("#contact_email").val();
		var subjectemail=$("#contact_subject").val();
		var contentemail=$("#contact_message").val();
		var phone=$("#contact_phone").val();
		var ipclient=$("#ipclient").val();
		var grecaptcha=$("#g-recaptcha-response").val();
		$("#returnresult").empty();
		if(fullname==''||guestemail==''||subjectemail==''||contentemail==''){
			alert("Please do not empty any fields");
			$("#sendemail").removeAttr('disabled');
		}
		else{
			$.post(url,
				  {
					  fullname:fullname,
					  guestemail:guestemail,
					  subjectemail:subjectemail,
					  contentemail:contentemail,
					  phone:phone,
					  ipclient:ipclient,
					  grecaptcha:grecaptcha
				   },
				   function(data){
					   $("#sendemail").removeAttr('disabled');
					   if(data=="sent"){$("#returnresult").append("We have recieved your email. Thank you!");}
					   else if(data=="error"){$("#returnresult").append("Sorry! We can not recieve in this time.");}
					   else {$("#returnresult").append("Error!!!"+data);}
				   });
			 }});
	});