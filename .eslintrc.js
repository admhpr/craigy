module.exports = {
	'env': {
		'node': true,
		'mocha': true,
		'commonjs': true,
		'es6': true
	},
	'extends': 'eslint:recommended',
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaVersion': 2018
	},
	'rules': {
		"no-console": "off",
		'indent': "off",
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'double'
		],
		'semi': [
			'error',
			'always'
		],
		"plugins": ["prettier"],
		"rules": {
			"prettier/prettier": "error"
		}
	}
};