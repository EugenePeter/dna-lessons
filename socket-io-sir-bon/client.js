var socket = require("socket.io-client")("http://localhost:3030");

const login_token = "9c7c410a-3c1f-4964-9890-aab20459b7d9";
// const login_token = null;
socket.on("connect", function () {
    console.log(`I have Connected`);

    if (login_token) {
        socket.emit("introduce", login_token);
    }
});
socket.on("event", function (data) {});
socket.on("disconnect", function () {});
