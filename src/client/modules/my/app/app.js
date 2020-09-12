import { LightningElement, api } from 'lwc';

import Game from 'my/game';
import CellStateGame from 'my/cellState';

const { DEAD, ALIVE } = CellStateGame;

export default class App extends LightningElement {
    board;

    @api size = 15;

    connectedCallback() {
        this.game = this.newGame();
        this.board = this.toBoard(this.game.state);
    }

    next() {
        this.game.state = this.game.nextState();
        this.board = this.toBoard(this.game.state);
    }

    toBoard(state) {
        return state.map((row, rowIndex) => {
            return {
                id: rowIndex,
                cells: row.map((cell, columnIndex) => {
                    return {
                        className:
                            cell.state === ALIVE ? 'cell alive' : 'cell dead',
                        id: `${rowIndex}:${columnIndex}`
                    };
                })
            };
        });
    }

    toggelState(event) {
        const { rowIndex, columnIndex } = event.target.dataset;

        this.game.state[rowIndex][columnIndex].state =
            this.game.state[rowIndex][columnIndex].state === ALIVE
                ? DEAD
                : ALIVE;
        this.board = this.toBoard(this.game.state);
    }

    newGame() {
        const state = new Array(this.size).fill(
            new Array(this.size).fill(DEAD)
        );

        return new Game(state);
    }
}
