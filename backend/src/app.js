const apolloServer = require('./graphql');
const express = require('express');
const sequelize = require('../models').sequelize;
const generateJWTSecret = require('./utils/generateSecret');

const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const budgetRoutes = require('./routes/budgetRoutes');
const predictionRoutes = require('./routes/predictionRoutes');


const app = express();

const JWT_SECRET = process.env.JWT_SECRET || generateJWTSecret();

app.set('jwtSecret', JWT_SECRET);

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/budgets', budgetRoutes);
app.use('/api/predictions', predictionRoutes);

apolloServer.start().then(() =>{
  apolloServer.applyMiddleware({app});
  sequelize.sync({ force: false}).then(() =>{
    console.log('Database synced');
    app.listen({ port: 4000 }, () => 
        console.log(`listening on port${apolloServer.graphqlPath}`)
    );
  });
});



