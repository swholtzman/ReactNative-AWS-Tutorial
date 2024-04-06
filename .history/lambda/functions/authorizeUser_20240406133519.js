
// authenticateUser.js

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const { email, password } = JSON.parse(event.body);
    const params = {
        TableName: process.env.USER_TABLE,
        KeyConditionExpression: "email = :email",
        ExpressionAttributeValues: {
            ":email": email,
        },
    };

    try {
        const result = await dynamoDb.query(params).promise();
        if (result.Items.length === 0) {
            return { statusCode: 404, body: JSON.stringify({ error: "User not found" }) };
        }

        const user = result.Items[0];
        if (user.password === password) {
            // Password matches, authentication successful
            // @TODO: Implement token-based authentication for security
            return { statusCode: 200, body: JSON.stringify({ message: "Authentication successful" }) };
        } else {
            // Password does not match
            return { statusCode: 401, body: JSON.stringify({ error: "Authentication failed" }) };
        }
    } catch (error) {
        console.error("Error authenticating user:", error);
        return { statusCode: 500, body: JSON.stringify({ error: "Could not authenticate user" }) };
    }
};
