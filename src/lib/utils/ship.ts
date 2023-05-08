const ship = (length: number /* , axis = 'x', coorX: number, coorY: number */) => {
	let health = 0;
	const hit = (): number => (health += 1);
	const position = (coorX: number, coorY: number, axis: string) => {
		const posArr = [];

		for (let i = 0; i < length; i += 1) {
			let arr: number[];
			if (axis) {
				arr = [coorX, coorY + i];
			} else {
				arr = [coorX + i, coorY];
			}

			posArr.push(arr);
		}
		console.log('arr', posArr);
		return posArr;
	};

	const isSunk = (): boolean => {
		if (health == length) {
			return true;
		}
		return false;
	};

	return {
		hit,
		isSunk,
		position
	};
};

export { ship };
