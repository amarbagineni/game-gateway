import * as React from "react";
import "./../styles/index.scss";
import Room from './Room';
import Entrance from './Entrance';
import GameCenter from './GameCenter';
import GameHost from './GameHost';

const App = () => {

    return (
        <div>
            <div>Game Gateway</div>
            <br/>
            {/* <Entrance></Entrance> */}
            {/* <GameCenter></GameCenter> */}
            {/* <GameHost></GameHost> */}
            <Room></Room>
        </div>
    )
}

export default App;
