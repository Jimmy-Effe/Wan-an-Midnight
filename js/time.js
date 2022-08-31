function timingTime(){
	
      var start = "2021/10/01 11:00:0"
      var startTime = new Date(start).getTime();
      var currentTime = new Date().getTime();
      var difference = currentTime - startTime
      var m =  Math.floor(difference / (1000))
      var mm = m % 60  // 秒
      var f = Math.floor(m / 60)
      var ff = f % 60 // 分钟
      var s = Math.floor(f/ 60) // 小时
      var ss = s % 24
      var day = Math.floor(s  / 24 ) // 天数
      return day + "天" + ss + "时" + ff + "分" + mm +'秒'
    }
    setInterval(()=>{
      document.getElementById('box1').innerHTML = timingTime()
    },1000)