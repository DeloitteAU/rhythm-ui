# Rhythm UI

## rhythm-form-react

Form components for Rhythm UI.

## Installation

For the moment the library can be installed directly from the repository:

```npm install @deloitte-digital-au/rhythm-form-react```

## Usage

### Using a component

To use a component, just import it:

```import Text from '@deloitte-digital-au/rhythm-form-react/lib/controls/Text';```

Refer to the component's doc page for a guide to using a specific component.

### Using a component's sass file

Each component also has a sass file that you can import and use however you like.

To import, just add `/style` to end the component's import path.

```@import "@deloitte-digital-au/rhythm-form-react/lib/controls/Text/style";```

The sass files use a set of default variables which you can customise. 

For now, look at `src/utils/defaults.scss` for the list of variables.

### Using CSS modules

If you're using CSS modules in your app, you can still use them here with a bit of effort.

This approach was inspired by the awesome [reactstrap](https://github.com/reactstrap/reactstrap).

Each component can take a `cssModule` prop, which expects a CSS module object. You can use this prop to create a new component with your styles baked in.

You can structure this any way you like, but as an example, in your project:

```js
import Text from '@deloitte-digital-au/rhythm-form-react/lib/controls/Text';

// This could be any css file you want
import textStyles from 'my/text/styles';

export default (props) => <Text cssModules={textStyles} {...props} />

// Now you can use that component elsewhere
import Text from '../forms/styled/Text';
```

It's important to note that the components inside the <Text /> component won't be passed the CSS module. This means that things like the <Label /> won't be styled.

You will need to individually hook up each component from this library with it's own CSS module.
