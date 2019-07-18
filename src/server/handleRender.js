import serialize from 'serialize-javascript';

export default (html, contextValue) => {
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${html}</div>
        <script src="bundle.js" defer></script>
        <script>window.CONTEXT_VALUE = ${serialize(contextValue)}</script>
      </body>
    </html>
  `;
}