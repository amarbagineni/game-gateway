import * as React from 'react';
import Input from './common/Input/Input';
import Button from './common/Button/Button';
import "./../styles/pages/GameHost.scss";
import gameImage from "./../../assets/images/game-logo.jpg";

const { useState } = React;

const GameHost = () => {

    const [name, setName] = useState("")

    const hostButtonClicked = () => {
        console.log("The button clicked was -- ", name);
    }
    const getGameDisplayBox = (game) => {
        return <div className={"game-display"}>
            <div className={"game-image"} style={{backgroundImage: `url(${game.image || gameImage})`}}>
                <div className={"game-name"}>
                    {game.name}
                </div>
            </div>
        </div>
    }
    
    return (<div>
            {getGameDisplayBox({name: "Game1"})}

        <div className={"game-host-container"}>
            <div className={"enter-box"}>
                <Input
                    id={"name"}
                    defaultValue={""}
                    placeholder={"Your Name"}
                    onFocusOut={(value) => setName(value)}
                ></Input>

                <Button
                    label={"Host"}
                    name={"Host"}
                    clickHandler={hostButtonClicked}
                ></Button>
            </div>
        </div>
    </div>)
}

export default GameHost;
