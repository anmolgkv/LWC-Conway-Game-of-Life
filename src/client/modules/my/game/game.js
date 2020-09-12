import Cell from 'my/cell';
import CellState from 'my/cellState';

export default class Game {
    constructor(state) {
        this.numRows = state.length;
        this.numCols = state[0].length;
        this.state = state.map((row) => row.map((column) => new Cell(column)));
    }

    getState(row, column) {
        return this.state[row][column];
    }

    getAliveNeigbhours(row, column) {
        const stateValues = {
            [CellState.ALIVE]: 1,
            [CellState.DEAD]: 0
        };

        let numNeighbors = 0;
        const startRow = row - 1 < 0 ? 0 : row - 1; // the row before the cell row or the first row
        const endRow = row + 1 >= this.numRows ? this.numRows - 1 : row + 1; // the row after the cell row or the last row
        const startCol = column - 1 < 0 ? 0 : column - 1; // the col before the cell col or the first col
        const endCol =
            column + 1 >= this.numCols ? this.numCols - 1 : column + 1; // the col after the cell col or the last col

        for (let i = startRow; i <= endRow; i++) {
            // loop through the cell neigbors including the current cell position
            for (let j = startCol; j <= endCol; j++) {
                if (!(i === row && j === column)) {
                    // ignore the current cell
                    numNeighbors += stateValues[this.state[i][j].state]; // increment the numNeighbors variable ie total number of adjacent neighbors
                }
            }
        }
        return numNeighbors;
    }

    nextState() {
        return this.state.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
                return new Cell(
                    cell.nextState(this.getAliveNeigbhours(rowIndex, colIndex))
                );
            })
        );
    }
}
