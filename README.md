# chrome_ext_dingtalk_login
Chrome插件开发之iframe通信


```
javascript:
function showIframe(){document.getElementById("header").innerHTML = '<iframe src="http://192.168.1.180" frameborder="0" width="500" height="500" id="fff"></iframe>'+document.getElementById("header").innerHTML;};
function addtext(data){
    document.getElementsByName("username")[0].value=data[0];
    document.getElementsByName("password")[0].value=data[1];
    document.getElementById("fff").style.display = 'none';
}
showIframe();
window.addEventListener('message',function(e){addtext(e.data);});
```
