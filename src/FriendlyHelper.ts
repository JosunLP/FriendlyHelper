import Color from './controller/color.js';
import GUID from './controller/guid.js';
import Info from './controller/info.js';
import Random from './controller/random.js';
import StringController from './controller/string.js';

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
}

export { FriendlyHelper } ;
export { FriendlyHelper as Helper };
export { FriendlyHelper as H };