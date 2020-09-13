const axios = require("axios");

const getClima = async (lat, lng) => {
  const key = "cedb51a32d586540673e641e04c3340f";

  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`
  );

  return resp.data.main.temp;
};

module.exports = {
  getClima,
};
