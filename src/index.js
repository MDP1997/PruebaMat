/*require('dotenv').config();
const req = require('express/lib/request');
const app = require('./appmateria');
require('./database');
var BASE_API_PATH = "/apimaterias/v1";
async function main() {
    await app.listen(app.get('port'));
    console.log('Server up on port: ', app.get('port'));
}

app.get(BASE_API_PATH + "/healthz", (req, res) => {
    
    res.sendStatus(200);

});


main();*/

const app = require('./appmateria');
const dbConnect = require ('../src/database.js');

var port = (process.env.PORT || 1600);

console.log("Starting API server on port: " + port);

dbConnect().then(
  () => {
    app.listen(port);
    console.log("Server UP!");
  },
  (err) => {
    console.log("Connection error: " + err);
  })