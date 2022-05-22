import Color from './controller/color.js';
import GUID from './controller/guid.js';
import Info from './controller/info.js';

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
}

export { FriendlyHelper } ;
export { FriendlyHelper as Helper };
export { FriendlyHelper as H };