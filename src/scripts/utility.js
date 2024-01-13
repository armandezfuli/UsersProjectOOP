class Element {
  static get = (e) => document.querySelector(e);
  static gets = (e) => document.querySelectorAll(e);
}

class Api {
  static async get(props) {
    try {
      const res = await fetch(props.url);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async post(props) {
    try {
      await fetch(props.url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(props.body),
      });
    } catch (err) {
      throw err;
    }
  }

  static put(props) {
    console.log(props.url, props.method);
  }

  static delete(props) {
    console.log(props.url, props.method);
  }
}

export { Api, Element };
