const chalk = require("chalk");
const http = require("http");
const host = "localhost";
const port = "8000";

const requestListener = (req, res) => {
  const response = {
    name: "Carlos Diaz",
    message: "Estamos aprendiendo con paciencia y con amor",
  };
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(response));
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(
    chalk.green(`Este servido está corriendo en http://${host}:${port}/`)
  );
});
