/**
 * String controller
 */
export default class StringController {

    /**
     * Purges xmltags
     * @param str
     * @returns xmltags
     */
    public purgeXmltags(str: string): string {
        return str.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '').replace(/<\/?[a-z][^>]*>/gi, '');
    }

    /**
     * Purges html
     * @param str
     * @returns html
     */
    public purgeHtml(str: string): string {
        return str.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '').replace(/<\/?[a-z][^>]*>/gi, '');
    }

    /**
     * Purges sql
     * @param str
     * @returns sql
     */
    public purgeSql(str: string): string {
        return str.replace(/\'/g, '\'\'');
    }

    /**
     * Purges json
     * @param str
     * @returns json
     */
    public purgeJson(str: string): string {
		str = str.replace(/\\/g, '\\\\');
        return str.replace(/\'/g, '\\\'');
    }

    /**
     * Purges dangerous characters
     * @param str
     * @returns dangerous characters
     */
    public purgeDangerousCharacters(str: string): string {
        return str.replace(/[\u0000-\u001F]/g, '');
    }

    /**
     * Cleans string controller
     * @param str
     * @returns clean
     */
    public clean(str: string): string {
        return str.replace(/\s+/g, ' ').trim();
    }

    /**
     * Purges markdown
     * @param str
     * @returns markdown
     */
    public purgeMarkdown(str: string): string {

        // remove markdown header
        str = str.replace(/^#+\s+/, '');

        // remove markdown list
        str = str.replace(/^\s*\*\s*/gm, '');

        // remove markdown link
        str = str.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '$1');

        // remove markdown image
        str = str.replace(/!\[([^\]]+)\]\(([^\)]+)\)/g, '$1');

        // remove markdown code
        str = str.replace(/`([^`]+)`/g, '$1');

        // remove markdown italic
        str = str.replace(/\*([^\*]+)\*/g, '$1');

        // remove markdown bold
        str = str.replace(/\*\*([^\*]+)\*\*/g, '$1');

        // remove markdown bold italic
        str = str.replace(/\*\*\*([^\*]+)\*\*/g, '$1');

        return str;
    }

    /**
     * Purges all
     * @param str
     * @returns all
     */
    public purgeAll(str: string): string {
        return this.purgeXmltags(this.purgeHtml(this.purgeSql(this.purgeJson(this.purgeDangerousCharacters(this.clean(this.purgeMarkdown(str)))))));
    }

    /**
     * Gets string from array
     * @param array
     * @returns string from array
     */
    public getStringFromArray(array: string[]): string {
        return array.join(', ');
    }

    /**
     * Gets array from string
     * @param str
     * @returns array from string
     */
    public getArrayFromString(str: string): string[] {
        return str.split(', ');
    }

    /**
     * Capitalise string controller
     * @param str
     * @returns Capitalise
     */
    public capitalise(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    /**
     * Decapitalise string controller
     * @param str
     * @returns decapitalise
     */
    public decapitalise(str: string): string {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }

    /**
     * To uppercase
     * @param str
     * @returns uppercase
     */
    public toUppercase(str: string): string {
        return str.toUpperCase();
    }

    /**
     * To lowercase
     * @param str
     * @returns lowercase
     */
    public toLowercase(str: string): string {
        return str.toLowerCase();
    }

}
