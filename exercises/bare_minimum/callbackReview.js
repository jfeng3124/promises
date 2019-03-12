/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  fs.readFile(filePath, (err, results) => {
    if (err) {
      cb(err);
    } else {
      cb(null, results.toString('utf8').split('\n').shift());
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  request.get(url, (err, response) => {
    if (err) {
      cb(err);
    } else {
      cb(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
