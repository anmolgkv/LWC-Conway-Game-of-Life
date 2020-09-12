import Cell from 'my/cell';
import CellState from 'my/CellState';

describe('cell', () => {
    it('Should be initialized with an initial state', () => {
        const aliveCell = new Cell(CellState.ALIVE);
        expect(aliveCell.state).toBe(CellState.ALIVE);

        const deadCell = new Cell(CellState.DEAD);
        expect(deadCell.state).toBe(CellState.DEAD);
    });

    it('Should throw error when state is invalid', () => {
        expect(() => {
            // eslint-disable-next-line no-new
            new Cell('Invalid');
        }).toThrow();
    });

    it('should die with less than 2 live neighbours', () => {
        const cell = new Cell(CellState.ALIVE);
        const nextStateWith0Neighbour = cell.nextState(0);

        expect(nextStateWith0Neighbour).toBe(CellState.DEAD);
    });

    it('should stay dead with less than 2 live neighbours', () => {
        const cell = new Cell(CellState.DEAD);
        const nextStateWith0Neighbour = cell.nextState(0);

        expect(nextStateWith0Neighbour).toBe(CellState.DEAD);
    });

    it('should live with 2 or 3 neighbours', () => {
        const cell = new Cell(CellState.ALIVE);
        const nextStateWith2Neighbour = cell.nextState(2);

        expect(nextStateWith2Neighbour).toBe(CellState.ALIVE);

        const nextStateWith3Neighbour = cell.nextState(3);

        expect(nextStateWith3Neighbour).toBe(CellState.ALIVE);
    });

    it('should die with more than 3 neighbours', () => {
        const cell = new Cell(CellState.ALIVE);
        const nextStateWith4Neighbour = cell.nextState(4);

        expect(nextStateWith4Neighbour).toBe(CellState.DEAD);

        const nextStateWith5Neighbour = cell.nextState(5);

        expect(nextStateWith5Neighbour).toBe(CellState.DEAD);
    });

    it('should stay dead with more than 3 neighbours', () => {
        const cell = new Cell(CellState.DEAD);
        const nextStateWith4Neighbour = cell.nextState(4);

        expect(nextStateWith4Neighbour).toBe(CellState.DEAD);

        const nextStateWith5Neighbour = cell.nextState(5);

        expect(nextStateWith5Neighbour).toBe(CellState.DEAD);
    });

    it('should be re bourn with 3 neighbours', () => {
        const cell = new Cell(CellState.DEAD);
        const nextStateWith3Neighbour = cell.nextState(3);

        expect(nextStateWith3Neighbour).toBe(CellState.ALIVE);
    });
});
