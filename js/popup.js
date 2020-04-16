
// 获取当前选项卡ID
function getCurrentTabId(callback)
{
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
	{
		if(callback) callback(tabs.length ? tabs[0].id: null);
	});
}

// 向content-script主动发送消息
function sendMessageToContentScript(message, callback)
{
	getCurrentTabId((tabId) =>
	{
		chrome.tabs.sendMessage(tabId, message, function(response)
		{
			if(callback) callback(response);
		});
	});
}


chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {

    if (request.type == 'MsgFromPage') {
		sendMessageToContentScript({cmd:'52pojie', size: 42}, function(response){});
		
    }
});

