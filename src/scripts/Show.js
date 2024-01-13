import { Api, Element } from "./utility.js";

const apiDetails = {
  method: "GET",
  url: "https://users-f76be-default-rtdb.firebaseio.com/users.json",
};

class Show {
  static async getData(props) {
    Show.data = Object.entries(await Api.get(props));
    Show.render(Show.data);
  }

  static render(props) {
    const tbody = Element.get("tbody");
    tbody.innerHTML = "";

    for (const item of props) {
      const tr = `
          <tr>
          <td class="userid">${item[0]}</td>
          <td>${item[1].firstName}</td>
          <td>${item[1].lastName}</td>
          <td>${item[1].username}</td>
          <td class="edBtn">Edite</td>
          <td class="delBtn">Delete</td>
          </tr>`;
      tbody.insertAdjacentHTML("beforeend", tr);
    }
  }
}

Show.getData(apiDetails);

export { Show };
