require("express")()
  .get("/", function (_request, response) {
    response.send(process.env.MOTD ?? "");
  })
  .listen(80);
