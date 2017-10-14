const hello = async (event, context, cb) => {
	const response = {
		statusCode: 200,
		body: JSON.stringify({
			message: 'Hello, Serverless World!',
		}),
	};

	return cb(null, response);
};

export default hello;
