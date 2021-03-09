const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const cors= require('cors');
// GraphQL schema to define the operations with types of data elements involved
const schema = buildSchema(`
type Query {
id: Int,
login: String,
imie: String,
nazwisko: String,
password: String
}
`);
// Resolver logic to respond to the query
const root = {
id: () => 1,
Login: () => 'Admin',
Imie: () => 'User',
Nazwisko: () => 'Admin',
password: () => '123456'
};
// Create an express server and a GraphQL endpoint
const app = express().use('*', cors());//cors included to enable CORS requests
app.use('/graphql', express_graphql({
schema: schema,
rootValue: root,
graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));