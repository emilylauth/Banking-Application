var axios = require("axios");

var data = JSON.stringify({
  collection: "users",
  database: "myproject",
  dataSource: "Cluster0",
  projection: {
    _id: 1,
    name: String,
    email: String,
    balance: Number,
  },
});

var config = {
  method: "post",
  url: "https://data.mongodb-api.com/app/data-oszsa/endpoint/data/beta/action/findOne",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key":
      "MpSWtDp6PAp3Ve6Ytz9NjGrx3YAEUq2oHY8B5A3PwOapayB4I5CaBvcmqjTyjCrT",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

// Curl request
// curl --location --request POST 'https://data.mongodb-api.com/app/data-oszsa/endpoint/data/beta/action/findOne' \
// --header 'Content-Type: application/json' \
// --header 'Access-Control-Request-Headers: *' \
// --header 'api-key: MpSWtDp6PAp3Ve6Ytz9NjGrx3YAEUq2oHY8B5A3PwOapayB4I5CaBvcmqjTyjCrT' \
// --data-raw '{
//     "collection":"users",
//     "database":"myproject",
//     "dataSource":"Cluster0",
//     "projection": {"_id": 1}
// }'
