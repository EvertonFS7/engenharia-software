const express = require('express');
const routes = require('./routes');
const sequelize = require('./database/connection');

const app = express();

app.use(express.json());
app.use(routes);

sequelize.sync()
  .then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
