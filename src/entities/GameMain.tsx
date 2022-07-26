import { useEffect, useRef } from "react";
import { useInterval } from "../hooks/useInterval";
import { useSnakeGame } from "../hooks/useSnakeGame";
import { BOARD_SIZE, SCALE } from "./constants";

const GameMain = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const {
        snakePosition,
        foodPosition,
        gameIsOver,
        snakeSpeed,
        scores,
        handleGameLoop,
        moveSnake
    } = useSnakeGame();

    document.addEventListener("keydown", moveSnake);
    
    useEffect(() => {
        const context = canvasRef.current?.getContext("2d")!;
        context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
        context.clearRect(0, 0, BOARD_SIZE[0], BOARD_SIZE[1]);
        context.fillStyle = "#ffffff";
        context.fillRect(foodPosition[0], foodPosition[1], 1, 1);
        context.fillStyle = "#ffc051";
        snakePosition.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    }, [snakePosition, foodPosition, gameIsOver]);

    useInterval(handleGameLoop, snakeSpeed);

    return (
        <main className="game-main">
            <h3 className="game-score">
                Your Score{" ->"}
                <em>{scores}</em>
            </h3>
            <canvas
                width={`${BOARD_SIZE[0]}px`}
                height={`${BOARD_SIZE[1]}px`}
                className="game-board"
                ref={canvasRef}
            />
        </main>
    );
}

export default GameMain;