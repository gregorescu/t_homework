const express = require('express');
const app = express();
const fs = require("fs");
var cors = require('cors')
const os = require('os');
//https://www.npmjs.com/package/multer
const multer  = require('multer');
const upload = multer({ dest: os.tmpdir() });

app.options('*', cors()) // include before other routes

//Session and authorization for api calls should be added, this is just a rough and fast nodejs server
//Also a mongo db server, azure or sql server should be added, for now, just files
/*function auth(req, res, next) {
  if (!req.session.user) {
  }
}
*/

app.get('/users', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      res.end( data );
   });
});

app.post('/login', async (req, res) => {
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {

    console.log(req.body);

    const user = req.body.email;
    //Should do encryption, no time fo' 'dat
    const password = req.body.password;

    let userData = JSON.parse(data);
    for(let userObjectKey in userData) {
      let userObject = userData[userObjectKey];

      if(userObject.email === user && userObject.password === password) {
        res.status(201).send(userObject);
        return;
      }
    }

    res.status(404).send("User not found!");
  });
});

//Check should be made if file exists
app.post("/uploadFile", upload.single('file'), async function(req, res) {
  const file = req.file;

  //Since req.session.user is not set-up we will just mock as if user 1 is logged in
  // let userId = req.session.userId;
  userId = "1";


  // fs.wri
  let filesFile =  __dirname + "/" + "files.json";

  fs.readFile(filesFile, 'utf8', function (err, data) {
    let jsonData= JSON.parse(data);

    let userFileData = jsonData[userId];
    if(!userFileData) {
      jsonData[userId] = [];
      userFileData = jsonData[userId];
    }

    let fileInfo = {
      "filename": file.name,
      "uploadDate": (new Date()).toISOString(),
      "size": file.size,
      "link": `${os.tmpdir()}/${file.name}`
    };
    userFileData.push(fileInfo);

    fs.writeFile(filesFile, JSON.stringify(userFileData), (err) => {
      if (err)
        res.status(500).send("Cannot upload");
      else {
        res.status(200).send(fileInfo)
      }
    });
  });

  res.sendStatus(200);
});

var server = app.listen(8080, function () {
   var port = server.address().port;
   console.log(`Quick and dirty RestApi server started at port ${port}`);
})
