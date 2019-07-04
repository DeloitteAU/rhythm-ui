import {configure} from '@storybook/vue';

// automatically import all files ending in *.stories.tsx
const req = require.context('../', true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
