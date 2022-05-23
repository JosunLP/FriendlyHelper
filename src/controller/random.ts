import LoremIpsum from './loremIpsum.js';

/**
 * Random
 */
export default class Random {
    
    /**
     * Generates string
     * @param length 
     * @returns string 
     */
    public generateString(length: number): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    /**
     * Generates number
     * @param min 
     * @param max 
     * @returns number 
     */
    public generateNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Generates boolean
     * @returns true if boolean 
     */
    public generateBoolean(): boolean {
        return Math.random() >= 0.5;
    }

    /**
     * Generates date
     * @param min 
     * @param max 
     * @returns date of date 
     */
    public generateDate(min: Date, max: Date): Date {
        const diff = max.getTime() - min.getTime();
        return new Date(min.getTime() + Math.random() * diff);
    }

    /**
     * Generates array
     * @param length 
     * @returns array 
     */
    public generateArray(length: number): string[] {
        const result = [];
        for (let i = 0; i < length; i++) {
            result.push(this.generateString(this.generateNumber(5, 10)));
        }
        return result;
    }

    /**
     * Generates enum
     * @param enumeration 
     * @returns enum 
     */
    public generateEnum(enumeration: any): any {
        const keys = Object.keys(enumeration);
        return enumeration[keys[this.generateNumber(0, keys.length - 1)]];
    }

    /**
     * Generates string array obejct
     * @param length 
     * @returns string array obejct 
     */
    public generateStringArrayObejct(length: number): any {
        const array = new Array(length);
        const keys = Object.keys(array);
        for (let i = 0; i < length; i++) {
            array.push(this.generateString(this.generateNumber(5, 10)));
        }

        const result = {
            array: array
        };
        return result;
    }

    /**
     * Generates string array
     * @param length 
     * @returns string array 
     */
    public generateStringArray(length: number): string[] {
        const array = new Array(length);
        const keys = Object.keys(array);
        for (let i = 0; i < length; i++) {
            array.push(this.generateString(this.generateNumber(5, 10)));
        }
        return array;
    }

    /**
     * Generates number array
     * @param length 
     * @returns number array 
     */
    public generateNumberArray(length: number): number[] {
        const array = new Array(length);
        const keys = Object.keys(array);
        for (let i = 0; i < length; i++) {
            array.push(this.generateNumber(1, 100));
        }
        return array;
    }

    /**
     * Generates boolean array
     * @param length 
     * @returns boolean array 
     */
    public generateBooleanArray(length: number): boolean[] {
        const array = new Array(length);
        const keys = Object.keys(array);
        for (let i = 0; i < length; i++) {
            array.push(this.generateBoolean());
        }
        return array;
    }

    /**
     * Generates date array
     * @param length 
     * @returns date array 
     */
    public generateDateArray(length: number): Date[] {
        const array = new Array(length);
        const keys = Object.keys(array);
        for (let i = 0; i < length; i++) {
            array.push(this.generateDate(new Date(2017, 1, 1), new Date(2017, 12, 31)));
        }
        return array;
    }

    /**
     * Generates enum array
     * @param length 
     * @param enumeration 
     * @returns enum array 
     */
    public generateEnumArray(length: number, enumeration: any): any[] {
        const array = new Array(length);
        const keys = Object.keys(array);
        for (let i = 0; i < length; i++) {
            array.push(this.generateEnum(enumeration));
        }
        return array;
    }

    /**
     * Generates words
     * @param length 
     * @returns words 
     */
    public generateWords(length: number): string {
        const loremIpsum = new LoremIpsum();
        const text = loremIpsum.getText(length);
        const words = text.split(' ');
        return words[this.generateNumber(0, words.length - 1)];
    }


    /**
     * Generates words array
     * @param length 
     * @returns words array 
     */
    public generateWordsArray(length: number): string[] {
        const array = new Array(length);
        for (let i = 0; i < length; i++) {
            array.push(this.generateWords(this.generateNumber(1, 10)));
        }
        return array;
    }

    /**
     * Generates text
     * @param length 
     * @returns text 
     */
    public generateText(length: number): string {
        const loremIpsum = new LoremIpsum();
        return loremIpsum.getText(length);
    }
}
