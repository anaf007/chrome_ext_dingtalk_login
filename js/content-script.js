
// 接收来自后台的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	if(request.cmd == '52pojie') {
		document.getElementById("ls_username").value = "9999";
		document.getElementById("ls_password").value = "8888";
	}
});