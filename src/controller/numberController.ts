/**
 * Number
 */
export default class NumberController {
	/**
	 * Gets numbers from string
	 * @param string
	 * @returns numbers from string
	 *
	 * @example
	 * ```
	 * getNumbersFromString('1,2,3,4,5,6,7,8,9,10')
	 * ```
	 */
	public getNumbersFromString(string: string): number[] {
		const result: number[] = [];
		const numbers = string.toLowerCase().match(/\d+/g);
		if (numbers) {
			for (let i = 0; i < numbers.length; i++) {
				result.push(parseInt(numbers[i], 10));
			}
		}
		return result;
	}

	/**
	 * Gets highest number from array
	 * @param array
	 * @returns highest number from array
	 *
	 * @example
	 * ```
	 * getHighestNumberFromArray([1,2,3,4,5,6,7,8,9,10])
	 * ```
	 */
	public getHighestNumberFromArray(array: number[]): number {
		let highestNumber = 0;
		for (let i = 0; i < array.length; i++) {
			if (array[i] > highestNumber) {
				highestNumber = array[i];
			}
		}
		return highestNumber;
	}

	/**
	 * Gets highest number from string array
	 * @param array
	 * @returns highest number from string array
	 *
	 * @example
	 * ```
	 * getHighestNumberFromStringArray(['1','2','3','4','5','6','7','8','9','10'])
	 * ```
	 */
	public getHighestNumberFromStringArray(array: string[]): number {
		const numbers = [];
		let highestNumber = 0;
		for (let i = 0; i < array.length; i++) {
			numbers.push(this.getNumbersFromString(array[i]));
		}

		for (let i = 0; i < numbers.length; i++) {
			if (numbers[i].length > 0) {
				const highestNumberFromArray = this.getHighestNumberFromArray(
					numbers[i]
				);
				if (highestNumberFromArray > highestNumber) {
					highestNumber = highestNumberFromArray;
				}
			}
		}
		return highestNumber;
	}
}
