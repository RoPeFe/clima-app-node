const argv = require("./config/yargs").argv;
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const getInfo = async (dir) => {
  try {
    const cords = await lugar.getLugarLatLng(dir);
    const temp = await clima.getClima(cords.lat, cords.lng);

    return `La temperatura de ${dir} es de ${temp}º`;
  } catch (e) {
    return `No se pudo determinar la temperatura de ${dir}`;
  }
};

getInfo(argv.direccion).then(console.log).catch(console.log);
