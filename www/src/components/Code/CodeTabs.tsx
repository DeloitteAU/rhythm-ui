import * as styles from './Code.css';

const CodeTabs = () => {
	return (
		<div css={styles.codeTabs}>
			<span>Html</span>
			<a href="https://rui-react-545559.netlify.com/" target="_blank">React</a>
			<a href="https://rui-vue-545559.netlify.com" target="_blank">Vue</a>
		</div>
	);
};

export default CodeTabs;