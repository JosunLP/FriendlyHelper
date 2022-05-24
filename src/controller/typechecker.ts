/**
 * Type checker
 */
export default class TypeChecker {

    /**
     * Determines whether string is
     * @param value
     * @returns true if string
     *
     * @example
     * ```
     * isString("")
     * ```
     */
    public isString(value: any): boolean {
        return typeof value === 'string';
    }

    /**
     * Determines whether number is
     * @param value
     * @returns true if number
     *
     * @example
     * ```
     * isNumber(1)
     * ```
     */
    public isNumber(value: any): boolean {
        return typeof value === 'number';
    }

    /**
     * Determines whether boolean is
     * @param value
     * @returns true if boolean
     *
     * @example
     * ```
     * isBoolean(true)
     * ```
     */
    public isBoolean(value: any): boolean {
        return typeof value === 'boolean';
    }

    /**
     * Determines whether array is
     * @param value
     * @returns true if array
     *
     * @example
     * ```
     * isArray([])
     * ```
     */
    public isArray(value: any): boolean {
        return Array.isArray(value);
    }

    /**
     * Determines whether object is
     * @param value
     * @returns true if object
     *
     * @example
     * ```
     * isObject({})
     * ```
     */
    public isObject(value: any): boolean {
        return typeof value === 'object';
    }

    /**
     * Determines whether function is
     * @param value
     * @returns true if function #
     *
     * @example
     * ```
     * isFunction(() => {})
     * ```
     */
    public isFunction(value: any): boolean {
        return typeof value === 'function';
    }

    /**
     * Determines whether undefined is
     * @param value
     * @returns true if undefined
     *
     * @example
     * ```
     * isUndefined(undefined)
     * ```
     */
    public isUndefined(value: any): boolean {
        return typeof value === 'undefined';
    }

    /**
     * Determines whether null is
     * @param value
     * @returns true if null
     *
     * @example
     * ```
     * isNull(null)
     * ```
     */
    public isNull(value: any): boolean {
        return value === null;
    }

    /**
     * Determines whether null or undefined is
     * @param value
     * @returns true if null or undefined
     *
     * @example
     * ```
     * isNullOrUndefined(null)
     * ```
     */
    public isNullOrUndefined(value: any): boolean {
        return this.isNull(value) || this.isUndefined(value);
    }

    /**
     * Determines whether null or undefined or empty is
     * @param value
     * @returns true if null or undefined or empty
     *
     * @example
     * ```
     * isNullOrUndefinedOrEmpty(null)
     * ```
     */
    public isNullOrUndefinedOrEmpty(value: any): boolean {
        return this.isNullOrUndefined(value) || this.isEmpty(value);
    }

    /**
     * Determines whether empty is
     * @param value
     * @returns true if empty
     *
     * @example
     * ```
     * isEmpty("")
     * ```
     */
    public isEmpty(value: any): boolean {
        return this.isNullOrUndefined(value) || this.isArray(value) && value.length === 0;
    }

    /**
     * Determines whether not empty is
     * @param value
     * @returns true if not empty
     *
     * @example
     * ```
     * isNotEmpty("")
     * ```
     */
    public isNotEmpty(value: any): boolean {
        return !this.isEmpty(value);
    }

    /**
     * Determines whether enum is
     * @param value
     * @returns true if enum
     *
     * @example
     * ```
     * isEnum(Enum.A)
     * ```
     */
    public isEnum(value: any): boolean {
        return this.isString(value) || this.isNumber(value);
    }

    /**
     * Determines whether date is
     * @param value
     * @returns true if date
     *
     * @example
     * ```
     * isDate(new Date())
     * ```
     */
    public isDate(value: any): boolean {
        return this.isObject(value) && value instanceof Date;
    }
}
