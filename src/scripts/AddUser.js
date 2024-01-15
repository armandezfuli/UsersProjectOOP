import { Api, Element } from "./utility.js";
import { Show } from "./Show.js";

class AddUser {
  constructor(props) {
    this.apiDetails = props;
    this.addBtn = Element.get("#submit");
    this.firstName = Element.get("#firstname");
    this.lastName = Element.get("#lastName");
    this.username = Element.get("#username");
  }

  postData() {
    this.addBtn.addEventListener("click", async () => {
      if (this.addBtn.innerHTML === "Submit") {
        const data = {
          firstName: this.firstName.value,
          lastName: this.lastName.value,
          username: this.username.value,
        };
        this.apiDetails.body = data;
        await Api.post(this.apiDetails);
        this.reander();
        this.firstName.value = "";
        this.lastName.value = "";
        this.username.value = "";
      }
    });
  }

  reander() {
    const showInstance = new Show(this.apiDetails);
    showInstance.reander();
  }
}

export { AddUser };
