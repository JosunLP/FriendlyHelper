import Email from "../models/email.js";

/**
 * Email controller
 */
export default class EmailController {
	/**
	 * Generates email by template
	 * @param subject
	 * @param body
	 * @param logoUrl
	 * @param domain
	 * @returns email by template
	 *
	 * @example
	 *
	 * 		const subject = 'Hello';
	 *
	 * 		const body = '<h1>Hello</h1>';
	 *
	 * 		const logoUrl = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
	 *
	 * 		const domain = 'google.com';
	 *
	 * 		const result = generateEmailByTemplate(subject, body, logoUrl, domain);
	 *
	 * 		console.log(result);
	 *
	 */
	public generateEmailByTemplate(
		subject: string,
		body: string,
		logoUrl: string,
		domain: string
	): string {
		return new Email(subject, body, logoUrl, domain).getMail();
	}
}
