const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

const PORT = process.env.PORT || 8080; // or any port you want
server.listen(PORT, () => {
  console.log(`🚀 JSON Server running at http://localhost:${PORT}`);
});
