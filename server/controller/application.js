'use strict';
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./generated/app');


app.get('/', (request, response) => {
  response.send(ReactDOMServer.renderToString(<App />));
});

app.listen(3000, () => console.log('Server running'));