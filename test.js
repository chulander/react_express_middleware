'use strict';

const Slider = require('@promisesfinancial/pwa_react_components').Slider;
const React = require('react');
const ReactDOMServer = require('react-dom/server');


const getSlider = function getSlider(req, res, next) {
  res.send(ReactDOMServer.renderToString(<Slider />))
}

module.exports = getSlider;