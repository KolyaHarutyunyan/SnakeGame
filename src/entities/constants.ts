import GameKeys from "../enums/GameKeys";
import Directions from "../types/Directions";
import GamePlayAction from "../types/GamePlayAction";
import Position from "../types/Position";
import Snake from "../types/Snake";

export const gamePlayActions: Array<GamePlayAction> = [
    {
        keyToPress: GameKeys["Move Up"],
        label: "Move Up"
    },
    {
        keyToPress: GameKeys["Move Left"],
        label: "Move Left"
    },
    {
        keyToPress: GameKeys["Move Down"],
        label: "Move Down"
    },
    {
        keyToPress: GameKeys["Move Right"],
        label: "Move Right"
    },
    {
        keyToPress: GameKeys["Start Game"],
        label: "Start Game"
    },
    {
        keyToPress: GameKeys["Reset Game"],
        label: "Reset Game"
    },
    {
        keyToPress: GameKeys["Pause"],
        label: "Pause"
    },
    {
        keyToPress: GameKeys["Continue"],
        label: "Continue"
    },
];

export const BOARD_SIZE: [number, number] = [600, 300];

export const SNAKE_START: Snake = [
  [8, 7],
  [8, 8]
];

export const FOOD_START: Position = [8, 3];

export const SCALE = 12;

export const SPEED = 300;

export const DIRECTIONS: Directions = {
  "w": [0, -1], // up
  "s": [0, 1], // down
  "a": [-1, 0], // left
  "d": [1, 0] // right
};

export const getRandomPosition = (limit: number): number => {
    return Math.floor(Math.random() * BOARD_SIZE[limit] / SCALE);
};