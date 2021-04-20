import "./styles.css";

const api = `https://randomuser.me/api`;
const addUser = document.getElementById("userAdd-btn");
const mainApp = document.getElementById("app");

addUser.addEventListener("click", async () => {
  const userData = await fetch(api, {
    method: "GET"
  });

  const userDataJson = await userData.json(); //it is also asynchronous operation and a aSYNC operation
  // console.log(userDataJson);
  const user = userDataJson.results[0];
  const userEl = document.createElement("div");
  userEl.innerHTML = `<div>
    ${user.name.title} ${user.name.first} ${user.name.last}
  </div>`;

  mainApp.appendChild(userEl);
});
