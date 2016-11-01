const express = require('express');
const TvShow = require('./TvShow');
const tvShowService = require('./TvShowService');

const tvShowRouter = express.Router();

const service = new tvShowService();

tvShowRouter.get('/',(req,res)=>{
  res.json(service.getAll());
});

module.exports = tvShowRouter;
