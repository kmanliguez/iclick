const express = require("express");
const app = express();

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const port = process.env.PORT || 5000;

const swaggerOptions ={
    swaggerDefinition: {
        info:{
            title: 'User API',
            description: 'User API Information',
            contact:{
                name: "Developer"
            },
            servers: ['http://localhost:5000']
        }
    },
    apis:["app.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// routes
/**
 * @swagger
 *  /users:
 *  get:
 *      description: Use to request all users
 *      responses:
 *          '200': 
 *              description: A successful response
 */
app.get("/users",(req, res) => {
    res.status(200).send("user results");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});