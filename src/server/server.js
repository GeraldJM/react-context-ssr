import '@babel/polyfill';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';

import Routes from '../shared/Routes';
import handleRender from './handleRender';
import App from '../shared/App';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const matchedRoutes = matchRoutes(Routes, req.url);
  const promises = matchedRoutes.map(({route, match}) => {
    return route.loadInitialData 
    ? route.loadInitialData()
    : Promise.resolve(null);
  })

  console.log(matchedRoutes);

  Promise.all(promises).then(data => {
    const content = renderToString(
      <StaticRouter location={req.path} context={{}}>
        <App data={data[0]}/>
      </StaticRouter>
    );

    res.send(handleRender(content, data[0]));
  }); 
})

app.listen(3001, () => {
  console.log('React SSR server listening on port 3001...')
});