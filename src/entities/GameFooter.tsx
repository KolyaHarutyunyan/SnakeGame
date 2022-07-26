import { gamePlayActions } from "./constants";

const GameFooter = () => {
    return (
        <footer className="game-footer">
            <div className="how-to-play-actions-box">
                <h3 className="how-to-play-title">How to Play</h3>
                <div className="how-to-play-container">
                    <ul className="how-to-play-actions-list">
                        {gamePlayActions.slice(0, 4).map((action, index) => {
                            return (
                                <li key={index}>
                                    <span>{action.label}{" ->"}</span> 
                                    <span>{action.keyToPress}</span>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="how-to-play-actions-list">
                        {gamePlayActions.slice(4).map((action, index) => {
                            return (
                                <li key={index}>
                                    <span>{action.label}{" ->"}</span>
                                    <span>{action.keyToPress}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default GameFooter;
