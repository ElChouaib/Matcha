import React, { useEffect } from 'react';
import {connect} from "react-redux";
import Chat from '../../components/Chat';
import {GetConversations, SelectConversation, SendMessage, LoadMessages, ReceiveMsg, SendMessageSuccess} from '../../actions/chatAction';
import { resetState } from '../../actions/resetStateAction';
import socket from '../../socketConn';

const ChatContainer = (props) => {
    const {sendMsgSuccess, reset, user, err, getConversations, selectedConversation, conversations, selectConversation, loadMessages, sendMessage, receiveMsg} = props
    useEffect(() => {
        if(user){
            getConversations();
        }
        socket.on('new_msg', function(data){
            receiveMsg(data);
            let cont = document.querySelector('.messages');
            if(cont){
                const height = cont.scrollHeight;
                cont.scrollTo(0, height);
            }
        });
        socket.on('received', function(data){
            sendMsgSuccess(data.receiver, data.profilePic, data.message);
            let cont = document.querySelector('.messages');
            if(cont){
                const height = cont.scrollHeight;
                cont.scrollTo(0, height);
            }
        });
        return () => reset()
    }, []);

    const handleSelectConversation = (id) => {
        selectConversation(id);
        loadMessages(id);
    }
    const handleSendMessage = (id, message) => {
        sendMessage(id, user.profilePic, message);
    }
    return (
        <Chat
            handleSelectConversation={handleSelectConversation}
            handleSendMessage={handleSendMessage}
            selected={selectedConversation}
            conversations={conversations}
            err={err}
        />
    )
}

const mapStateToProps = (state) => (
{
    "user": state.user,
    "selectedConversation": state.chat.selectedConversation,
    "conversations": state.chat.conversations,
    "err": state.chat.err,
});
const mapDispatchToProps = {
    "selectConversation": SelectConversation,
    "sendMessage": SendMessage,
    "sendMsgSuccess": SendMessageSuccess,
    "getConversations": GetConversations,
    "loadMessages": LoadMessages,
    "reset": resetState,
    "receiveMsg": ReceiveMsg,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);