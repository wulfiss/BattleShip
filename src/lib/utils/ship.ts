const ship = (length: number, axis = 'x', coorX: number, coorY: number) => {
	let health = 0;
	const hit = (): number => (health += 1);
	const isSunk = (): boolean => {
		if (health == length) {
			return true;
		}
		return false;
	};

	return {
		hit,
		isSunk
	};
};

export { ship };
