const { nextISSTimesForMyLocation} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// const ip = "97.108.232.219";

// fetchCoordsByIP(ip, (error, coordinates) =>{
//   if(error){
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log(`It worked! Returned Cordinates: ${coordinates}`)
// })

// const coords = {
//   latitude: 43.8678,
//   longitude: -79.442
// };

// fetchISSFlyOverTimes(coords, (error, response)=>{
//   if (error) {
//     console.log(`it didn't work! ${error}`);
//     return;
//   }

//   console.log(`It worked! Returned response: ${response} `);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});