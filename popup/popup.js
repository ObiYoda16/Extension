
const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
    sendMessageId.onclick = function() {
        openVirusTotalIp("19.2.2.1")
        // do something
    };
}



function openVirusTotalIp(ip) {
    window.open("https://www.virustotal.com/gui/search/http%253A%252F%252F"+ip,'_blank').focus();
}