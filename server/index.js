'use strict';
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Slider = require('@promisefinancial/pwa_react_components');


const app = express();

app.get('/', (request, response) => {
  response.send(ReactDOMServer.renderToString(<Slider />));
});
app.listen(3000, ()=>console.log('Server Running'))


