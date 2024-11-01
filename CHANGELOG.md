# Changelog

---

- [Changelog](#changelog)
  - [\[1.9.4\] - Regular Update](#194---regular-update)
  - [\[1.9.3\] - Bug fixes](#193---bug-fixes)
  - [\[1.9.2\] - Performance improvements and bug fixes](#192---performance-improvements-and-bug-fixes)
  - [\[1.9.1\] - Fixing a password generation and email generation bug](#191---fixing-a-password-generation-and-email-generation-bug)
  - [\[1.9.0\] - Fixing a bug in the crypto API](#190---fixing-a-bug-in-the-crypto-api)
  - [\[1.8.2\] - Updating dependencies and security](#182---updating-dependencies-and-security)
  - [\[1.8.1\] - Updating dependencies](#181---updating-dependencies)
  - [\[1.8.0\] - Extendet Profile data generation](#180---extendet-profile-data-generation)
  - [\[1.7.1\] - Fixing Persons code example](#171---fixing-persons-code-example)
  - [\[1.7.0\] - Reworking Persons](#170---reworking-persons)
  - [\[1.6.3\] - Adding crypto API support](#163---adding-crypto-api-support)
  - [\[1.6.2\] - Fixing dark/light mode](#162---fixing-darklight-mode)
  - [\[1.6.1\] - Fixing word generation](#161---fixing-word-generation)
  - [\[1.6.0\] - Adding new content](#160---adding-new-content)
  - [\[1.5.0\] - Removing RSA Support](#150---removing-rsa-support)
  - [\[1.4.1-2\] - Removing unused code](#141-2---removing-unused-code)
  - [\[1.4.0\] - Implementing encryption, decryption, and Bug fixes](#140---implementing-encryption-decryption-and-bug-fixes)
  - [\[1.3.0\] - Updated Objects and Persons](#130---updated-objects-and-persons)
  - [\[1.2.1\] - BUG FIXES -\> Null pointer Exception in random controller](#121---bug-fixes---null-pointer-exception-in-random-controller)
  - [\[1.2.0\] - Profile data generation, emails, and improvements](#120---profile-data-generation-emails-and-improvements)
  - [\[1.1.0\] - Changes to File handling](#110---changes-to-file-handling)
  - [\[1.0.1\] - Bug fix README](#101---bug-fix-readme)
  - [\[1.0.0\] - Initial release](#100---initial-release)

---

## [1.9.4] - Regular Update

- Regular Update

## [1.9.3] - Bug fixes

- Fixing a bug occured when trying to compile the project in a browser environment.
- Package updates

## [1.9.2] - Performance improvements and bug fixes

- Performance improvements
  - implemented the singleton pattern for the most controllers
- Fixing a common Array length bug
  - Fixed a bug that caused the generation of an array with a length longer than the array itself.

## [1.9.1] - Fixing a password generation and email generation bug

- Fixing a bug in the password generation, that caused the generation of a wrong password.
- Fixing a bug in the email generation, that caused the generation of a wrong email.

## [1.9.0] - Fixing a bug in the crypto API

- Fixing a bug in the crypto API, that caused the generation of a wrong key.
- Addet multiple new pipelines for testing and building the project.
- Addet linting and code formating to the project using prettier and eslint.

## [1.8.2] - Updating dependencies and security

- Updating dependencies
- Fixing a security issue related to the crypto API and random password generation

## [1.8.1] - Updating dependencies

- Updating dependencies
- Removing the crypto package from the project, since it is now build in

## [1.8.0] - Extendet Profile data generation

- Adding a new extendet way to generate profile data.
- Fixing an Error related to crypto API.
- Fixing errors regarding the sanatization of strings.

## [1.7.1] - Fixing Persons code example

- Fixing Persons code example

## [1.7.0] - Reworking Persons

- Reworked the Person class to make it more flexible and easier to use.
  - Reworked the way, a Person is created with modifiers.
- Added a default export and Type Exports
  - Added a export for the Person model.
  - Added a export for the XmlElement model.
  - Added a export for the PersonProperties Type.
  - Added a export for the imageType Type.

## [1.6.3] - Adding crypto API support

- Added crypto support to the application
  - Usage of the crypto API is now implemented
    - this will be used in future versions to encrypt and decrypt the data
  - For the generation of UUIDs
  - For the generation of symmetrical keys
- Moved the tooling from JS to TS

## [1.6.2] - Fixing dark/light mode

- Fixing a bug in the dark/light determination

## [1.6.1] - Fixing word generation

- Fixing a Bug that enabled the generation of a word with a zero length.
- Fixing a Bug that caused the generation of a word list with empty words.

## [1.6.0] - Adding new content

- Added new content to the system, including a bunch of new names.
- Added a few new methods to `random` including byte, byte array and a few number types.

## [1.5.0] - Removing RSA Support

- Removal of RSA support due to incompatibility issues with major libraries. It will be considered again if there is a way to stably implement RSA encryption from Browser and Node without incompatible packages.

## [1.4.1-2] - Removing unused code

- Removing unused code, imports, and constants

## [1.4.0] - Implementing encryption, decryption, and Bug fixes

- Added encryption and decryption via XOR, AES and RSA.
- Bug fixes and improvements

## [1.3.0] - Updated Objects and Persons

- Reworked the way, objects get generated by templates
- Added a new way, Person objects can be generated, limited by properties
- Added a new way, events can be generated, using defined first and last names
- Bug fixes and improvements

## [1.2.1] - BUG FIXES -> Null pointer Exception in random controller

- Fixed Null pointer Exception in random controller
- Changed Target to ESNEXT
- Bug fixes and improvements

## [1.2.0] - Profile data generation, emails, and improvements

- Added support for random user generation and different types of personal data
- Added support for the generation of emails by template
- Bug fixes and improvements

## [1.1.0] - Changes to File handling

- Added support for Image File conversion
- Added support for general File To Blob and Blob To File conversions
- Bug fixes

## [1.0.1] - Bug fix README

- Fixing the miss typed README.md file and adding a changelog.
- Adding Missing Type checker Endpoints.

## [1.0.0] - Initial release

Setting up the environment and adding the basic endpoints.
