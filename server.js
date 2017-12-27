/**
 * Created Date: 2017/12/25
 * Author: luojinghui
 */

const express = require('express');
const { app } =  require('./server/app');
const path = require('path');

const handle = app.getRequestHandler();
const server = express();

// server.use(express.static(path.resolve(__dirname, './build/')));

app.prepare()
  .then(() => {
    server.get('/p/:id', (req, res) => {
      const actualPage = '/post';
      const queryParams = {id: req.params.id};
      app.render(req, res, actualPage, queryParams)
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1)
  });