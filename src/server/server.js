import '@babel/polyfill';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import theme from '../shared/theme';

import Routes from '../shared/Routes';
import handleRender from './handleRender';
import App from '../shared/App';



const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const sheets = new ServerStyleSheets();

  const promises = Routes.map((route) => {
    return route.loadInitialData 
    ? route.loadInitialData()
    : Promise.resolve(null);
  })

  Promise.all(promises).then(data => {
    const allData = {
      users: data[1]
    }

    const content = renderToString(
      sheets.collect(
        <ThemeProvider theme={theme}>
          <StaticRouter location={req.path} context={{}}>
            <App data={allData}/>
          </StaticRouter>
        </ThemeProvider>
      )
    );

    const css = sheets.toString();

    res.send(handleRender(content, css, allData));
  }); 
})

app.listen(3001, () => {
  console.log('React SSR server listening on port 3001...')
});