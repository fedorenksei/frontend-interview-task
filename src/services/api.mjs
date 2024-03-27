class Api {
  constructor() {
    this.baseUrl = "https://jsonplaceholder.typicode.com/";
  }

  /**
   * @returns {{userId: string; id: string; title: string; body: string} | null}
   */
  async getPosts() {
    try {
      const response = await fetch(new URL("posts", this.baseUrl));
      if (!response.ok) throw Error(`Response status is ${response.status}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export const api = new Api();
