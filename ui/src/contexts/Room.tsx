import React, { createContext, Component } from "react";

export const GameContext = createContext({});

class GameContextProvider extends Component {
    state = {
        isPaused: false
    }

    pauseGame = () => {
        console.log("Game is paused");
    }

    render() {
        return (
            <GameContext.Provider value={{...this.state, pauseGame: this.pauseGame}}>
                {this.props.children}
            </GameContext.Provider>
        );
    }
}

export default GameContextProvider;
