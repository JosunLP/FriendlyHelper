/**
 * String controller
 */
export default class StringController {
    
    /**
     * Purges xmltags
     * @param str 
     * @returns xmltags 
     */
    static purgeXmltags(str: string): string {
        return str.replace(/<[^>]*>/g, '');
    }

    /**
     * Purges html
     * @param str 
     * @returns html 
     */
    static purgeHtml(str: string): string {
        return str.replace(/<[^>]*>/g, '');
    }

    /**
     * Purges sql
     * @param str 
     * @returns sql 
     */
    static purgeSql(str: string): string {
        return str.replace(/\'/g, '\'\'');
    }

    /**
     * Purges json
     * @param str 
     * @returns json 
     */
    static purgeJson(str: string): string {
        return str.replace(/\'/g, '\\\'');
    }

    /**
     * Purges dangerous characters
     * @param str 
     * @returns dangerous characters 
     */
    static purgeDangerousCharacters(str: string): string {
        return str.replace(/[\u0000-\u001F]/g, '');
    }

    /**
     * Cleans string controller
     * @param str 
     * @returns clean 
     */
    static clean(str: string): string {
        return str.replace(/\s+/g, ' ').trim();
    }

    /**
     * Purges markdown
     * @param str 
     * @returns markdown 
     */
    static purgeMarkdown(str: string): string {

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
    static purgeAll(str: string): string {
        return StringController.purgeXmltags(StringController.purgeHtml(StringController.purgeSql(StringController.purgeJson(StringController.purgeDangerousCharacters(StringController.clean(StringController.purgeMarkdown(str)))))));
    }

    /**
     * Gets string from array
     * @param array 
     * @returns string from array 
     */
    static getStringFromArray(array: string[]): string {
        return array.join(', ');
    }

    /**
     * Gets array from string
     * @param str 
     * @returns array from string 
     */
    static getArrayFromString(str: string): string[] {
        return str.split(', ');
    }

}