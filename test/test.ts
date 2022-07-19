import { H } from "../dist/src/FriendlyHelper.js";
import * as fs from 'fs';

const logFolder = ".logs/";

function printToLog(value: any, logFileName: string) {
	if (!fs.existsSync(logFolder)) {
		fs.mkdirSync(logFolder);
	}

	if (!fs.existsSync(logFileName)) {
		fs.writeFileSync(logFileName, "");
	}
	fs.appendFileSync(logFileName, value + "\n");
}

function output(func: any, isObject?: boolean) {
	const logFileName = logFolder + Math.floor(Date.now() / 1000) + ".log";
	console.log(func);
	if (isObject) {
		printToLog(JSON.stringify(func), logFileName);
		return;
	}
	printToLog(func, logFileName);
}

output(H.info.getInfo());
output(H.guid.generate());
output(H.color.generateRandomHex());
output(H.color.generateRandomRgb());
output(H.color.generateRandomRgba());
output(H.color.generateRandomHsl());
output(H.color.generateRandomHsla());
output(H.color.determineTransparency(H.color.generateRandomHex()) + "%");
output(H.color.determineTransparency(H.color.rgbaToHex(H.color.generateRandomRgba())) + "%");
output(H.color.determineTransparency(H.color.hslToHex(H.color.generateRandomHsl())) + "%");
output(H.color.determineTransparency(H.color.hslaToHex(H.color.generateRandomHsla())) + "%");
output(H.color.determineTransparency(H.color.rgbToHex(H.color.generateRandomRgb())) + "%");
output(H.string.capitalise(H.random.generateString(10)));
output(H.string.decapitalise(H.random.generateString(10)));
output(H.string.toUppercase(H.random.generateString(10)));
output(H.string.toLowercase(H.random.generateString(10)));
output(H.random.generateText(H.random.generateNumber(10, 200)));
output(H.random.generateObject(), true);
output(H.random.generateByte());
output(H.random.generateFloat());
output(H.random.generateNumber(10, 200));
output(H.random.generateObjectArray(H.random.generateNumber(10, 40)), true);
output(H.random.generateObjectArrayByJsonTemplate(H.random.generateNumber(10, 40), '{"name": "{{fullName}}", "age": "{{age}}", "id": "{{guid}}"}'), true);
output(H.random.generatePersonArray(H.random.generateNumber(10, 40)), true);
output(H.email.generateEmailByTemplate('TEST', '<p>TEST</p>', 'https://www.google.de/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png', 'google.de'));
output(H.random.generatePerson(["id", "fullName", "email"]), true);
output(H.random.generatePersonArray(H.random.generateNumber(10, 40), ["id", "fullName", "email"]), true);
let text = JSON.stringify(H.random.generatePerson());
const key = H.guid.generate() + H.guid.generate() + H.guid.generate() + H.guid.generate();
output(text = H.encryption.encryptSymmetric(text, key));
output(JSON.parse(H.encryption.decryptSymmetric(text, key)), true);
output(key);
output(H.encryption.generateSymetricKey());
text = H.random.generateText(H.random.generateNumber(10, 200));
output(text);

let color1 = H.color.generateRandomHex();
let color2 = H.color.generateRandomHex();

output(color1);
output(H.color.isDark(color1));

output(color2);
output(H.color.isDark(color2));
