/**
 * Created by grantopher on 6/13/17.
 */
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
function onConnection(socket) {
    socket.on('updateView', (data) => socket.broadcast.emit('updateView', data));

    socket.on('button click', (data) => socket.broadcast.emit('button click', data));
}

io.on('connection', onConnection);

http.listen(port, () => console.log('listening on port ' + port));