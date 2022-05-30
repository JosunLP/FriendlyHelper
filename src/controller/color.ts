/**
 * Color
 */
export default class Color {

	/**
	 * Generates random
	 * @returns random
	 */
	public generateRandomHex(): string {
		return '#' + Math.floor(Math.random() * 16777215).toString(16);
	}

	/**
	 * Generates random rgb
	 * @returns random rgb
	 */
	public generateRandomRgb(): string {
		return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
	}

	/**
	 * Generates random rgba
	 * @returns random rgba
	 */
	public generateRandomRgba(): string {
		let r = Math.floor(Math.random() * 255);
		let g = Math.floor(Math.random() * 255);
		let b = Math.floor(Math.random() * 255);
		let a = Math.random();
		return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	}

	/**
	 * Generates random cmyk
	 * @returns random cmyk
	 */
	public generateRandomCmyk(): string {
		let c = Math.floor(Math.random() * 100);
		let m = Math.floor(Math.random() * 100);
		let y = Math.floor(Math.random() * 100);
		let k = Math.floor(Math.random() * 100);
		return 'cmyk(' + c + ',' + m + ',' + y + ',' + k + ')';
	}

	/**
	 * Generates random hsl
	 * @returns random hsl
	 */
	public generateRandomHsl(): string {
		let h = Math.floor(Math.random() * 360);
		let s = Math.floor(Math.random() * 100);
		let l = Math.floor(Math.random() * 100);
		return 'hsl(' + h + ',' + s + '%,' + l + '%)';
	}

	/**
	 * Generates random hsla
	 * @returns random hsla
	 */
	public generateRandomHsla(): string {
		let h = Math.floor(Math.random() * 360);
		let s = Math.floor(Math.random() * 100);
		let l = Math.floor(Math.random() * 100);
		let a = Math.random();
		return 'hsla(' + h + ',' + s + '%,' + l + '%,' + a + ')';
	}

	/**
	 * Rgbs to hex
	 * @param rgb
	 * @returns to hex
	 */
	public rgbToHex(rgb: string): string {
		let result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i.exec(rgb);
		return result ? '#' +
			('0' + parseInt(result[1], 10).toString(16)).slice(-2) +
			('0' + parseInt(result[2], 10).toString(16)).slice(-2) +
			('0' + parseInt(result[3], 10).toString(16)).slice(-2) : '';
	}

	/**
	 * Rgbas to hex
	 * @param rgba
	 * @returns to hex
	 *
	 * @example
	 * ```
	 * rgbaToHex('rgba(255, 255, 255, 1)')
	 * // => '#ffffff'
	 * ```
	 */
	public rgbaToHex(rgba: string): string {
		let result = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d*(?:\.\d+)?)\)$/i.exec(rgba);
		return result ? '#' +
			('0' + parseInt(result[1], 10).toString(16)).slice(-2) +
			('0' + parseInt(result[2], 10).toString(16)).slice(-2) +
			('0' + parseInt(result[3], 10).toString(16)).slice(-2) : '';
	}

	/**
	 * Hsls to hex
	 * @param hsl
	 * @returns to hex
	 *
	 * @example
	 * ```
	 * hslToHex('hsl(0, 100%, 50%)')
	 * // => '#ffffff'
	 * ```
	 */
	public hslToHex(hsl: string): string {
		let result = /^hsl\((\d+),\s*(\d+%),\s*(\d+%)\)$/i.exec(hsl);
		return result ? '#' +
			('0' + parseInt(result[1], 10).toString(16)).slice(-2) +
			('0' + parseInt(result[2], 10).toString(16)).slice(-2) +
			('0' + parseInt(result[3], 10).toString(16)).slice(-2) : '';
	}

	/**
	 * Hslas to hex
	 * @param hsla
	 * @returns to hex
	 *
	 * @example
	 * ```
	 * hslaToHex('hsla(0, 100%, 50%, 1)')
	 * // => '#ffffff'
	 * ```
	 */
	public hslaToHex(hsla: string): string {
		let result = /^hsla\((\d+),\s*(\d+%),\s*(\d+%),\s*(\d*(?:\.\d+)?)\)$/i.exec(hsla);
		return result ? '#' +
			('0' + parseInt(result[1], 10).toString(16)).slice(-2) +
			('0' + parseInt(result[2], 10).toString(16)).slice(-2) +
			('0' + parseInt(result[3], 10).toString(16)).slice(-2) : '';
	}

	/**
	 * Hexs to rgb
	 * @param hex
	 * @returns
	 *
	 * @example
	 * ```
	 * hexToRgb('#ffffff')
	 * // => 'rgb(255, 255, 255)'
	 * ```
	 */
	public hexToRgb(hex: string): { r: number, g: number, b: number } | null {
		let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}

	/**
	 * Determines whether color is dark
	 * @param hex
	 * @returns true if dark
	 *
	 * @example
	 * ```
	 * isDark('#ffffff')
	 * // => false
	 * ```
	 */
	public isDark(hex: string): boolean {
		let c: { r: number, g: number, b: number };
		try {
			c = <{ r: number, g: number, b: number }>this.hexToRgb(hex);
		} catch (e) {
			console.error(e);
			return false;
		}
		let r = c.r;
		let g = c.g;
		let b = c.b;
		let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
		return (yiq >= 128);
	}

	/**
	 * Determines whether color is light
	 * @param hex
	 * @returns true if light
	 *
	 * @example
	 * ```
	 * isLight('#ffffff')
	 * // => true
	 * ```
	 */
	public isLight(hex: string): boolean {
		return !this.isDark(hex);
	}

	/**
	 * Rgbs to cmyk
	 * @param r
	 * @param g
	 * @param b
	 * @returns to cmyk
	 *
	 * @example
	 * ```
	 * rgbToCmyk(255, 255, 255)
	 * // => { c: 0, m: 0, y: 0, k: 0 }
	 * ```
	 */
	public rgbToCmyk(r: number, g: number, b: number): { c: number, m: number, y: number, k: number } {
		r = r / 255;
		g = g / 255;
		b = b / 255;
		let k = 1 - Math.max(r, g, b);
		let c = (1 - r - k) / (1 - k);
		let m = (1 - g - k) / (1 - k);
		let y = (1 - b - k) / (1 - k);
		return { c: c, m: m, y: y, k: k };
	}

	/**
	 * Rgbas to cmyk
	 * @param r
	 * @param g
	 * @param b
	 * @param a
	 * @returns to cmyk
	 *
	 * @example
	 * ```
	 * rgbaToCmyk(255, 255, 255, 1)
	 * // => { c: 0, m: 0, y: 0, k: 0 }
	 * ```
	 */
	public rgbaToCmyk(r: number, g: number, b: number, a: number): { c: number, m: number, y: number, k: number } {
		r = r / 255;
		g = g / 255;
		b = b / 255;
		let k = 1 - Math.max(r, g, b);
		let c = (1 - r - k) / (1 - k);
		let m = (1 - g - k) / (1 - k);
		let y = (1 - b - k) / (1 - k);
		return { c: c, m: m, y: y, k: k };
	}

	/**
	 * Cmyks to rgb
	 * @param c
	 * @param m
	 * @param y
	 * @param k
	 * @returns to rgb
	 *
	 * @example
	 * ```
	 * cmykToRgb(0, 0, 0, 1)
	 * // => { r: 255, g: 255, b: 255 }
	 * ```
	 */
	public cmykToRgb(c: number, m: number, y: number, k: number): { r: number, g: number, b: number } {
		let r = (1 - c) * (1 - k);
		let g = (1 - m) * (1 - k);
		let b = (1 - y) * (1 - k);
		return { r: r * 255, g: g * 255, b: b * 255 };
	}

	/**
	 * Determines transparency
	 * @param hex
	 * @returns transparency
	 *
	 * @example
	 * ```
	 * determineTransparency('#ffffff')
	 * // => 1
	 * ```
	 */
	public determineTransparency(hex: string): number {
		let c: { r: number, g: number, b: number };
		try {
			c = <{ r: number, g: number, b: number }>this.hexToRgb(hex);
		} catch (e) {
			return 0;
		}
		if (c === null
			|| c === undefined
			|| c.r === undefined
			|| c.g === undefined
			|| c.b === undefined
			|| c.r === null
			|| c.g === null
			|| c.b === null) {
			return 0;
		}
		let r = c.r;
		let g = c.g;
		let b = c.b;
		let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
		return (yiq >= 128) ? 0 : 1;
	}

	/**
	 * Determines whether color is transparent
	 * @param hex
	 * @returns true if transparent
	 *
	 * @memberOf ColorService
	 *
	 * @example
	 * ```
	 * isTransparent('#ffffff')
	 * // => false
	 * ```
	 */
	public isTransparent(hex: string): boolean {
		return this.determineTransparency(hex) === 1;
	}

	/**
	 * Determines whether color is opaque
	 * @param hex
	 * @returns true if opaque
	 *
	 * @memberOf ColorService
	 *
	 * @example
	 * ```
	 * isOpaque('#ffffff')
	 * // => true
	 * ```
	 */
	public isOpaque(hex: string): boolean {
		return this.determineTransparency(hex) === 0;
	}

	/**
	 * Determines whether color is valid
	 * @param hex
	 * @returns true if valid
	 *
	 * @memberOf ColorService
	 *
	 * @example
	 *
	 * isValid('#ffffff'); // true
	 * isValid('#fffffff'); // false
	 * isValid('#ffffffff'); // false
	 */
	public hexIsValid(hex: string): boolean {
		return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hex);
	}

}
