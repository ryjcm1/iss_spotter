const { nextISSTimesForMyLocation} = require('./iss');


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  // console.log(passTimes);

  readableISSTimes(passTimes);
});


const readableISSTimes = (times) =>{
  for (let time of times) {
    let duration = time.duration;
    let specificTime = new Date(0);
    specificTime.setUTCSeconds(time.risetime);

    console.log(`Next pass at ${specificTime} for ${duration}.`);
  }
};


module.exports = { readableISSTimes };