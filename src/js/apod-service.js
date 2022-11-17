export default class ApodService {
  static getApod(date) {
    return fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${process.env.NASA_KEY}`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        return error;
      });
  }
}