const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('/dev/ttyACM0', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

parser.on('data', function (data) {
  console.log(`Received value: ${data}`);
});

setInterval(() => {
  const sensorValue = Math.floor(Math.random() * 1023);
  console.log(`Sent value: ${sensorValue}`);
}, 1000);


