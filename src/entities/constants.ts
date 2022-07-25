type GamePlayAction = {
    keyToPress: string,
    label: string
};

enum GameKeys {
    "Move Up" = "w",
    "Move Left" = "a",
    "Move Down" = "s",
    "Move Right" = "d"
}

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
];