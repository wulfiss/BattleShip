import { ship } from './ship';

const gameBoard = (player: string) => {
	const id = () => player;
	/* 	const createArr = (() => {
		const arr: number[][] = [];
		for (let i = 0; i < 10; i += 1) {
			for (let j = 0; j < 10; j += 1) {
				arr[i][j] = 1;
			}
		}
	})(); */

	const Ships = {
		patrolBoat: ship(2),
		submarine: ship(3),
		destroyer: ship(3),
		battleship: ship(4),
		carrier: ship(5)
	};

	return { id, Ships };
};

export { gameBoard };
