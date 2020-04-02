import * as React from 'react';
import Button from './common/Button/Button';
import "./../styles/pages/GameCenter.scss";
import gameImage from "./../../assets/images/game-logo.jpg";

const GameCenter = () => {

    const playGame = (game) => {
        console.log(game, " You will play");
    }

    const getGameDisplayBox = (game) => {
        return <div className={"game-display"}>
            <div className={"game-image"} style={{backgroundImage: `url(${game.image || gameImage})`}}>
                <div className={"game-name"}>
                    {game.name}
                </div>
            </div>
            <Button
                label={"Play"}
                name={"Play"}
                clickHandler={() => playGame(game)}
            ></Button>
        </div>
    }

    return (<div>
        <div className={"game-center-container"}>
           
            {getGameDisplayBox({name: "Game1"})}
            {getGameDisplayBox({name: "Game2"})}
            {getGameDisplayBox({name: "Game3"})}
            {getGameDisplayBox({name: "Game4"})}
        </div>
    </div>)
}

export default GameCenter;
