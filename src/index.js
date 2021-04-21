import "./styles.css";

const api = `https://randomuser.me/api`;
const addUser = document.getElementById("userAdd-btn");
const mainApp = document.getElementById("app");

const appState = [];

addUser.addEventListener("click", async () => {
  const userData = await fetch(api, {
    method: "GET"
  });

  const userDataJson = await userData.json(); //it is also asynchronous operation and a aSYNC operation
  const user = userDataJson.results[0];

  appState.push(user);
  console.log(appState);
  domRender(appState);
});

const domRender = (stateArr) => {
  stateArr.forEach((userObj) => {
    const userEl = document.createElement("div");
    userEl.innerHTML = `<div>
    ${userObj.name.title} ${userObj.name.first} ${userObj.name.last}
    </div>`;

    mainApp.appendChild(userEl);
  });
};
