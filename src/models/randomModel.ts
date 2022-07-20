import GUID from "../controller/guid.js";
import Random from "../controller/random.js";

/**
 * Random model
 *
 * @description - Random model
 */
export default class RandomModel {

	private readonly random = new Random();

	/**
	 * Id  of random model
	 */
	public readonly ID = new GUID().generate();

	/**
	 * Text  of random model
	 */
	public readonly TEXT = this.random.generateText(this.random.generateNumber(100, 1000));

	/**
	 * Number  of random model
	 */
	public readonly NUMBER = this.random.generateNumber(0, 1000);

	/**
	 * Boolean  of random model
	 */
	public readonly BOOLEAN = this.random.generateBoolean();

	/**
	 * Date  of random model
	 */
	public readonly DATE = this.random.generateDate(new Date(), new Date());

	/**
	 * Array  of random model
	 */
	public readonly ARRAY = this.random.generateArray(this.random.generateNumber(1, 100));
}
