/**
 * Email
 */
export default class Email {

	/**
	 * Subject  of email
	 */
	private subject: string;

	/**
	 * Body  of email
	 */
	private body: string;

	/**
	 * Mail  of email
	 */
	private mail: string = '';

	/**
	 * Logo url of email
	 */
	private logoUrl: string;

	/**
	 * Domain  of email
	 */
	private domain: string;

	/**
	 * Template  of email
	 */
	private template = `
		<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		<html xmlns="http://www.w3.org/1999/xhtml">
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
			<title>{{subject}}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		</head>
		<body style="margin: 0; padding: 0;">
			<table border="0" cellpadding="0" cellspacing="0" width="100%">
				<tr>
					<td style="padding: 10px 0 30px 0;">
						<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">
							<tr>
								<td align="center" bgcolor="#AB3437" style="padding: 40px 0 30px 0; color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
									<img src="{{logoUrl}}" alt="Logo" width="300" height="100" style="display: block;" />
								</td>
							</tr>
							<tr>
								<td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
									<table border="0" cellpadding="0" cellspacing="0" width="100%">
										<tr>
											<td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
												<b>{{subject}}</b>
											</td>
										</tr>
										<tr>
											<td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
												{{body}}
											</td>
										</tr>
									</table>
								</td>
							</tr>
							<tr>
								<td bgcolor="#AB3437" style="padding: 30px 30px 30px 30px;">
									<table border="0" cellpadding="0" cellspacing="0" width="100%">
										<tr>
											<td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;" width="75%">
												&reg; {{domain}}, {{year}}<br/>
											</td>
											<td align="right" width="25%">
												<table border="0" cellpadding="0" cellspacing="0">
													<tr>
														<td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">
															<a href="https://{{domain}}" style="color: #ffffff;">{{domain}}</a>
														</td>
													</tr>
												</table>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</body>
	</html>
	`;

	/**
	 * Creates an instance of email.
	 * @param subject
	 * @param body
	 * @param logoUrl
	 * @param domain
	 *
	 * @memberOf Email
	 *
	 * @example
	 *
	 * const email = new Email('Hello', 'Hello world', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', 'https://www.google.com');
	 *
	 */
	constructor(subject: string, body: string, logoUrl: string, domain: string) {
		this.subject = subject;
		this.body = body;
		this.logoUrl = logoUrl;
		this.domain = domain;

		this.generateMail();
	}

	/**
	 * Gets mail
	 * @returns mail
	 */
	public getMail(): string {
		return this.mail;
	}

	/**
	 * Generates mail
	 */
	private generateMail(): void {
		this.mail = this.template
			.replace(new RegExp('{{subject}}', 'g'), this.subject)
			.replace(new RegExp('{{body}}', 'g'), this.body)
			.replace(new RegExp('{{logoUrl}}', 'g'), this.logoUrl)
			.replace(new RegExp('{{domain}}', 'g'), this.domain)
			.replace(new RegExp('{{year}}', 'g'), new Date().getFullYear().toString());
	}
}
