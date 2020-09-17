$(document).ready(function() {
   $("#submitButton").click(function(){
       if($("#LAY-user-login-username").val() == "nx" && $("#LAY-user-login-password").val() == "666666"){
        window.location.href = "../html/index.html";
       }else{
           alert("用户名或密码错误！");
       }
   });
   //监听enter
   $(document).keyup(function(event){
    if(event.keyCode ==13){
    $("#submitButton").trigger("click");
    }
});
});
