const axios = require("axios");

const getLugarLatLng = async (dir) => {
  const econedUrl = encodeURI(dir);
  const key = "ede5385ae00d4a1193feda88aa6a0647";

  const instance = axios.create({
    baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${econedUrl}&key=${key}`,
  });

  const resp = await instance.get();

  if (resp.data.results.length === 0) {
    throw new Error(`No hay resultados para ${dir}`);
  }

  const data = resp.data.results[0];
  const direccion = dir;
  const lat = data.geometry.lat;
  const lng = data.geometry.lng;

  return {
    direccion,
    lat,
    lng,
  };
};

module.exports = {
  getLugarLatLng,
};
