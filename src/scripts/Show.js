import { Api, Element } from "./utility.js";
import { EditUser } from "./Edite.js";

class Show {
  constructor(props) {
    this.apiDetails = props
      ? props
      : {
          url: "https://users-f76be-default-rtdb.firebaseio.com/users.json",
          body: null,
        };
    this.tbody = Element.get("tbody");
  }

  async reander() {
    this.tbody.innerHTML = "";
    try {
      const data = Object.entries(await Api.get(this.apiDetails));
      for (const item of data) {
        const tr = `
          <tr>
            <td class="userid">${item[0]}</td>
            <td>${item[1].firstName}</td>
            <td>${item[1].lastName}</td>
            <td>${item[1].username}</td>
            <td class="edBtn">Edit</td>
            <td class="delBtn">Delete</td>
          </tr>`;
        this.tbody.insertAdjacentHTML("beforeend", tr);
      }

      let deleteBtns = Element.gets(".delBtn");
      Api.delete(deleteBtns, this.apiDetails);

      let editeBtns = Element.gets(".edBtn");

      const editeUser = new EditUser();
      editeUser.getUserID(editeBtns);
    } catch (error) {
      console.error(error);
    }
  }
}

export { Show };
