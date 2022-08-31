
function cn_index() {
	
	document.getElementById("cn-index1").setAttribute("href","./page/schedule.html");
	document.getElementById("cn-index1").innerHTML="日程";
	document.getElementById("cn-index-li1").style.display = "inherit";
	
	document.getElementById("cn-index2").setAttribute("href","./page/member.html");
	document.getElementById("cn-index2").innerHTML="成员";
	document.getElementById("cn-index-li2").style.display = "inherit";
	
	document.getElementById("cn-index3").setAttribute("href","./page/cinfo.html");
	document.getElementById("cn-index3").innerHTML="车辆信息";
	document.getElementById("cn-index-li3").style.display = "inherit";
	
	document.getElementById("cn-index4").setAttribute("href","./page/tool.html");
	document.getElementById("cn-index4").innerHTML="工具&游戏";
	document.getElementById("cn-index-li4").style.display = "inherit";
	
	document.getElementById("cn-index5").setAttribute("href","./page/about.html");
	document.getElementById("cn-index5").innerHTML="关于我们";
	document.getElementById("cn-index-li5").style.display = "inherit";
	
	document.getElementById("cn-index6").setAttribute("href","./page/noi.html");
	document.getElementById("cn-index6").innerHTML="公告/通知";
	document.getElementById("cn-index-li6").style.display = "inherit";
	
	document.getElementById("cn-index7").setAttribute("href","./page/ranking.html");
	document.getElementById("cn-index7").innerHTML="排行榜";
	document.getElementById("cn-index-li7").style.display = "inherit";
	
	document.getElementById("cn-index8").setAttribute("href","./page/update/HT2022211.html");
	document.getElementById("cn-index8").innerHTML="更新";
	document.getElementById("cn-index-li8").style.display = "inherit";
	
	document.getElementById("cn-index9").setAttribute("href","");
	document.getElementById("cn-index9").innerHTML="";
	document.getElementById("cn-index-li9").style.display = "none";
	
	document.getElementById("cn-index10").setAttribute("href","");
	document.getElementById("cn-index10").innerHTML="";
	document.getElementById("cn-index-li10").style.display = "none";
	
	w = screen.availWidth;
	if(w < 835 && w > 768){
		document.getElementById("w768").style.display = "block"
		document.getElementById("main-body").style.overflow = "hidden"
		document.getElementById("nav").style.display = "none";
		document.getElementById("main-body").style.display = "inline-grid";
		}
	else{
		document.getElementById("w768").style.display = "none"
		}

}

function cn_page1() {
	document.getElementById("cn-page1").setAttribute("href","schedule.html");
	document.getElementById("cn-page1").innerHTML="日程";
	document.getElementById("cn-page-li1").style.display = "inherit";
	
	document.getElementById("cn-page2").setAttribute("href","member.html");
	document.getElementById("cn-page2").innerHTML="成员";
	document.getElementById("cn-page-li2").style.display = "inherit";
	
	document.getElementById("cn-page3").setAttribute("href","cinfo.html");
	document.getElementById("cn-page3").innerHTML="车辆信息";
	document.getElementById("cn-page-li3").style.display = "inherit";
	
	document.getElementById("cn-page4").setAttribute("href","tool.html");
	document.getElementById("cn-page4").innerHTML="工具&游戏";
	document.getElementById("cn-page-li4").style.display = "inherit";
	
	document.getElementById("cn-page5").setAttribute("href","about.html");
	document.getElementById("cn-page5").innerHTML="关于我们";
	document.getElementById("cn-page-li5").style.display = "inherit";
	
	document.getElementById("cn-page6").setAttribute("href","noi.html");
	document.getElementById("cn-page6").innerHTML="公告/通知";
	document.getElementById("cn-page-li6").style.display = "inherit";
	
	document.getElementById("cn-page7").setAttribute("href","./page/ranking.html");
	document.getElementById("cn-page7").innerHTML="排行榜";
	document.getElementById("cn-page-li7").style.display = "inherit";
	
	document.getElementById("cn-page8").setAttribute("href","./update/HT2022211.html");
	document.getElementById("cn-page8").innerHTML="更新";
	document.getElementById("cn-page-li8").style.display = "inherit";
	
	document.getElementById("cn-page9").setAttribute("href","");
	document.getElementById("cn-page9").innerHTML="";
	document.getElementById("cn-page-li9").style.display = "none";
	
	document.getElementById("cn-page10").setAttribute("href","");
	document.getElementById("cn-page10").innerHTML="";
	document.getElementById("cn-page-li10").style.display = "none";
	
	
}

function cn_page2() {
	document.getElementById("cn-page1").setAttribute("href","../schedule.html");
	document.getElementById("cn-page1").innerHTML="日程";
	document.getElementById("cn-page-li1").style.display = "inherit";
	
	document.getElementById("cn-page2").setAttribute("href","../member.html");
	document.getElementById("cn-page2").innerHTML="成员";
	document.getElementById("cn-page-li2").style.display = "inherit";
	
	document.getElementById("cn-page3").setAttribute("href","../cinfo.html");
	document.getElementById("cn-page3").innerHTML="车辆信息";
	document.getElementById("cn-page-li3").style.display = "inherit";
	
	document.getElementById("cn-page4").setAttribute("href","../tool.html");
	document.getElementById("cn-page4").innerHTML="工具&游戏";
	document.getElementById("cn-page-li4").style.display = "inherit";
	
	document.getElementById("cn-page5").setAttribute("href","../about.html");
	document.getElementById("cn-page5").innerHTML="关于我们";
	document.getElementById("cn-page-li5").style.display = "inherit";
	
	document.getElementById("cn-page6").setAttribute("href","../noi.html");
	document.getElementById("cn-page6").innerHTML="公告/通知";
	document.getElementById("cn-page-li6").style.display = "inherit";
	
	document.getElementById("cn-page7").setAttribute("href","../ranking.html");
	document.getElementById("cn-page7").innerHTML="排行榜";
	document.getElementById("cn-page-li7").style.display = "inherit";
	
	document.getElementById("cn-page8").setAttribute("href","../update/HT2022211.html");
	document.getElementById("cn-page8").innerHTML="更新";
	document.getElementById("cn-page-li8").style.display = "inherit";
	
	document.getElementById("cn-page9").setAttribute("href","");
	document.getElementById("cn-page9").innerHTML="";
	document.getElementById("cn-page-li9").style.display = "none";
	
	document.getElementById("cn-page10").setAttribute("href","");
	document.getElementById("cn-page10").innerHTML="";
	document.getElementById("cn-page-li10").style.display = "none";
	
	
}

function en_index() {
	document.getElementById("en-index1").setAttribute("href","./page/schedule.html");
	document.getElementById("en-index1").innerHTML="Fleet schedule";
	document.getElementById("en-index-li1").style.display = "inherit";
	
	document.getElementById("en-index2").setAttribute("href","./page/member.html");
	document.getElementById("en-index2").innerHTML="Team members";
	document.getElementById("en-index-li2").style.display = "inherit";
	
	document.getElementById("en-index3").setAttribute("href","./page/cinfo.html");
	document.getElementById("en-index3").innerHTML="Vehicle information";
	document.getElementById("en-index-li3").style.display = "inherit";
	
	document.getElementById("en-index4").setAttribute("href","./page/about.html");
	document.getElementById("en-index4").innerHTML="About";
	document.getElementById("en-index-li4").style.display = "inherit";
	
	document.getElementById("en-index5").setAttribute("href","./page/update/HT2022211.html");
	document.getElementById("en-index5").innerHTML="Update";
	document.getElementById("en-index-li5").style.display = "inherit";
	
	document.getElementById("en-index6").setAttribute("href","");
	document.getElementById("en-index6").innerHTML="";
	document.getElementById("en-index-li6").style.display = "none";
	
	document.getElementById("en-index7").setAttribute("href","");
	document.getElementById("en-index7").innerHTML="";
	document.getElementById("en-index-li7").style.display = "none";
	
	document.getElementById("en-index8").setAttribute("href","./page/update/HT2022211.html");
	document.getElementById("en-index8").innerHTML="Update";
	document.getElementById("en-index-li8").style.display = "none";
	
	document.getElementById("en-index9").setAttribute("href","./page/update/HT2022211.html");
	document.getElementById("en-index9").innerHTML="Update";
	document.getElementById("en-index-li9").style.display = "none";
	
	document.getElementById("en-index10").setAttribute("href","./page/update/HT2022211.html");
	document.getElementById("en-index10").innerHTML="Update";
	document.getElementById("en-index-li10").style.display = "none";
}

function en_page1() {
	document.getElementById("en-page1").setAttribute("href","schedule.html");
	document.getElementById("en-page1").innerHTML="Fleet schedule";
	document.getElementById("en-page-li1").style.display = "inherit";
	
	document.getElementById("en-page2").setAttribute("href","member.html");
	document.getElementById("en-page2").innerHTML="Team members";
	document.getElementById("en-page-li2").style.display = "inherit";
	
	document.getElementById("en-page3").setAttribute("href","cinfo.html");
	document.getElementById("en-page3").innerHTML="Vehicle information";
	document.getElementById("en-page-li3").style.display = "inherit";
	
	document.getElementById("en-page4").setAttribute("href","about.html");
	document.getElementById("en-page4").innerHTML="About";
	document.getElementById("en-page-li4").style.display = "inherit";
	
	document.getElementById("en-page5").setAttribute("href","./update/HT2022211.html");
	document.getElementById("en-page5").innerHTML="Update";
	document.getElementById("en-page-li5").style.display = "inherit";
	
	document.getElementById("en-page6").setAttribute("href","");
	document.getElementById("en-page6").innerHTML="";
	document.getElementById("en-page-li6").style.display = "none";
	
	document.getElementById("en-page7").setAttribute("href","");
	document.getElementById("en-page7").innerHTML="";
	document.getElementById("en-page-li7").style.display = "none";
	
	document.getElementById("en-page8").setAttribute("href","./page/update/HT2022211.html");
	document.getElementById("en-page8").innerHTML="Update";
	document.getElementById("en-page-li8").style.display = "none";
	
	document.getElementById("en-page9").setAttribute("href","./page/update/HT2022211.html");
	document.getElementById("en-page9").innerHTML="Update";
	document.getElementById("en-page-li9").style.display = "none";
	
	document.getElementById("en-page10").setAttribute("href","./page/update/HT2022211.html");
	document.getElementById("en-page10").innerHTML="Update";
	document.getElementById("en-page-li10").style.display = "none";
}

function en_page2() {
	document.getElementById("en-page1").setAttribute("href","../schedule.html");
	document.getElementById("en-page1").innerHTML="Fleet schedule";
	document.getElementById("en-page-li1").style.display = "inherit";
	
	document.getElementById("en-page2").setAttribute("href","../member.html");
	document.getElementById("en-page2").innerHTML="Team members";
	document.getElementById("en-page-li2").style.display = "inherit";
	
	document.getElementById("en-page3").setAttribute("href","../cinfo.html");
	document.getElementById("en-page3").innerHTML="Vehicle information";
	document.getElementById("en-page-li3").style.display = "inherit";
	
	document.getElementById("en-page4").setAttribute("href","../about.html");
	document.getElementById("en-page4").innerHTML="About";
	document.getElementById("en-page-li4").style.display = "inherit";
	
	document.getElementById("en-page5").setAttribute("href","../update/HT2022211.html");
	document.getElementById("en-page5").innerHTML="Update";
	document.getElementById("en-page-li5").style.display = "inherit";
	
	document.getElementById("en-page6").setAttribute("href","");
	document.getElementById("en-page6").innerHTML="";
	document.getElementById("en-page-li6").style.display = "none";
	
	document.getElementById("en-page7").setAttribute("href","");
	document.getElementById("en-page7").innerHTML="";
	document.getElementById("en-page-li7").style.display = "none";
	
	document.getElementById("en-page8").setAttribute("href","./page/update/HT2022211.html");
	document.getElementById("en-page8").innerHTML="Update";
	document.getElementById("en-page-li8").style.display = "none";
	
	document.getElementById("en-page9").setAttribute("href","./page/update/HT2022211.html");
	document.getElementById("en-page9").innerHTML="Update";
	document.getElementById("en-page-li9").style.display = "none";
	
	document.getElementById("en-page10").setAttribute("href","./page/update/HT2022211.html");
	document.getElementById("en-page10").innerHTML="Update";
	document.getElementById("en-page-li10").style.display = "none";
}

function not(){
	var alertmessage="公告\n\n网站将于2022年1月21日 下午23:00进行停机维护升级，届时您将无法访问网站，给您带来不便之处，敬请谅解。\n\n2022年1月21日"
	
	alert(alertmessage)
}
function note(){
	var alertmessage="Notice\n\nThe website will be shut down for maintenance and upgrading on January 21, 2022. PM 23:00 At that time, you will not be able to access the website, which will bring you inconvenience. Please understand.\n\nJanuary 21, 2022"
	
	alert(alertmessage)
}
function openhttp(){
	location.href = "https://www.apple.com.cn/iphone/wallpaper/?zodiac=tiger"
}
function download(){
	alert("打开后长按保存");
    window.location.href="https://www.apple.com.cn/iphone/wallpaper/?zodiac=tiger";                   
}
function openhttpwjx(){
	location.href = "https://www.wjx.cn/vj/wo39MkU.aspx"
}
function openhttpnew(){
	location.href = "./page/1login.html"
}
function no(){
	alert("该功能在您所在的国家/地区不可用")
	return false;
}
function noen(){
	alert("This feature is not available in your Country / Region")
}
function titock(){
	w = screen.availWidth;
	if(w>800)
		location.href = "https://www.douyin.com/user/MS4wLjABAAAAjVXKDMJ_TyGdZfu_YSrJzQ9_Gr4BVw7o3juNGQqZz54-fYL8jddfSPJ4UycfyXUW"
	else
		location.href = "snssdk1128://user/profile/4262120817963715"
		
}

          window.onload = function() {undefined
              document.onkeydown = function() {undefined
                 var e = window.event || arguments[0];
                 //屏蔽F12
                 if(e.keyCode == 123) {undefined
                     
                     return false;
                     //屏蔽Ctrl+Shift+I
                 } else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {undefined
                     
                     return false;
                     //屏蔽Shift+F10
                 } else if((e.shiftKey) && (e.keyCode == 121)){undefined
                     

                     return false;

                 } else if(event.ctrlKey  &&  window.event.keyCode==83 ){ 
                     
                     return false;
                 } 
             };
             //屏蔽右键单击
             document.oncontextmenu = function() {
            
                 return false;
             }
         }
	function getCookieVal (offset)
	{
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1)
	endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
	}
	function GetCookie (name)
	{
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen)
	{
	var j = i + alen;
	if (document.cookie.substring(i, j) == arg)
	return getCookieVal (j);
	i = document.cookie.indexOf(" ", i) + 1;
	if (i == 0)
	break;
	}
	return null;
	}
	function SetCookie (name, value)
	{
	var argv = SetCookie.arguments;
	var argc = SetCookie.arguments.length;
	var expires = (2 < argc) ? argv[2] : true;
	var path = (3 < argc) ? argv[3] : true;
	var domain = (4 < argc) ? argv[4] : true;
	var secure = (5 < argc) ? argv[5] : true; //安全模式生效
	document.cookie = name + "=" + escape (value) +
	((path == null) ? "" : ("; path=" + path)) +
	((domain == null) ? "" : ("; domain=" + domain)) +
	((secure == true) ? "; secure" : "");
	}
	function ResetCounts(name)
	{
	visits = 0;
	SetCookie(expdate , "/", true, true);
	location.reload();
	}
	var expdate = new Date();
	var visits;
	expdate.setTime(expdate.getTime() + (24*60*60 * 1000)); //COOKIES超期时间设置,此处为1天
	if(!(visits = GetCookie("visits")))
	visits = 0;
	visits++;
	SetCookie(expdate, "/", true, true);
		
	
		
		(function () {
		        if (document.scrollingElement) {
		          return;
		        }
		        var element = null;
		        function scrollingElement () {
		          if (element) {
		            return element;
		          } else if (document.body.scrollTop) {
		            // speed up if scrollTop > 0
		            return (element = document.body);
		          }
		          var iframe = document.createElement('iframe');
		          iframe.style.height = '1px';
		          document.documentElement.appendChild(iframe);
		          var doc = iframe.contentWindow.document;
		          doc.write('<!DOCTYPE html><div style="height:9999em">x</div>');
		          doc.close();
		          var isCompliant = doc.documentElement.scrollHeight > doc.body.scrollHeight;
		          iframe.parentNode.removeChild(iframe);
		          return (element = isCompliant ? document.documentElement : document.body);
		        }
		        Object.defineProperty(document, 'scrollingElement', {
		          get: scrollingElement
		        });
		      })();
		      var ModalHelper = (function (bodyCls) {
		        var scrollTop;
		        return {
		          afterOpen: function () {
		            scrollTop = document.scrollingElement.scrollTop;
		            document.body.classList.add(bodyCls);
		            document.body.style.top = -scrollTop + 'px';
		          },
		          beforeClose: function () {
		            document.body.classList.remove(bodyCls);
		            // scrollTop lost after set position:fixed, restore it back.
		            document.scrollingElement.scrollTop = scrollTop;
		          }
		        };
		      })('modal-open');

	
function navopen(){undefined
	document.getElementById("nopen").onclick = ModalHelper.afterOpen();
	document.getElementById("nopen").onclick = ModalHelper.beforeClose();
}	


function open_text(){
	document.getElementById("open_text").style.display = "block";
	document.getElementById("please_open").style.display = "none";
}
function close_text(){
	document.getElementById("open_text").style.display = "none";
	document.getElementById("please_open").style.display = "block";
}
