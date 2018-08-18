// Credit to the Reactstrap project for this gem, https://github.com/reactstrap/reactstrap/blob/master/src/utils.js
// Maps class names to a CSS module.
const mapToCssModules = (className, cssModule) => {
	if (!cssModule) {
		return className;
	}

	return className.split(' ').map(c => cssModule[c] || c).join(' ');
};

export default mapToCssModules;
