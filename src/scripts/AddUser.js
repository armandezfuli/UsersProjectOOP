import { Api, Element } from "./utility.js";
import { Show } from "./Show.js";

class AddUser {
  static add() {
    const addBtn = Element.get("#submit");
    const firstName = Element.get("#firstname");
    const lastName = Element.get("#lastName");
    const username = Element.get("#username");

    addBtn.addEventListener("click", async () => {
      if (addBtn.innerHTML === "Submit") {
        console.log("addEventListener");
        const data = {
          firstName: firstName.value,
          lastName: lastName.value,
          username: username.value,
        };
        const apiDetails = {
          method: "POST",
          url: "https://users-f76be-default-rtdb.firebaseio.com/users.json",
          body: data,
        };

        await Api.post(apiDetails);

        firstName.value = "";
        lastName.value = "";
        username.value = "";
        Show.getData(apiDetails);
      }
    });
  }
}

AddUser.add();

export { AddUser };
