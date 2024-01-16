import { Show } from "./Show.js";
import { AddUser } from "./AddUser.js";
import { EditUser } from "./Edite.js";

const apiDetails = {
  url: "https://users-f76be-default-rtdb.firebaseio.com/users.json",
  body: null,
};

const showInstance = new Show(apiDetails);
showInstance.reander();

const post = new AddUser(apiDetails);
post.postData();
