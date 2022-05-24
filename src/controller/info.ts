/**
 * Info
 */
export default class Info {

    /**
     * Version  of info
     */
    public readonly VERSION: string = "0.0.1";

    /**
     * Author  of info
     */
    public readonly AUTHOR: string = "Jonas Pfalzgraf | JosunLP";

    /**
     * Gets info
     * @returns
     *
     * @example
     * ```
     * getInfo()
     * ```
     */
    public getInfo(){
        return {
            VERSION: this.VERSION,
            AUTHOR: this.AUTHOR
        };
    }

}
