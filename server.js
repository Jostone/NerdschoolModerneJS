const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const tvShowRouter = require('./tvshow/tvShowRouter');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyparser.json());

app.listen(port,() => {
  console.log(`Example app listening on port ${port}`);
});

app.use('/tvshow',tvShowRouter);

//app.get('/tvshow/',(request,response)=>response.send('All tv-shows'));

//app.get('/tvshow/:id',(request,response)=>response.send(`A show with id = ${request.params.id}`));

//app.post('/tvshow/',(request,response)=>response.send('Show was created'));

//app.delete('/tvshow/:id',(request,response)=>response.send(`Show ${request.params.id} was deleted.`));

//app.put('/tvshow/:id',(request,response)=>response.send(`Show ${request.params.id} was updated.`));
