export default class ApodService {
  static async getApod(date) {
    try {
      let response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${process.env.NASA_KEY}`);
      let responseJson = await response.json();
  
      if( !response.ok){
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }
      return responseJson;

    } catch (error) {
      return error;
    }
  }
}