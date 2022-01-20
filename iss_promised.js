const request = require('request-promise-native');

const fetchMyIP = () =>{
  return request("https://api.ipify.org?format=json");
};

const fetchCoordsByIP = (data) => {
  const ip = JSON.parse(data).ip;
  return request(`https://api.freegeoip.app/json/${ip}?apikey=bb3c31b0-79a2-11ec-856b-a77ce4bd7927`);
};

const fetchISSFlyOverTimes = data =>{
  const coordinates = JSON.parse(data);
  const lat = coordinates.latitude;
  const lon = coordinates.longitude;

  return request(`https://iss-pass.herokuapp.com/json/?lat=${lat}&lon=&${lon}`);
};

const nextISSTimesForMyLocation  = () => {
  
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const {response} = JSON.parse(data);
      return response;
    });
};


module.exports = { nextISSTimesForMyLocation};

