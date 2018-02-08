const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path) {
	if (!path || typeof path !== 'string')
		throw "You must provide a path as a string";

	try {
		const data = await fs.readFileAsync(path, "utf8");
		return data;
	} catch (error) {
		throw error;
	}
}

async function getFileAsJSON(path) {
	if (!path || typeof path !== 'string')
		throw "You must provide a path as a string";

	try {
		const data = await fs.readFileAsync(path, "utf8");
		const asObject = await JSON.parse(data);
		return asObject;
	} catch (error) {
		throw error;
	}
}

async function saveStringToFile(path, text) {
	if (!path || typeof path !== 'string')
		throw "You must provide a path as a string";
	
	if (typeof text !== 'string')
		throw "You must provide text to write as a string";

	try {
		await fs.writeFileAsync(path, text);
		return true;
	} catch (error) {
		throw error;
	}
}

async function saveJSONToFile(path, obj) {
	if (!path || typeof path !== 'string')
		throw "You must provide a path as a string";
	
	if (!obj || typeof obj !== 'object')
		throw "You must provide and object to write";

	try {
		const text = JSON.stringify(obj);
		await fs.writeFileAsync(path, text);
		return true;
	} catch (error) {
		throw error;
	}
}

module.exports = {
	getFileAsString,
	getFileAsJSON,
	saveStringToFile,
	saveJSONToFile
};