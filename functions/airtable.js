require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appzY7TorthrOd3qS')
  .table('products');

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: 'airtabel project setup',
  };
};
