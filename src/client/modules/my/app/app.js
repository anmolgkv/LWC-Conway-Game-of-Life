import { LightningElement } from 'lwc';

import Game from 'my/game';
import CellStateGame from 'my/cellState';

const { DEAD, ALIVE } = CellStateGame;

export default class App extends LightningElement {
    timer;
    board;
    width = 18;
    height = 18;
    deadColor = '#F6EEEE';
    aliveColor = '#f15fd9';

    get isAutoPlay() {
        return !!this.timer;
    }

    constructor() {
        super();
        this.loadSlds();
    }

    connectedCallback() {
        this.newGame();
    }

    heightChangeHandler(event) {
        this.height = Number(event.target.value);
        this.newGame();
    }

    widthChangeHandler(event) {
        this.width = Number(event.target.value);
        this.newGame();
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
        this.newGame();
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

        this.game.state[rowIndex][columnIndex].state = !this.game.state[
            rowIndex
        ][columnIndex].state;
        this.board = this.toBoard(this.game.state);
    }

    newGame() {
        const state = Array.from({ length: this.height }, () => {
            return Array.from({ length: this.width }, () =>
                Math.random() > 0.5 ? ALIVE : DEAD
            );
        });

        this.game = new Game(state);
        this.board = this.toBoard(this.game.state);
    }

    loadSlds() {
        const styles = document.createElement('link');
        styles.href = './resources/salesforce-lightning-design-system.min.css';
        styles.rel = 'stylesheet';

        this.template.appendChild(styles);
    }
}
