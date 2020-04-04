import * as React from 'react';
import "./../styles/pages/PlayersList.scss";

const PlayersList = (props) => {

    const getChat = (player) => {
        return <div className={"player"}>
            <div className={"name"}>{player.name}</div>
        </div>
    }

    return (<div className={"players-list-component"}>
       <div>Players</div>
       {getChat({name: "John"})}
       {getChat({name: "Strujess"})}
       {getChat({name: "Alchamerez"})}
    </div>)
}

export default PlayersList;
