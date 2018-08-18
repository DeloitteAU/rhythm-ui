# Contributing

Thank you for helping. Here are a few guidelines that will help you along the way.

## Submitting a Pull Request

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. 
If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people 
don’t accidentally duplicate your effort.

If somebody claims an issue but doesn’t follow up for more than two weeks, it’s fine to take over it but you should 
still leave a comment.

### Branch Structure

All stable releases are to be tagged. At any given time, `master` represents the latest development version of the library. 
Patches or hotfix releases are prepared on an independent branch.

## Getting started

Please create a new branch or form from master, however hotfixes should be branched off the relevent tag rather than master.

### Testing the documentation site

Coming soon!

### Coding style

Please follow the coding style of the current code base. This project uses eslint, so if possible, enable linting in your 
editor. 

## Rhythm UI Architecture

Rhythm is split into multiple [packages](#https://github.com/DeloitteDigitalAPAC/rhythm-ui/tree/master/packages). 

Each package falls into one of the following categories:

- **Subsystem:** A package that contains common functionality and/or business logic used by multiple base components.
- **Base Component:** A package that contains only Sass and/or vanilla Javascript. 
- **Adapter:** A Package that encapsulates a base component for a specific framework. eg React, Vue or even jQuery.

## Sass

All of the CSS is authored using [Sass](http://sass-lang.com/). Subsystems should contain only mixins which then are
imported by the base components.

## JavaScript

All Javascript is written in ES Modules using ECMAScript.

A base component's Javascript should only contain business logic that can be reused across multiple adapters.  
**Base components should NEVER directly query or manipulate the DOM.** If a base component needs to access the `window`
object it should check that it exists first.

Each package must compile to ES5 into a `lib` folder.

## HTML

HTML templates are NOT provided. Instead, the required HTML structure's are documented.

## Publishing

This project publishes packages to npm:

Instructions for publishing new releases:

1. Check out the master branch.
1. Do not manually change version numbers in `lerna.json` or `package.json` files (they are updated programatically).
1. Update the `CHANGELOG.md` file and add the changes to the git staging area. These changes will be included in the 
automatic commit that increments the version numbers. You don't need to commit them separately.
1. Run Lerna's publish command, and pass in your One Time Password for npm as an environment variable: `NPM_CONFIG_OTP=yourtoken lerna publish`.
1. Select the new version (or enter a custom one) adhering to the principles of semantic versioning.
1. Lerna will create a new release of the packages that have been updated. It will create a new git commit/tag and publish to npm.

## License

By contributing your code to the Rhythm GitHub repository, you agree to license your contribution under the BSD-3-Clause license.