const service = 'serverless-boilerplate';

module.exports = {
	service,

	stage: 'test',
	region: '',

	domain: {
		basePath: '',
		domainName: `${service}.foo.com`,
	},

	app: {
		host: '0.0.0.0',
		port: 3000,
	},

	foo: 'bar',

	env: '',

	db: {
		local: {
			region: 'localhost',
			port: 8000,
		},
		tables: {
			table: `${service}-users`,
		},
	},
};
