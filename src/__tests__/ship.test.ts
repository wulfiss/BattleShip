/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { ship } from '../lib/utils/ship';

describe('ship test', () => {
	let testShip: { hit: any; isSunk: any };

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
});
