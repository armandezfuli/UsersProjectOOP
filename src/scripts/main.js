import { Api } from "./utility.js";
import { Show } from "./Show.js";
import { AddUser } from "./AddUser.js";

const apiDetails = {
  method: "GET",
  url: "https://users-f76be-default-rtdb.firebaseio.com/users.json",
  body: null
};


const showInstance = new Show(apiDetails);
showInstance.reander();