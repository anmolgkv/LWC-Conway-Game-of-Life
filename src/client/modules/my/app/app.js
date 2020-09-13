import { LightningElement } from 'lwc';

import Game from 'my/game';
import CellStateGame from 'my/cellState';

const { DEAD, ALIVE } = CellStateGame;

export default class App extends LightningElement {
    board;

    height = 18;
    width = 18;
    timer;
    deadColor = '#F6EEEE';
    aliveColor = '#f15fd9';

    get isAutoPlay() {
        return !!this.timer;
    }

    constructor() {
        super();
        const styles = document.createElement('link');
        styles.href = './resources/salesforce-lightning-design-system.min.css';
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);
    }

    connectedCallback() {
        this.game = this.newGame();
        this.board = this.toBoard(this.game.state);
    }

    heightChangeHandler(event) {
        this.height = Number(event.target.value);
        this.game = this.newGame();
        this.board = this.toBoard(this.game.state);
    }

    widthChangeHandler(event) {
        this.width = Number(event.target.value);
        this.game = this.newGame();
        this.board = this.toBoard(this.game.state);
    }

    deadColorChangeHandler(event) {
        this.deadColor = event.target.value;
    }

    aliveColorChangeHandler(event) {
        this.aliveColor = event.target.value;
    }

    play() {
        this.timer = setInterval(() => this.next(), 1000);
    }

    reset() {
        this.stop();
        this.game = this.newGame();
        this.board = this.toBoard(this.game.state);
    }

    stop() {
        clearInterval(this.timer);
        this.timer = null;
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
                        id: `${rowIndex}:${columnIndex}`,
                        style:
                            cell.state === ALIVE
                                ? `background-color: ${this.aliveColor};`
                                : `background-color: ${this.deadColor};`
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
        const state = Array.from({ length: this.height }, () => {
            return Array.from({ length: this.width }, () => {
                const cellState = Math.random() > 0.5 ? ALIVE : DEAD;
                return cellState;
            });
        });

        return new Game(state);
    }
}
