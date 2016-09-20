import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Slider from './generated/app';
// import {Slider} from '@promisefinancial/pwa_react_components';

const app = express();

app.get('/', (req,res)=>{
  res.send(ReactDOMServer.renderToString(<Slider />));
});


app.listen(3000, ()=>console.log('Server Running'))


