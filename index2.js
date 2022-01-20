const { nextISSTimesForMyLocation } = require('./iss_promised');
const { readableISSTimes } = require("./index");

nextISSTimesForMyLocation()
  .then((data) => {
    // console.log(data)
    readableISSTimes(data.respones);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });


  