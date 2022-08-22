import FileController from "./file.js";
import { imageType } from "../types/image.type.js";

/**
 * Image controller
 */
export default class ImageController {
	/**
	 * Base64s to blob
	 * @param base64
	 * @returns to blob
	 *
	 * @example
	 * ```
	 * base64ToBlob(base64)
	 * ```
	 */
	public async base64ToBlob(base64: string): Promise<Blob> {
		const binary = atob(base64.split(",")[1]);
		const array = [];
		for (let i = 0; i < binary.length; i++) {
			array.push(binary.charCodeAt(i));
		}
		const blob = new Blob([new Uint8Array(array)], { type: "image/png" });
		return blob;
	}

	/**
	 * Base64s to file
	 * @param base64
	 * @param fileName
	 * @returns to file
	 *
	 * @example
	 * ```
	 * base64ToFile(base64, 'file.png')
	 * ```
	 */
	public async base64ToFile(base64: string, fileName: string): Promise<File> {
		const blob = await this.base64ToBlob(base64);
		const file = new FileController().blobToFile(blob, fileName);
		return file;
	}

	/**
	 * Datas urlto blob
	 * @param dataURL
	 * @returns urlto blob
	 *
	 * @example
	 * ```
	 * dataURLtoBlob(dataURL)
	 * ```
	 */
	public async dataURLtoBlob(dataURL: string): Promise<Blob> {
		const binary = atob(dataURL.split(",")[1]);
		const array = [];
		for (let i = 0; i < binary.length; i++) {
			array.push(binary.charCodeAt(i));
		}
		const blob = new Blob([new Uint8Array(array)], { type: "image/png" });
		return blob;
	}

	/**
	 * Images file to png
	 * @param file
	 * @returns file to png
	 *
	 * @example
	 * ```
	 * imageFileToPng(file)
	 * ```
	 *
	 * @waring
	 * ```
	 * can only be used in browser
	 * ```
	 */
	public imageFileConverter(file: File, imageType: imageType): Promise<Blob> {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = (e: any) => {
				const img = new Image();
				img.onload = () => {
					const canvas = document.createElement("canvas");
					canvas.width = img.width;
					canvas.height = img.height;
					const ctx = <CanvasRenderingContext2D>(
						canvas.getContext("2d")
					);
					ctx.drawImage(img, 0, 0);
					const dataURL = canvas.toDataURL(imageType);
					const blob = this.dataURLtoBlob(dataURL);
					resolve(blob);
				};
				img.src = e.target.result;
			};
			reader.onerror = (e: any) => {
				reject(e);
			};
			reader.readAsDataURL(file);
		});
	}
}
