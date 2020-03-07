module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/essential',
		'@vue/standard'
	],
	rules: {
		'no-floating-decimal': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		'no-tabs': 'off',
		'space-before-function-paren': 'off',
		'generator-star-spacing': 'off'
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
