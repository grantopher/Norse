/**
 * Created by grantopher on 6/13/17.
 */
socket = io('http://localhost:3000');
console.log(socket);

socket.on('connect', function (data) {
});


$('#sendEvent').on('click', function (event) {
    socket.emit('button click', {msg: 'clicked the button'});
});
