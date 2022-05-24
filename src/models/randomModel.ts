import GUID from "../controller/guid.js";
import Random from "../controller/random.js";

/**
 * Random model
 */
export default class RandomModel {

    private readonly random = new Random();

    /**
     * Id  of random model
     */
    public readonly ID = new GUID().generate();

    public readonly TEXT = this.random.generateText(this.random.generateNumber(100, 1000));

    public readonly NUMBER = this.random.generateNumber(0, 1000);

    public readonly BOOLEAN = this.random.generateBoolean();

    public readonly DATE = this.random.generateDate(new Date(), new Date());

    public readonly ARRAY = this.random.generateArray(this.random.generateNumber(1, 100));
}
