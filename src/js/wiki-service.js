export default class WikiService {
  static async getWiki(day, month) {
    try {
      let response = await fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/selected/${month}/${day}`);
      let responseJson = await response.json();
  
      if (!response.ok) {
        const errorMsg = `${response.status} ${response.statusText}`;
        throw new Error(errorMsg);
      }
      return responseJson;
    }
    catch(error) {
      return error;
    }
  }
}
