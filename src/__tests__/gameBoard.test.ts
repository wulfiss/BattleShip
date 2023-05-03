/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { gameBoard } from '$lib/utils/gameBoard';

describe('Gameboard', () => {
	test('test', () => {
		expect(gameBoard()).toBeFalsy();
	});
});
