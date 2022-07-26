import Snake from "./Snake"
import Position from "./Position";

type SnakeGame = {
    snakePosition: Snake,
    foodPosition: Position,
    snakeSpeed: number | null,
    gameIsOver: Boolean,
    scores: number,
    handleGameLoop(): void,
    moveSnake(e: KeyboardEvent): void
};

export default SnakeGame;