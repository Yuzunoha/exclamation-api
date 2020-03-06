const url = "http://yuzuntu.com:10080/bikkuri.php";

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "text": "あいう"
  })
})
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);
