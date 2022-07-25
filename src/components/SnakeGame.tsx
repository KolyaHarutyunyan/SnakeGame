import React from "react"
import GameFooter from "../entities/GameFooter";
import GameHeader from "../entities/GameHeader";
import GameMain from "../entities/GameMain";

const SnakeGame: React.FC = () => {
    return (
        <div className="snake-game-container">
            <GameHeader />
            <GameMain />
            <GameFooter />
        </div>
    );
}

export default SnakeGame;
