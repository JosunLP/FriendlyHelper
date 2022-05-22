import { H } from "../dist/FriendlyHelper.js";

console.log(H.info.VERSION);
console.log(H.guid.generate());
console.log(H.color.generateRandomHex());
console.log(H.color.generateRandomRgb());
console.log(H.color.generateRandomRgba());
console.log(H.color.generateRandomHsl());
console.log(H.color.generateRandomHsla());
console.log(H.color.determineTransparency(H.color.generateRandomHex()) + "%");
