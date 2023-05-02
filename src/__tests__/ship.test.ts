/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { ship } from '../lib/utils/ship';

describe('ship test', () => {
	const testShip = ship(3);
	testShip.hit();

	test('hit once', () => {
		expect(testShip.isSunk()).toBeFalsy();
	});

	testShip.hit();
	testShip.hit();

	test('hit 3 times', () => {
		expect(testShip.isSunk()).toBeTruthy();
	});
});
