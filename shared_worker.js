var count = 0;
onconnect = function (e) {
    var port = e.ports[0];
    port.onmessage = function (e) {
        port.postMessage(count++);
    }
}
