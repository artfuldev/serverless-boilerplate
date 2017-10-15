module.exports = {
	"extends": "airbnb-base",
	"plugins": [],
	"rules": {
		"indent": ["error", "tab", {"MemberExpression": 1}],
		"no-tabs": "off",
		"new-cap": ["error", { "newIsCap": false }],

		// doesn't work in node v4 :(
		// "strict": "off",
		// "prefer-rest-params": "off",
		// "react/require-extension" : "off",
		"import/no-extraneous-dependencies" : "off"
	},
	"env": {
		"es6": true,
		"jest": true,
	}
};
