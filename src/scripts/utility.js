import { Show } from "./Show.js";
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

  static delete(btns, props) {
    btns.forEach((item) => {
      item.addEventListener("click", async (e) => {
        const userDeleteID = e.target.parentElement.querySelector(".userid").innerHTML;
        try {
          await fetch(
            `https://users-f76be-default-rtdb.firebaseio.com/users/${userDeleteID}.json`,
            {
              method: "DELETE",
            }
          );
          const showInstance = new Show(props);
          showInstance.reander();
        } catch (err) {
          throw err;
        }
      });
    });
  }
}

export { Api, Element };
