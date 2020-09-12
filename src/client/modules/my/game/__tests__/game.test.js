import Cell from 'my/cell';
import CellState from 'my/cellState';
import Game from 'my/game';

const { DEAD, ALIVE } = CellState;

describe('game', () => {
    it('should be initialized with a given state', () => {
        const deadState = [
            [DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD],
            [DEAD, DEAD, DEAD]
        ];

        const game = new Game(deadState);

        const expectedState = [
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)],
            [new Cell(DEAD), new Cell(DEAD), new Cell(DEAD)]
        ];

        expect(game.state).toEqual(expectedState);
    });

    it('Should retrieve a cell at a given row and column', () => {
        const gameState = [
            [DEAD, ALIVE],
            [ALIVE, DEAD]
        ];

        const game = new Game(gameState);

        const deadCell = game.getState(0, 0);
        expect(deadCell).toBeInstanceOf(Cell);
        expect(deadCell).toEqual(new Cell(DEAD));

        const aliveCell = game.getState(0, 1);
        expect(aliveCell).toBeInstanceOf(Cell);
        expect(aliveCell).toEqual(new Cell(ALIVE));
    });

    it('Should get the number of alive neighbors above given cell', () => {
        const gameState = [
            [DEAD, ALIVE, ALIVE],
            [DEAD, ALIVE, DEAD],
            [DEAD, DEAD, DEAD]
        ];

        const game = new Game(gameState);
        const aliveNeigbhours = game.getAliveNeigbhours(1, 1);

        expect(aliveNeigbhours).toBe(2);
    });

    it('Should get the number of alive neighbors below given cell', () => {
        const gameState = [
            [DEAD, DEAD, DEAD],
            [DEAD, ALIVE, DEAD],
            [DEAD, ALIVE, DEAD]
        ];

        const game = new Game(gameState);
        const aliveNeigbhours = game.getAliveNeigbhours(1, 1);

        expect(aliveNeigbhours).toBe(1);
    });

    it('Should get the number of alive neighbors next to given cell', () => {
        const gameState = [
            [DEAD, DEAD, DEAD],
            [ALIVE, DEAD, ALIVE],
            [DEAD, DEAD, DEAD]
        ];

        const game = new Game(gameState);
        const aliveNeigbhours = game.getAliveNeigbhours(1, 1);

        expect(aliveNeigbhours).toBe(2);
    });

    it('Should get the number of alive neighbors for a given cell', () => {
        const gameState = [
            [ALIVE, ALIVE, ALIVE],
            [ALIVE, ALIVE, ALIVE],
            [ALIVE, ALIVE, ALIVE]
        ];

        const game = new Game(gameState);
        const aliveNeigbhours = game.getAliveNeigbhours(1, 1);

        expect(aliveNeigbhours).toBe(8);
    });

    it('Should get the number of alive neighbors for cell in the top row', () => {
        const gameState = [
            [ALIVE, ALIVE, ALIVE],
            [DEAD, ALIVE, DEAD],
            [ALIVE, ALIVE, ALIVE]
        ];

        const game = new Game(gameState);
        const aliveNeigbhours = game.getAliveNeigbhours(0, 1);

        expect(aliveNeigbhours).toBe(3);
    });

    it('Should get the number of alive neighbors for cell in first row', () => {
        const gameState = [
            [ALIVE, ALIVE, ALIVE],
            [ALIVE, ALIVE, ALIVE],
            [ALIVE, ALIVE, ALIVE]
        ];

        const game = new Game(gameState);
        const aliveNeigbhours = game.getAliveNeigbhours(0, 0);

        expect(aliveNeigbhours).toBe(3);
    });

    it('Should get the number of alive neighbors for cell in bottom row', () => {
        const gameState = [
            [ALIVE, ALIVE, ALIVE],
            [ALIVE, ALIVE, DEAD],
            [ALIVE, ALIVE, ALIVE]
        ];

        const game = new Game(gameState);
        const aliveNeigbhours = game.getAliveNeigbhours(2, 1);

        expect(aliveNeigbhours).toBe(4);
    });

    it('Should get the number of alive neighbors for cell in the last col', () => {
        const gameState = [
            [ALIVE, ALIVE, ALIVE],
            [ALIVE, ALIVE, DEAD],
            [ALIVE, ALIVE, ALIVE]
        ];

        const game = new Game(gameState);
        const aliveNeigbhours = game.getAliveNeigbhours(1, 2);

        expect(aliveNeigbhours).toBe(5);
    });

    it('Should create next state of game', () => {
        const gameState = [
            [DEAD, DEAD, DEAD, DEAD, DEAD],
            [DEAD, DEAD, ALIVE, DEAD, DEAD],
            [DEAD, DEAD, ALIVE, DEAD, DEAD],
            [DEAD, DEAD, ALIVE, DEAD, DEAD],
            [DEAD, DEAD, DEAD, DEAD, DEAD]
        ];

        const game = new Game(gameState);

        const expectedState = [
            [
                new Cell(DEAD),
                new Cell(DEAD),
                new Cell(DEAD),
                new Cell(DEAD),
                new Cell(DEAD)
            ],
            [
                new Cell(DEAD),
                new Cell(DEAD),
                new Cell(DEAD),
                new Cell(DEAD),
                new Cell(DEAD)
            ],
            [
                new Cell(DEAD),
                new Cell(ALIVE),
                new Cell(ALIVE),
                new Cell(ALIVE),
                new Cell(DEAD)
            ],
            [
                new Cell(DEAD),
                new Cell(DEAD),
                new Cell(DEAD),
                new Cell(DEAD),
                new Cell(DEAD)
            ],
            [
                new Cell(DEAD),
                new Cell(DEAD),
                new Cell(DEAD),
                new Cell(DEAD),
                new Cell(DEAD)
            ]
        ];

        expect(game.nextState()).toEqual(expectedState);
    });
});
