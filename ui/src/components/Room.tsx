import * as React from 'react';
import "./../styles/pages/Room.scss";
import Button from './common/Button/Button';
import Input from './common/Input/Input';
import RoomChat from './roomChat';
import PlayersList from './PlayersList';

const {useState} = React;

const Room = (props) => {

    const [chatMessage, setChatMessage] = useState("");

    const copyInviteLinkToClipboard = () => {
        console.log("Invite link has been copied to the clipboard");
    }

    const openInstructions = () => {
        console.log("Opening instructions");
    }

    const sendChatMessage = () => {
        console.log("Sending the chat message", chatMessage);
        setChatMessage("");
    }

    const name = (props.game && props.game.name) || "Awesome Game and the Redemption";
    const maxPlayers = (props.game && props.game.maxPlayers) || "4";

    return (<div className={"room-component"}>
       
        <div className={"game-meta"}>
            <span className="title-text">
                <div className={"title"}>{name}</div>
                <div className={"max-players"}>{`${maxPlayers} Players (max)`}</div>
            </span>

            <Button label={"Instructions"} name={"instructions"} clickHandler={openInstructions}></Button>

            <div className={"invite-link-container"}>
                <div className={"invite-text"}>Invite Link</div>
                <Input id={"invite-link"} defaultValue={"https://google.com"} readOnly={true} />
                <Button label={"Copy"} name={"copy-invite"} clickHandler={copyInviteLinkToClipboard} />
            </div>
        </div>

        <div className={"the-game"}>

        </div>

        <div className={"compose-chat"}>
           <Input placeholder={"chat message"} defaultValue={chatMessage} id={"chat-message"} onFocusOut={setChatMessage}></Input>
           <Button name={"send-chat"} label={"Send"} clickHandler={sendChatMessage}></Button>
        </div>
        
        <RoomChat/>
        <PlayersList/>
    </div>)
}

export default Room;
