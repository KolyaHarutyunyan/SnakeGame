import React from "react";
import { gamePlayActions } from "./constants";

const GameFooter: React.FC = () => {
    return (
        <footer className="game-footer">
            <div className="how-to-play-actions-box">
                <h3 className="how-to-play-title">How to Play</h3>
                <h6 className="how-to-play-subtitle">Start the game by pressing </h6>
                <ul className="how-to-play-actions-list">
                    {gamePlayActions.map((action, index) => {
                        return (
                            <li key={index}>
                                <span>{action.label}</span> -
                                <span>{action.keyToPress}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <button
                type="button"
                className="reset-game-button"
                onClick={() => { }}
            >
                Reset Game
            </button>
        </footer>
    );
}

export default GameFooter;
