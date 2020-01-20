// Express Server
// FIX ME :(
  const express = require('express');
  const path = require('path');
  const router = require('./router');
  const bodyParser = require('body-parser');
  const cors = require('cors');

  const server = express();
  const port = 3000;

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({extended: true}));
  server.use(cors());
  
  server.use('/', express.static(path.join(__dirname + '/../client/dist')));
  server.use('/name', router);


  server.listen(port, () => console.log('Connected to port: 3000'))