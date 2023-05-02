const ship = (length: number) => {
	let health = 0;
	const hit = (): number => (health += 1);
	const isSunk = (): boolean => {
		console.log(health, 'h');
		console.log(length, 'l');
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
