// exampleFunction.js

exports.handler = async (event, context) => {
    // Check the HTTP method
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405, // Method Not Allowed
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    // Retrieve query parameters if needed
    const { name = 'World' } = event.queryStringParameters || {};

    // Construct the response
    const responseMessage = `Hello, ${name}! This is your serverless function responding.`;

    return {
        statusCode: 200, // OK
        body: JSON.stringify({ message: responseMessage })
    };
};
