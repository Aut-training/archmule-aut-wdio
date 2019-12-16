module.exports = {
    'env': {
        'es6': true,
        'node': true,
        'mocha': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        "browser": false,
        'expect': false,
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        "$": false,
        "$$": false
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        'import/prefer-default-export': 'off',
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    },
    "plugins": [
        "chai-friendly",
        "chai-expect"
    ]
};