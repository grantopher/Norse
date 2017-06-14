/**
 * Created by grantopher on 6/13/17.
 */

var socket = io();

socket.on('button click', function (data) {
    $('#display').val(data.msg);
});