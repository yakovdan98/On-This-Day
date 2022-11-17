export default class ApodService {
  static getApod(date) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${process.env.NASA_KEY}`;
      
      request.addEventListener('loadend', function() {
        let response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve(response);
        } else {
          reject([this, response]);
        }
      });

      request.open("GET", url, true);
      request.send();
    });
  }
}