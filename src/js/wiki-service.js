export default class WikiService {
  static getWiki(day, month) {
    return fetch(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/selected/${month}/${day}`)
      .then(response => {
        if (!response.ok) {
          const errorMsg = `${response.status} ${response.statusText}`;
          throw new Error(errorMsg);
        } else {
          return response.json();
        }
      })
      .catch(error => error);
  }
}