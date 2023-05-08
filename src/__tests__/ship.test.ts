/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { ship } from '../lib/utils/ship';

describe('ship test', () => {
	let testShip: { hit: any; isSunk: any; position: any };

	beforeEach(() => {
		testShip = ship(3);
	});

	test('hit once', () => {
		testShip.hit();
		expect(testShip.isSunk()).toBeFalsy();
	});

	test('ship is sunk?', () => {
		testShip.hit();
		testShip.hit();
		testShip.hit();
		expect(testShip.isSunk()).toBeTruthy();
	});

	test('ship position x', () => {
		expect(testShip.position(4, 7)).toStrictEqual([
			[4, 7],
			[5, 7],
			[6, 7]
		]);
	});

	test('ship position y', () => {
		expect(testShip.position(4, 6, 'y')).toStrictEqual([
			[4, 6],
			[4, 7],
			[4, 8]
		]);
	});
});
