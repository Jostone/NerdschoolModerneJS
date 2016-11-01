const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('dev'));

app.listen(port,() => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/tvshow/',(request,response)=>response.send('All tv-shows'));

app.get('/tvshow/:id',(request,response)=>response.send(`A show with id = ${request.params.id}`));

app.post('/tvshow/',(request,response)=>response.send('Show was created'));

app.delete('/tvshow/:id',(request,response)=>response.send(`Show ${request.params.id} was deleted.`));

app.put('/tvshow/:id',(request,response)=>response.send(`Show ${request.params.id} was updated.`));
