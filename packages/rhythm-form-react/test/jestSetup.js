// TODO check if this is still required
// This stops annoying polyfill warnings when running tests.
import raf from './tempPolyfills';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
