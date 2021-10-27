// require your server and launch it here
const server = require("./api/server");

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT} in ${process.env.NODE_ENV} mode`
  );
});
