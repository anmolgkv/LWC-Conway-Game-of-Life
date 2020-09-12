import { createElement } from 'lwc';
import App from 'my/app';

describe('game-board', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('should render a matrix with initial state', async () => {
        const board = createElement('my-game-board', {
            is: App,
            size: 6
        });
        board.size = 6;
        document.body.appendChild(board);

        await Promise.resolve();

        const cells = board.shadowRoot.querySelectorAll('td');
        expect(cells.length).toBe(36);
    });
});
