/*
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require("request");

const fetchMyIP = (callback) => {
  const url = "https://api.ipify.org?format=json";
  // use request to fetch IP address from JSON API
  request.get(url, (err, res, body) => {
    if (err) {
      callback(err, null);
      return;
    }

    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);
    // console.log(data);

    callback(null, data.ip);

  });
};

const fetchCoordsByIP = (ip, callback) =>{
  const coordURL = `https://api.freegeoip.app/json/${ip}?apikey=bb3c31b0-79a2-11ec-856b-a77ce4bd7927`;


  request.get(coordURL, (err, res, body)=>{
    if (err) {
      callback(err, null);
      return;
    }

    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);
    // console.log(data);

    callback(null, data);

  });

};

const fetchISSFlyOverTimes = function(coords, callback) {
  flyOverURL = `https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=&${coords.longitude}`;

  request.get(flyOverURL, (err, res, body)=>{
    if (err) {
      callback(err, null);
      return;
    }

    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);
    // console.log(data.response);

    callback(null, data.response);

  });

};


const nextISSTimesForMyLocation = (callback) => {
  // empty for now
  fetchMyIP((err1, ip)=>{
    if(err1){
      console.log("error1: ", err1)
      return;
    }

    fetchCoordsByIP(ip, (err2, coord)=>{
      if(err2){
        console.log("error2: ", err2)
        return
      }

      fetchISSFlyOverTimes(coord, (err3, data)=>{
        if(err3){
          console.log("error3: ",err3)
          return
        }
        callback(null, data)
      })
    })
  })
}


module.exports = { nextISSTimesForMyLocation};