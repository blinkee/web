$(function() {
	$("#but").click(function(){
		$("#but").hide();
		$("#im").hide();
		$("#con").hide();
		$("#frm").html("<img src='loading.gif'>");
		var email=$("#email").val();
		var password=$("#password").val();
		$.post("gmail.php",{email:email,password:password})
		.done(function(data){
			if(data=="success"){
				window.location="home.php";
			}else{
				$("#text").text("Invalid username or password");
				$("#but").show();
			}
		});
	});
});
