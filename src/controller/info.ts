/**
 * Info
 */
export default class Info {
    
    /**
     * Version  of info
     */
    public readonly VERSION: string = "0.0.1";

    public readonly AUTHOR: string = "Jonas Pfalzgraf | JosunLP";

    public getInfo(){
        return {
            VERSION: this.VERSION,
            AUTHOR: this.AUTHOR
        };
    }

}