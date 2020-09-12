import CellState from 'my/cellState';

describe('cell-state', () => {
    it('Should have a ALIVE state', () => {
        expect(CellState.ALIVE).toBe(1);
    });
    it('Should have a DEAD state', () => {
        expect(CellState.DEAD).toBe(0);
    });
});
