import * as express from 'express';
const app = express();
import * as cors from 'cors';
const port = process.env.PORT || 3000;




function startWebServer() {

  app.get('/', cors(), (req, res) => {
    res.send("Go away");
  });


  app.listen(port, () => {
    console.log(`Web server running on port ${port}...`);
  });

  return app;
}




export {
  startWebServer
}