// functions/createUser.js

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const { v4: uuidv4 } = require('uuid');

exports.handler = async (event) => {
    console.log("Table Name: ", process.env.USER_TABLE); // Log the table name
    const data = JSON.parse(event.body);
    console.log("Data to put: ", data); // Log the data being put
    const params = {
        TableName: process.env.USER_TABLE,
        Item: {
            id: uuidv4(),
            email: data.email,
            password: data.password,
            given_name: data.given_name,
            family_name: data.family_name,
        },
    };

    try {
        const result = await dynamoDb.put(params).promise();
        console.log("Put result: ", result); // Log success result
        return { statusCode: 201, body: JSON.stringify({ message: "User created successfully" }) };
    } catch (error) {
        console.error("Error creating user:", error); // Make sure to log any errors
        return { statusCode: 500, body: JSON.stringify({ error: "Could not create user" }) };
    }
};
