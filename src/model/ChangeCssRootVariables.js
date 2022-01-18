
export function changeCssRootVariables(theme) {
	const root = document.querySelector(':root');

	const components = [
		'font-color',
		'body-bg',
		'components-bg',
		'btn-bg'
	];

	components.forEach(component => {
		root.style.setProperty(
			`--${component}-default`,
			`var(--${component}-${theme})`
		);
	});
}