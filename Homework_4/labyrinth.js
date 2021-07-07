const MARK = 2;

function getNeighboursCells([x, y]) {
    return [
        [x, y - 1],
        [x, y + 1],
        [x - 1, y],
        [x + 1, y],
    ];
}

function getNeighbours(labyrinth, [x, y]) {
    const cells = getNeighboursCells([x, y]);
    return cells.filter(([x, y]) => {
        return labyrinth[x]?.[y] === 1;
    });
}

function mark_neighbours(labyrinth, neighbours) {
    neighbours.forEach(([x, y]) => {
        labyrinth[x][y] = MARK;
    });
}

function hasPath(labyrinth, [goal_x, goal_y], [x, y]) {
    if (goal_x === x && goal_y === y) {
        return true;
    }
    const neighbours = getNeighbours(labyrinth, [x, y]);
    mark_neighbours(labyrinth, neighbours);
    return neighbours.some(hasPath.bind(this, labyrinth, [goal_x, goal_y]));
}

function main() {
    const LABYRINTH = [
        [1, 0, 1, 0, 1],
        [1, 1, 1, 0, 1],
        [0, 1, 0, 0, 1],
        [0, 1, 0, 0, 1],
        [0, 1, 1, 1, 1],
    ];
    const res = hasPath(LABYRINTH, [0, 0], [4, 4]);
    console.log(res);
    console.log(LABYRINTH);
}

main();
