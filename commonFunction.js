function sendMessage(){
    var msg = $('#message').val();
    if(msg.trim() === '') return '';
    let messageobj = {
        id: unique_id,
        text: msg
    };
    $('#message').val('');
    socket.emit('sendMsg', messageobj);
}

function receiveMessage(message){
    let tag = message.id === unique_id ? 'You:' : 'Others:';
    tag = `${tag} (${message.id})`;
    var message1 = `<div class="container ${contain_color_toggle}"><b>${tag}</b><p>${message.text}</p></div>`;
    contain_color_toggle = (contain_color_toggle == '') ? 'darker' : '';
    $('#message_box').prepend(message1);
}

