import Color from './controller/color.js';
import General from './controller/general.js';
import GUID from './controller/guid.js';
import Info from './controller/info.js';
import Number from './controller/number.js';
import Random from './controller/random.js';
import StringController from './controller/string.js';
import TypeChecker from './controller/typechecker.js';

/**
 * Friendly helper
 */
class FriendlyHelper {

    /**
     * Info  of friendly helper
     */
    public static readonly info = new Info();

    /**
     * Guid  of friendly helper
     */
    public static readonly guid = new GUID();

    /**
     * Color  of friendly helper
     */
    public static readonly color = new Color();

    /**
     * Random  of friendly helper
     */
    public static readonly random = new Random();

    /**
     * String  of friendly helper
     */
    public static readonly string = new StringController();

    /**
     * Number  of friendly helper
     */
    public static readonly number = new Number();

    /**
     * General  of friendly helper
     */
    public static readonly general = new General();

	/**
	 * Typechecker  of friendly helper
	 */
	public static readonly typechecker = new TypeChecker();
}

export { FriendlyHelper } ;
export { FriendlyHelper as Helper };
export { FriendlyHelper as H };
