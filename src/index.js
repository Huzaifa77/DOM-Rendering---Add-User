import "./styles.css";

const api = `https://randomuser.me/api`;
const addUser = document.getElementById("userAdd-btn");
const mainApp = document.getElementById("app");
const userList = document.getElementById("user-list");
const searchInput = document.getElementById("search");

const appState = [];

addUser.addEventListener("click", async () => {
  const userData = await fetch(api, {
    method: "GET"
  });

  const userDataJson = await userData.json(); //it is also asynchronous operation and a aSYNC operation
  const user = userDataJson.results[0];

  appState.push(user);
  // console.log(appState);
  domRender(appState);
});

const domRender = (stateArr) => {
  userList.innerHTML = null;
  stateArr.forEach((userObj) => {
    const userEl = document.createElement("div");
    userEl.innerHTML = `<div>
    ${userObj.name.title} ${userObj.name.first} ${userObj.name.last}
    </div>`;

    userList.appendChild(userEl);
  });
};

searchInput.addEventListener("keyup", (e) => {
  const filterAppState = appState.filter((user) =>
    user.name.first.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  domRender(filterAppState);
});
