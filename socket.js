import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
// Assign to global variable to access from other functions
uuidv5 = uuidv4;

// url = "http://localhost:3000";
url = "http://192.168.0.135:3000";

unique_id = uuidv4();
socket = io(url,{ transports : ['websocket'] })

// connection with server
socket.on('connect', function(){
    console.log('Connected to Server')
});

// // message listener from server
socket.on('commonMsg', function(message){
    receiveMessage(message);
});

// // emits message from user side
// socket.emit('createMessage', {
//     id: unique_id,
//     to:'john@ds',
//     text:'what kjkljd'
// });

// when disconnected from server
socket.on('disconnect', function(){
    console.log('Disconnect from server');
});