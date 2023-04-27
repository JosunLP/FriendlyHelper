import Color from "./controller/color.js";
import EmailController from "./controller/emailController.js";
import FileController from "./controller/file.js";
import General from "./controller/general.js";
import GUID from "./controller/guid.js";
import ImageController from "./controller/image.js";
import Info from "./models/info.js";
import Random from "./controller/random.js";
import StringController from "./controller/string.js";
import TypeChecker from "./controller/typechecker.js";
import Encryption from "./controller/encryption.js";
import Person from "./models/person.js";
import XmlElement from "./models/xmlElement.js";
import { imageType } from "./types/image.type.js";
import { PersonProperties } from "./types/personProperties.type.js";
import NumberController from "./controller/numberController.js";

/**
 * Friendly helper
 *
 * @description A Typescript-based standard library with handy little methods like GUID generation, retrieving numbers from strings, and a bunch of other standard methods that usually need to be rewritten for each new project.
 */
class FriendlyHelper {
	/**
	 * Info  of friendly helper
	 * @type {Info}
	 * @memberof FriendlyHelper
	 * @example
	 * ```
	 * FriendlyHelper.info.getInfo()
	 * ```
	 */
	public static readonly info: Info = new Info();

	/**
	 * Guid  of friendly helper
	 * @type {GUID}
	 * @memberof FriendlyHelper
	 * @example
	 * ```
	 * FriendlyHelper.guid.generate()
	 * ```
	 */
	public static readonly guid: GUID = GUID.getInstance();

	/**
	 * Color  of friendly helper
	 * @type {Color}
	 * @memberof FriendlyHelper
	 */
	public static readonly color: Color = Color.getInstance();

	/**
	 * Random  of friendly helper
	 * @type {Random}
	 * @memberof FriendlyHelper
	 */
	public static readonly random: Random = Random.getInstance();

	/**
	 * String  of friendly helper
	 * @type {StringController}
	 * @memberof FriendlyHelper
	 */
	public static readonly string: StringController =
		StringController.getInstance();

	/**
	 * Number  of friendly helper
	 * @type {NumberController}
	 * @memberof FriendlyHelper
	 */
	public static readonly number: NumberController =
		NumberController.getInstance();

	/**
	 * General  of friendly helper
	 * @type {General}
	 * @memberof FriendlyHelper
	 */
	public static readonly general: General = General.getInstance();

	/**
	 * Typechecker  of friendly helper
	 * @type {TypeChecker}
	 * @memberof FriendlyHelper
	 */
	public static readonly typechecker: TypeChecker = TypeChecker.getInstance();

	/**
	 * File  of friendly helper
	 * @type {FileController}
	 * @memberof FriendlyHelper
	 */
	public static readonly file: FileController = FileController.getInstance();

	/**
	 * Image  of friendly helper
	 * @type {ImageController}
	 * @memberof FriendlyHelper
	 */
	public static readonly image: ImageController = ImageController.getInstance();

	/**
	 * Email  of friendly helper
	 * @type {EmailController}
	 * @memberof FriendlyHelper
	 */
	public static readonly email: EmailController = EmailController.getInstance();

	/**
	 * Encryption  of friendly helper
	 * @type {Encryption}
	 * @memberof FriendlyHelper
	 */
	public static readonly encryption: Encryption = Encryption.getInstance();
}

export default FriendlyHelper;
export { FriendlyHelper };
export { FriendlyHelper as Helper };
export { FriendlyHelper as H };
export { FriendlyHelper as FH };
export { Person };
export { PersonProperties };
export { XmlElement };
export { imageType };
