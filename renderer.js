// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const ipc = require('electron').ipcRenderer;

const syncMsgBtn = document.getElementById('sendSyncMsgBtn');
const syncParagraph = document.getElementById('syncReply');

syncMsgBtn.addEventListener('click', function () {
    const reply = ipc.sendSync('synchronous-message','Testing for response');
    syncParagraph.innerHTML = reply;
}); 


