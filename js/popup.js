

// 获取当前选项卡ID
// function getCurrentTabId(callback)
// {
// 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
// 	{
// 		if(callback) callback(tabs.length ? tabs[0].id: null);
// 	});
// }




$('#button').click(e => {
	var bg = chrome.extension.getBackgroundPage();
	bg.testBackground();
});


// var targetExtensionId = "ajikaapbncbojcjdckmdapjikohjbpbf"; // 插件的ID
// 	chrome.runtime.sendMessage(targetExtensionId, {type: 'MsgFromPage', msg: 'Hello, I am page~'}, function(response) {
// 	console.log(response);
// });

chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
    // 可以针对sender做一些白名单检查
    // sendResponse返回响应
    if (request.type == 'MsgFromPage') {
	  sendResponse({tyep: 'MsgFromChrome', msg: 'Hello, I am chrome extension~'});
	  var bg = chrome.extension.getBackgroundPage();
	bg.testBackground();
    }
});