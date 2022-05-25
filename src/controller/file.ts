import XmlBuilder from "./xmlBuilder.js";

/**
 * File controller
 */
export default class FileController {

    /**
     * Jsons to xml recursive
     * @param json
     * @param xml
     * @param root
     * @returns to xml recursive
     *
     * @example
     * ```
     * jsonToXmlRecursive({
     *    name: 'John',
     *   age: 30,
     *  cars: [
     *   {
     *    model: 'Buick',
     *   year: '1970'
     *  },
     * {
     *   model: 'Cadillac',
     * year: '1979'
     * }
     * ]
     * }, true)
     * ```
     */
    jsonToXmlRecursive(json: [], root: boolean): string {
		const xml = root ? new XmlBuilder('root') : new XmlBuilder('child');
		for (const key in json) {
			if (json.hasOwnProperty(key)) {
				if (typeof json[key] === 'object') {
					xml.ele(key, this.jsonToXmlRecursive(json[key], false));
				} else {
					xml.ele(key, json[key]);
				}
			}
		}
		return xml.end();
    }

    /**
     * Xmls to json recursive
     * @param xml
     * @param json
     * @returns to json recursive
     *
     * @example
	 * ```
	 * xmlToJsonRecursive(xml)
	 * ```
     */
    xmlToJsonRecursive(xml: string): JSON {
		const json: any = {};
		const parser = new DOMParser();
		const doc = parser.parseFromString(xml, 'text/xml');
		const root = doc.children[0];
		if (root.children.length > 0) {
			for (const child of root.children) {
				if (child.children.length > 0) {
					json[child.nodeName] = this.xmlToJsonRecursive(child.outerHTML);
				} else {
					json[child.nodeName] = child.innerHTML;
				}
			}
		} else {
			json[root.nodeName] = root.innerHTML;
		}
		return json;
	}

	/**
	 * Files to blob
	 * @param file
	 * @returns to blob
	 *
	 * @example
	 * ```
	 * fileToBlob(file)
	 * ```
	 */
	public async fileToBlob(file: File): Promise<Blob> {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = (e: any) => {
				resolve(e.target.result);
			};
			reader.onerror = (e: any) => {
				reject(e);
			};
			reader.readAsArrayBuffer(file);
		});
	}

	/**
	 * Blobs to file
	 * @param blob
	 * @param fileName
	 * @returns to file
	 *
	 * @example
	 * ```
	 * blobToFile(blob, 'file.txt')
	 * ```
	 */
	public blobToFile(blob: Blob, fileName: string): File {
		const file = new File([blob], fileName, { type: blob.type });
		return file;
	}

	/**
	 * Files to array buffer
	 * @param file
	 * @returns to array buffer
	 *
	 * @example
	 * ```
	 * fileToArrayBuffer(file)
	 * ```
	 */
	public fileToArrayBuffer(file: File): Promise<ArrayBuffer> {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = (e: any) => {
				resolve(e.target.result);
			};
			reader.onerror = (e: any) => {
				reject(e);
			};
			reader.readAsArrayBuffer(file);
		});
	}

	/**
	 * Arrays buffer to file
	 * @param arrayBuffer
	 * @param fileName
	 * @returns buffer to file
	 *
	 * @example
	 * ```
	 * arrayBufferToFile(arrayBuffer, 'file.txt')
	 * ```
	 */
	public arrayBufferToFile(arrayBuffer: ArrayBuffer, fileName: string): File {
		const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' });
		return this.blobToFile(blob, fileName);
	}
}
