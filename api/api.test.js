const https = require('https');
const axios = require('axios').create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});
const API_URL = 'https:localhost:5000/api';

test('rooms', async () => {
    await axios.get(`${API_URL}/rooms?floor=${1}`)
    .then(resp => resp.data)
    .then(resp => {
      console.log(resp[0]);
      expect(resp[1]).toEqual(2);
    });
});

test('retrieve', async () => {
    await axios.get(`${API_URL}/remove?floor=${2}&type=${1}`)
    .then(resp => resp.data)
    .then(resp => {
      console.log(resp[0]);
      expect(resp[0].status).toEqual(false);
    });
});

test('data', async () => {
    await axios.get(`${API_URL}/data?floor=${1}&type=${1}&name=${"g"}`)
    .then(resp => resp.data)
    .then(resp => {
      console.log(resp);
      expect(resp[1]).toEqual(10);
    });
});

test('lighting', async () => {
    await axios.get(`${API_URL}/lighting`)
    .then(resp => resp.data)
    .then(resp => {
      console.log(resp);
      expect(resp[0].name).toEqual("Ligh3");
    });
});

test('security', async () => {
    await axios.get(`${API_URL}/security`)
    .then(resp => resp.data)
    .then(resp => {
      console.log(resp);
      expect(resp[0].name).toEqual("Sec1");
    });
});

test('aircond', async () => {
    await axios.get(`${API_URL}/aircond`)
    .then(resp => resp.data)
    .then(resp => {
      console.log(resp);
      expect(resp[0].name).toEqual("AC1");
    });
});

test('lighting', async () => {
    await axios.post(`${API_URL}/lighting?name=${"Lighttt"}&floor=${2}&room=${7}`)
    .then(resp => resp.data)
    .then(resp => {
      console.log(resp);
      expect(resp).toEqual("successfully added device and data");
    });
}, 10000);

test('security', async () => {
    await axios.post(`${API_URL}/security?name=${"Sectt"}&floor=${1}&room=${3}`)
    .then(resp => resp.data)
    .then(resp => {
      console.log(resp);
      expect(resp).toEqual("successfully added device and data");
    });
});

test('aircond', async () => {
    await axios.post(`${API_URL}/aircond?name=${"AC"}&floor=${2}&room=${8}`)
    .then(resp => resp.data)
    .then(resp => {
      console.log(resp);
      expect(resp).toEqual("successfully added device and data");
    });
});

