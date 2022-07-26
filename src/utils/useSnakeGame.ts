import { useState } from "react";
import {
    BOARD_SIZE,
    DIRECTIONS,
    FOOD_START,
    getRandomPosition,
    SCALE,
    SNAKE_START,
    SPEED
} from "../entities/constants";
import Position from "../types/Position";
import Snake from "../types/Snake";
import SnakeGame from "../types/SnakeGame";

export const useSnakeGame = (): SnakeGame => {
    const [snakePosition, setSnakePosition] = useState(SNAKE_START);
    const [foodPosition, setFoodPosition] = useState(FOOD_START);
    const [snakeDirection, setSnakeDirection] = useState(DIRECTIONS["w"]);
    const [snakeSpeed, setSnakeSpeed] = useState<number | null>(null);
    const [gameIsOver, setGameIsOver] = useState(false);
    const [scores, setScores] = useState(0);

    const startGame = (): void => {
        setSnakePosition(SNAKE_START);
        setFoodPosition(FOOD_START);
        setSnakeDirection(DIRECTIONS["w"]);
        setSnakeSpeed(SPEED);
        setGameIsOver(false);
        setScores(0);
    };

    const resetGame = (): void => {
        setSnakePosition(SNAKE_START);
        setFoodPosition(FOOD_START);
        setSnakeDirection(DIRECTIONS["w"]);
        setSnakeSpeed(null);
        setGameIsOver(false);
        setScores(0);
    };

    const endGame = (): void => {
        setSnakeSpeed(null);
        setGameIsOver(true);
    };

    const moveSnake = (e: KeyboardEvent): void => {
        const { key } = e;
        switch (key) {
            case "g":
                startGame();
                break;
            case "r":
                resetGame();
                break;
            case "p":
                setSnakeSpeed(null);
                break;
            case "c":
                setSnakeSpeed(SPEED);
                break;
            case "d":
            case "s":
            case "a":
            case "w":
                setSnakeDirection(DIRECTIONS[key]);
                break;
        }
    };

    const createFood = (): Position => foodPosition.map((_, i) => getRandomPosition(i));

    const checkCollision = (piece: Position, snake = snakePosition): boolean => {
        if (
            piece[0] * SCALE >= BOARD_SIZE[0] ||
            piece[0] < 0 ||
            piece[1] * SCALE >= BOARD_SIZE[1] ||
            piece[1] < 0
        ) {
            return true;
        }
        for (const segment of snake) {
            if (piece[0] === segment[0] && piece[1] === segment[1]) {
                return true;
            }
        }
        return false;
    };

    const checkFoodCollision = (newSnake: Snake): boolean => {
        if (newSnake[0][0] === foodPosition[0] && newSnake[0][1] === foodPosition[1]) {
            let newFood = createFood();
            while (checkCollision(newFood, newSnake)) {
                newFood = createFood();
            }
            setFoodPosition(newFood);
            setScores(prevState => prevState + 10);
            return true;
        }
        return false;
    };

    const handleGameLoop = (): void => {
        const snakeDeepClone = JSON.parse(JSON.stringify(snakePosition));
        const newSnakeHead: Position = [
            snakeDeepClone[0][0] + snakeDirection[0],
            snakeDeepClone[0][1] + snakeDirection[1]
        ];
        snakeDeepClone.unshift(newSnakeHead);
        if (scores === 100) {
            if (snakeSpeed !== null) {
                setSnakeSpeed(150);
            }
        }
        if (checkCollision(newSnakeHead) || scores === 300) {
            endGame();
            if (checkCollision(newSnakeHead)) {
                alert(`Game Over \n Your Score is ${scores}`);
            } else {
                alert(`Congratulations!!!! \n  You Win`);
            }
        }
        if (!checkFoodCollision(snakeDeepClone)) snakeDeepClone.pop(); 
        setSnakePosition(snakeDeepClone);
    };

    return {
        snakePosition,
        foodPosition,
        gameIsOver,
        snakeSpeed,
        scores,
        handleGameLoop,
        moveSnake,
    };
};