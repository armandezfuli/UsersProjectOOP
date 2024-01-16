import { Api, Element } from "./utility.js";
import { Show } from "./Show.js";

class EditUser {
  constructor() {
    this.apiDetails = {
      url: "https://users-f76be-default-rtdb.firebaseio.com/users.json",
      body: null,
    };
    this.id = null;
    this.createUserBtn = Element.get("#submit");
    this.title = Element.get("#title");
    this.userFirstName = Element.get("#firstname");
    this.userLastName = Element.get("#lastName");
    this.userUsername = Element.get("#username");
  }

  getUserID(btns) {
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.id = e.target.parentElement.querySelector(".userid").innerHTML;
        this.getPreiousData();
      });
    });
  }

  async getPreiousData() {
    try {
      const data = Object.entries(await Api.get(this.apiDetails));
      const user = data.find((item) => item[0] === this.id);

      this.userFirstName.value = user[1].firstName;
      this.userLastName.value = user[1].lastName;
      this.userUsername.value = user[1].username;
      this.createUserBtn.innerHTML = "Edit";
      this.title.innerHTML = "Edit User";
      this.rander();
    } catch (err) {
      throw err;
    }
  }

  async editUserData() {
    this.editData = {
      firstName: this.userFirstName.value,
      lastName: this.userLastName.value,
      username: this.userUsername.value,
    };
    this.apiDetails = {
      url: `https://users-f76be-default-rtdb.firebaseio.com/users/${this.id}.json`,
      body: this.editData,
    };
    try {
      await Api.put(this.apiDetails);

      const showInstance = new Show();
      showInstance.reander();
    } catch (err) {
      throw err;
    }
  }

  rander() {
    if (this.createUserBtn.innerHTML == "Edit") {
      this.createUserBtn.addEventListener("click", () => {
        this.editUserData();
        this.userFirstName.value = "";
        this.userLastName.value = "";
        this.userUsername.value = "";
        this.createUserBtn.innerHTML = "Submit";
        this.title.innerHTML = "Add User";
      });
    }
  }
}

export { EditUser };
