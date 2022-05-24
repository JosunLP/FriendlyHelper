/**
 * General
 */
export default class General {

    /**
     * Pauses execution
     * @param ms
     * @returns
     *
     * @example
     * ```
     * pause(1000)
     * ```
     */
    public sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
