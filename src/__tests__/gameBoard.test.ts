/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { gameBoard } from '$lib/utils/gameBoard';

describe('Gameboard', () => {
	const player = gameBoard('Wulfis');

	test('id player', () => {
		expect(player.id()).toBe('Wulfis');
	});

	test('carrier is sunk?, hit once', () => {
		expect(player.Ships.carrier.isSunk()).toBeFalsy();
	});

	test('submarine is sunk? hit twice', () => {
		player.Ships.submarine.hit();
		player.Ships.submarine.hit();
		expect(player.Ships.submarine.isSunk()).toBeFalsy();
	});

	test('submarine is sunk? hit three times', () => {
		player.Ships.submarine.hit();
		expect(player.Ships.submarine.isSunk()).toBeTruthy();
	});
});
