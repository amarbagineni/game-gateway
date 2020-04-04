import * as React from 'react';
import "./../styles/pages/RoomChat.scss";

const RoomChat = (props) => {

    const getChat = (chat) => {
        return <div className={"chat"}>
            <div className={"name"}>{chat.name}</div>
            <div className={"message-container"}>
                <div className={"message"}>{chat.message}</div>
                <div className={"time"}>{chat.time}</div>
            </div>
        </div>
    }

    return (<div className={"room-chat-component"}>
       <div>Chat</div>
       {getChat({name: "John", message: "This is the test chat message this is a really long message that can span some multi line .. lets see how this is", time: "12:00 pm"})}
       {getChat({name: "John", message: "This is the test chat message", time: "12:00 pm"})}
       {getChat({name: "Alcharemez", message: "This is the test chat message", time: "12:00 pm"})}
    </div>)
}

export default RoomChat;
