function testBackground(){
    alert(chrome.runtime.id);
    alert("testBackground");
}

function closeParentWindow(){
    alert("closeParentWindow");
}


function chuandicanshu(){
    alert("chuandicanshu");
    document.getElementById("myFrame").contentWindow.say();
    alert("chuandicanshu111111");
}

