const url = 'http://localhost:8888/api.php';

const array = [
  'あいう',
  'かきく',
  'ABC',
  '123'
];

const requestJson = JSON.stringify(array);

console.log('requestJson', requestJson);

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: requestJson,
})
  .then(res => res.json())
  .then(responseJson => {
    console.log('responseJson', responseJson);
  })
  .catch(console.error);
