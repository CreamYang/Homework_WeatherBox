var day_ch = ["零", "一", "二", "三", "四", "五", "六", "日"];
function ShowTime() {
  var NowDate = new Date();
  var h = NowDate.getHours();
  var m = NowDate.getMinutes();
  var s = NowDate.getSeconds();
  var day = NowDate.getDay();
  if (h > 6 && h < 18) {
    document.getElementById("top").style.background =
      " linear-gradient(10deg,#1A237E 0%,#2196F3 90%)";
    document.getElementById("morning").style.display = "inline-block";
    document.getElementById("night").style.display = "none";
  } else {
    document.getElementById("morning").style.display = "none";
    document.getElementById("top").style.background =
      " linear-gradient(10deg,#19283D 0%,#1D678F 90%)";
    document.getElementById("night").style.display = "inline-block";
  }
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  day = day_ch[day];
  document.getElementById("showbox").innerHTML =
    "星期" + day + " " + h + ":" + m + ":" + s;

  setTimeout("ShowTime()", 1000);
}
