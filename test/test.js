import { H } from "../dist/src/FriendlyHelper.js";

console.log(H.info.VERSION);
console.log(H.guid.generate());
console.log(H.color.generateRandomHex());
console.log(H.color.generateRandomRgb());
console.log(H.color.generateRandomRgba());
console.log(H.color.generateRandomHsl());
console.log(H.color.generateRandomHsla());
console.log(H.color.determineTransparency(H.color.generateRandomHex()) + "%");
console.log(H.color.determineTransparency(H.color.rgbaToHex(H.color.generateRandomRgba())) + "%");
console.log(H.color.determineTransparency(H.color.hslToHex(H.color.generateRandomHsl())) + "%");
console.log(H.color.determineTransparency(H.color.hslaToHex(H.color.generateRandomHsla())) + "%");
console.log(H.color.determineTransparency(H.color.rgbToHex(H.color.generateRandomRgb())) + "%");
console.log(H.string.capitalise(H.random.generateString(10)));
console.log(H.string.decapitalise(H.random.generateString(10)));
console.log(H.string.toUppercase(H.random.generateString(10)));
console.log(H.string.toLowercase(H.random.generateString(10)));
console.log(H.random.generateText(H.random.generateNumber(10, 200)));
console.log(H.random.generateObject());
console.log(H.random.generateByte());
console.log(H.random.generateFloat());
console.log(H.random.generateNumber(10, 200));
console.log(H.random.generateObjectArray(H.random.generateNumber(10, 40)));
console.log(H.random.generateObjectArrayByJsonTemplate(H.random.generateNumber(10, 40), '{"name": "{{fullName}}", "age": "{{age}}", "id": "{{guid}}"}'));
console.log(H.random.generatePersonArray(H.random.generateNumber(10, 40)));
console.log(H.email.generateEmailByTemplate('TEST', '<p>TEST</p>', 'https://www.google.de/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png', 'google.de'));
console.log(H.random.generatePerson(["id", "fullName", "email"]));
console.log(H.random.generatePersonArray(H.random.generateNumber(10, 40), ["id", "fullName", "email"]));
let text = JSON.stringify(H.random.generatePerson());
const key = H.guid.generate() + H.guid.generate() + H.guid.generate() + H.guid.generate();
console.log(text = H.encryption.encryptSymmetric(text, key));
console.log(JSON.parse(H.encryption.decryptSymmetric(text, key)));
console.log(key);
console.log(H.encryption.generateSymetricKey());
text = H.random.generateText(H.random.generateNumber(10, 200));
console.log(text);

let color1 = H.color.generateRandomHex();
let color2 = H.color.generateRandomHex();

console.log(color1);
console.log(H.color.isDark(color1));

console.log(color2);
console.log(H.color.isDark(color2));
