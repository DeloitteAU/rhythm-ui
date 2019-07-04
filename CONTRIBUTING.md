# Contributing

Thank you for helping. Here are a few guidelines that will help you along the way.

## Code of Conduct

We have adopted a [Code of Conduct](https://github.com/DeloitteDigitalAPAC/rhythm-ui/blob/master/CODE_OF_CONDUCT.md) that we expect project contributors
to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

### Branch Structure

All stable releases are to be tagged. At any given time, `rhythm-ui-mk-2` represents the latest development version of the library. 
Patches or hotfix releases are prepared on an independent branch.

If you send a pull request, please do it against the `rhythm-ui-mk-2` branch.

## Bugs

We are using [GitHub Issues](https://github.com/DeloitteDigitalAPAC/rhythm-ui/issues) to track bugs.

## Proposing a Change

If you intend to change the API, or make any large changes to the implementation, please 
[file an issue](https://github.com/DeloitteDigitalAPAC/rhythm-ui/issues/new). This lets the team 
reach an agreement on your idea before you put significant effort into it.

If you’re only fixing a bug, it’s fine to submit a pull request right away but we still recommend to file an issue detailing what 
you’re fixing. This is helpful in case we don’t accept that specific fix but want to keep track of the issue.

## Submitting a Pull Request

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. 
If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people 
don’t accidentally duplicate your effort.

If somebody claims an issue but doesn’t follow up for more than two weeks, it’s fine to take over it but you should 
still leave a comment.

**Before submitting a Pull Request**, please make sure the following is done:

- If you’ve fixed a bug or added code that should be tested, add tests!
- Make sure the Test suite passes `yarn test`
- Make sure your code lints `yarn lint`
- Make sure your code is formatted `yarn format`

## Development Workflow

After cloning Rhythm UI, run `yarn && yarn bootstrap` to fetch its dependencies. Then, you can run several commands:

- `yarn lint` checks the code style.
- `yarn clean` removes build artifacts.
- `yarn test` runs the test suite.
- `yarn build` builds the components and their documentation sites.
- `yarn start` runs the documentation site in development mode.
- `yarn start:react` runs the React Storybook site in development mode.
- `yarn start:vue` runs the Vue Storybook site in development mode.
- `yarn format` formats your code with [Prettier](https://github.com/prettier/prettier).
- `yarn generate` starts the guided componenent generator.

We recommend developing Web Components while running the documentation site with `yarn start`.

Use `yarn start:react` or `yarn start:vue` if you are developing Web Component adapters.

### Coding style

Please follow the coding style of the current code base. This project uses eslint, so if possible, enable linting in your 
editor. 

## Rhythm UI Architecture

Rhythm UI is split into multiple packages. 

Each package falls into one of the following categories:

- **Subsystem:** A package that contains common functionality and/or business logic used by multiple components.
- **Component:** A package that contains a native Web Component. We are using [Lit Element](https://lit-element.polymer-project.org/).
- **Adapter:** A Package that encapsulates a component for a specific framework. eg React, Vue or Angular.

*Suggested Reading guides*:

- https://lit-element.polymer-project.org/guide
- https://developers.google.com/web/fundamentals/web-components/
- https://medium.com/@pietmichal/how-to-test-a-web-component-b5d64d5e8bb0

### Creating new components with Plop

To boilerplate components or adapters run `yarn generate` and follow the prompts.

Read more our [guide on plop](https://github.com/DeloitteDigitalAPAC/rhythm-ui/blob/master/PLOP.md).

## Styles

Please note we only use [Static Styles](https://lit-element.polymer-project.org/guide/styles#static-styles) for their performance benifits.

All styles written should be kept to minimal skeleton rules only that allows good extensionbility.

### CSS Variables

The css variables you create should follow the 
scope-property-modifier naming pattern. All component variables should also be prefixed with `rui-<component-name>__` to prevent 
namespace conflicts

| Name | Description | Usage |
| --- | --- | -- |
| Scope | A descriptive name close to the target element's class name that indicates what element(s) this variable is targeting | Use when targeting an element of the the web component that is not the base style. If you are adding the variable to the base element, no scope is required. |
| Property | The css property that the variable is being used for. | This should always be included, match the css property name wherever possible |
| Modifier | A string describing a variable that only applies for certain states of the component | Use when you need to define a variable that only applies for certain states of the component |

Examples:

| Variable | Description |
| --- | ---|
|--rui-my-component__color | Only property is used here so we assume this will be the base text colour for element |
|--rui-my-component__icon-height| Specifies we are talking about an element with the class .icon, and refering to the height property|
|--rui-my-component__carousel-btn-color-disabled | Target the carousel button colour when the button is disabled|

Each variable decleration must be decorated with `/* @variable Some Description */` so it appears on the documentation site.

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

By contributing to Rhythm UI, you agree that your contributions will be licensed under the BSD-3-Clause license.
