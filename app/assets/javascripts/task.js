function showTime(){
  var show = document.getElementById("show");
  var time = new Date();
  var m = time.getMonth() + 1;
  var hour = time.getHours();
  var greeting = "";
  if(hour > 5 && hour < 12){
    greeting = "上午好";
  } else if(hour==12){
    greeting = "中午好";
  } else if(hour > 12 && hour < 19){
    greeting = "下午好";
  } else{
    greeting = "晚上好";
  }
  
  var t = time.getFullYear() + "年" + m + "月"
    + time.getDate() + "日 " + hour + ":"
    + time.getMinutes();
  show.innerHTML = greeting + "  当前时间：" + t;
}

function newStudent(){
  window.location.href = "/student_infos/new";
}

function indexStudent(){
  window.location.href = "/student_infos";
}
