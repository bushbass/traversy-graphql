const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');

const app = express();

app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql:true
}));

app.listen(process.env.PORT || 4000, () => {
    console.log(`server running on port ${process.env.PORT}`)
})