/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import Index from '../routes/+page.svelte';
import { render } from '@testing-library/svelte';

describe('test if jest is working', () => {
	test('Welcome', () => {
		const { getByText } = render(Index);
		expect(getByText('Welcome to SvelteKit')).toBeInTheDocument();
	});
});
