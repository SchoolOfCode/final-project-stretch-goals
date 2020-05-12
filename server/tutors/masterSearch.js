"use strict";

const AWS = require("aws-sdk"); // eslint-disable-line import/no-extraneous-dependencies
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.masterSearch = (event, context, callback) => {
  console.log("***************************");
  console.log("lowPrice", event.pathParameters.lowPrice);
  console.log("***************************");
  console.log("highPrice", event.pathParameters.highPrice);
  console.log("***************************");
  console.log("subjects", event.pathParameters.subjects);
  console.log("***************************");
  console.log("experience", event.pathParameters.experience);

  const SEARCH_KEYWORD = {
    subjects: event.pathParameters.subjects,
    experience: event.pathParameters.experience,
    lowPrice: event.pathParameters.lowPrice,
    highPrice: event.pathParameters.highPrice,
  };

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    FilterExpression:
      // "(#price <= :highPrice and #price >= :lowPrice) AND contains(#subjects, :subjects) AND (#experience > :experience)",
      "(#price <= :highPrice and #price >= :lowPrice) AND contains(#subjects, :subjects) AND (#experience > :experience)",
    ExpressionAttributeNames: {
      "#price": "price",
      "#subjects": "subjects",
      "#experience": "experience",
    },
    ExpressionAttributeValues: {
      ":subjects": SEARCH_KEYWORD.subjects,
      ":lowPrice": Number(SEARCH_KEYWORD.lowPrice),
      ":highPrice": Number(SEARCH_KEYWORD.highPrice),
      ":experience": Number(SEARCH_KEYWORD.experience),
    },
  };
  // fetch all todos from the database
  dynamoDb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { "Content-Type": "text/plain" },
        body: "Couldn't fetch the tutors.",
      });
      return;
    }
    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items),
      headers: {
        "Content-Type": "application/json",
        "x-custom-header": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
    callback(null, response);
  });
};
