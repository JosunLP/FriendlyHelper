import Color from './controller/color.js';
import EmailController from './controller/emailController.js';
import FileController from './controller/file.js';
import General from './controller/general.js';
import GUID from './controller/guid.js';
import ImageController from './controller/image.js';
import Info from './models/info.js';
import Number from './controller/number.js';
import Random from './controller/random.js';
import StringController from './controller/string.js';
import TypeChecker from './controller/typechecker.js';
import Encryption from './controller/encryption.js';
import Person from './models/person.js';
import XmlElement from './models/xmlElement.js';
import { imageType } from './types/image.type.js';
import { PersonProperties } from './types/personProperties.type.js';


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
	public static readonly guid: GUID = new GUID();

	/**
	 * Color  of friendly helper
	 * @type {Color}
	 * @memberof FriendlyHelper
	 */
	public static readonly color: Color = new Color();

	/**
	 * Random  of friendly helper
	 * @type {Random}
	 * @memberof FriendlyHelper
	 */
	public static readonly random: Random = new Random();

	/**
	 * String  of friendly helper
	 * @type {StringController}
	 * @memberof FriendlyHelper
	 */
	public static readonly string: StringController = new StringController();

	/**
	 * Number  of friendly helper
	 * @type {Number}
	 * @memberof FriendlyHelper
	 */
	public static readonly number: number = new Number();

	/**
	 * General  of friendly helper
	 * @type {General}
	 * @memberof FriendlyHelper
	 */
	public static readonly general: General = new General();

	/**
	 * Typechecker  of friendly helper
	 * @type {TypeChecker}
	 * @memberof FriendlyHelper
	 */
	public static readonly typechecker: TypeChecker = new TypeChecker();

	/**
	 * File  of friendly helper
	 * @type {FileController}
	 * @memberof FriendlyHelper
	 */
	public static readonly file: FileController = new FileController();

	/**
	 * Image  of friendly helper
	 * @type {ImageController}
	 * @memberof FriendlyHelper
	 */
	public static readonly image: ImageController = new ImageController();

	/**
	 * Email  of friendly helper
	 * @type {EmailController}
	 * @memberof FriendlyHelper
	 */
	public static readonly email: EmailController = new EmailController();

	/**
	 * Encryption  of friendly helper
	 * @type {Encryption}
	 * @memberof FriendlyHelper
	 */
	public static readonly encryption: Encryption = new Encryption();
}

export default { FriendlyHelper };
export { FriendlyHelper as Helper };
export { FriendlyHelper as H };
export { Person };
export { PersonProperties };
export { XmlElement };
export { imageType };
