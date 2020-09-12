import cellState from 'my/cellState';

export default class Cell {
    constructor(state) {
        if (!Object.values(cellState).includes(state)) {
            throw new Error('Invalid state');
        }

        this.state = state;
    }

    nextState(neigbhours) {
        let result;

        if (
            this.state === cellState.ALIVE &&
            (neigbhours === 2 || neigbhours === 3)
        ) {
            result = this.state;
        } else if (this.state === cellState.DEAD && neigbhours === 3) {
            result = cellState.ALIVE;
        } else {
            result = cellState.DEAD;
        }

        return result;
    }
}
