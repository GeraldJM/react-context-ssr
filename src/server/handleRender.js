import serialize from 'serialize-javascript';

export default (html, css, contextValue) => {
  return `
    <html>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <style id="jss-server-side">${css}</style>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="bundle.js" defer></script>
        <script>window.CONTEXT_VALUE = ${serialize(contextValue)}</script>
      </body>
    </html>
  `;
}