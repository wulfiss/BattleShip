const ship = (length: number) => {
	const health = 0;
	const hit = () => health + 1;
	const isSunk = () => {
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
