export default class WikiService {
  static getWiki(day, month) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/selected/${month}/${day}`;
      
      request.addEventListener('loadend', function() {
        let response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve(response);
        } else {
          reject([this, response, day, month]);
        }
      });

      request.open("GET", url, true);
      request.send();
    });
  }
}