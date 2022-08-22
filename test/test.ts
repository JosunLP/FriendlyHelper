import { H } from "../dist/src/FriendlyHelper.js";
import * as fs from "fs";
import { PersonProperties } from "../dist/src/FriendlyHelper.js";
import { CustomPersonPropertie } from "../dist/src/types/customPersonPropertie.type.js";

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

function output(func: any) {
	const logFileName = logFolder + Math.floor(Date.now() / 1000) + ".log";
	console.log(func);
	if (typeof func === "object" && func !== null) {
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
output(
	H.color.determineTransparency(
		H.color.rgbaToHex(H.color.generateRandomRgba())
	) + "%"
);
output(
	H.color.determineTransparency(
		H.color.hslToHex(H.color.generateRandomHsl())
	) + "%"
);
output(
	H.color.determineTransparency(
		H.color.hslaToHex(H.color.generateRandomHsla())
	) + "%"
);
output(
	H.color.determineTransparency(
		H.color.rgbToHex(H.color.generateRandomRgb())
	) + "%"
);
output(H.string.capitalise(H.random.generateString(10)));
output(H.string.decapitalise(H.random.generateString(10)));
output(H.string.toUppercase(H.random.generateString(10)));
output(H.string.toLowercase(H.random.generateString(10)));
output(H.random.generateText(H.random.generateNumber(10, 200)));
output(H.random.generateObject());
output(H.random.generateByte());
output(H.random.generateFloat());
output(H.random.generateNumber(10, 200));
output(H.random.generateObjectArray(H.random.generateNumber(10, 40)));
output(
	H.random.generateObjectArrayByJsonTemplate(
		H.random.generateNumber(10, 40),
		'{"name": "{{fullName}}", "age": "{{age}}", "id": "{{guid}}"}'
	)
);
output(H.random.generatePersonArray(H.random.generateNumber(10, 40)));
output(
	H.email.generateEmailByTemplate(
		"TEST",
		"<p>TEST</p>",
		"https://www.google.de/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png",
		"google.de"
	)
);
output(
	H.random.generatePerson(<PersonProperties>{
		id: true,
		fullName: true,
		lastName: true,
		email: false,
	})
);
output(H.random.generatePerson());
output(
	H.random.generatePersonArray(H.random.generateNumber(10, 40), <
		PersonProperties
	>{ fullName: true, email: true })
);
let text = JSON.stringify(H.random.generatePerson());
const key =
	H.guid.generate() +
	H.guid.generate() +
	H.guid.generate() +
	H.guid.generate();
output((text = H.encryption.encryptSymmetric(text, key)));
output(JSON.parse(H.encryption.decryptSymmetric(text, key)));
output(key);
output(await H.encryption.generateSymetricKey());
text = H.random.generateText(H.random.generateNumber(10, 200));
output(text);

const color1 = H.color.generateRandomHex();
const color2 = H.color.generateRandomHex();

output(color1);
output(H.color.isDark(color1));

output(color2);
output(H.color.isDark(color2));

output(
	H.random.generatePerson(
		<PersonProperties>{
			id: true,
			fullName: true,
			lastName: true,
			email: false,
		},
		[
			<CustomPersonPropertie>{ key: "rofl", value: "numeric", length: 40000 },
			<CustomPersonPropertie>{ key: "lol", value: "string", length: 10 },
			<CustomPersonPropertie>{ key: "change", value: "currency", length: 10 },
			<CustomPersonPropertie>{ key: "growth", value: "percentage", length: 10 },
		]
	)
);
