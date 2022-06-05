import { readFile, writeFile } from 'fs';

let packageFile = "./package.json";
let targetFile = "./src/models/info.ts";

readFile(packageFile, 'utf8', (err, data) => {
	if (err) {
		console.error(err)
		return
	}
	const pkg = JSON.parse(data)

	readFile(targetFile, 'utf8', (err, target) => {
		if (err) {
			console.error(err)
			return
		}

		target = replaceLine(target, 'readonly VERSION', pkg.version);
		target = replaceLine(target, 'readonly LICENSE', pkg.license);
		target = replaceLine(target, 'readonly AUTHOR', pkg.author.name);
		target = replaceLine(target, 'readonly REPOSITORY', pkg.repository.url);
		target = replaceLine(target, 'readonly HOMEPAGE', pkg.homepage);

		writeFile(targetFile, target, 'utf8', function (err) {
			if (err) return console.log(err);
		});
	})
})

function replaceLine(target, searchString, pkg) {
	let re = new RegExp('^.*' + searchString + '.*$', 'gm');
	target = target.replace(re, '	private ' + searchString + ': string = "' + pkg + '"');
	return target;
}