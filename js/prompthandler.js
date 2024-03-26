let userRole = "teacher";
let url = "https://planiobackend.onrender.com/api/";

function LogOut() {
  sessionStorage.setItem("token", "");
  window.location.href = "login.html";
}
function ShowAddPrompt() {
  const addPrompt = document.getElementById("addPrompt");
  addPrompt.style.visibility = "Visible";

  if (userRole == "teacher") {
  }
}

function ShowAddRoom() {
  CloseAdd();

  const addRoomPrompt = document.getElementById("addRoom");
  addRoomPrompt.style.visibility = "Visible";
}

function ChangeInput() {
  let role = document.getElementById("role").value;
  let email = document.getElementById("personEmail");
  let firstname = document.getElementById("personFirstName");
  let lastname = document.getElementById("personLastName");
  let password = document.getElementById("personPassword");
  let classPerson = document.getElementById("class");

  if (role == "student") {
    email.style.display = "flex";
    firstname.style.display = "flex";
    lastname.style.display = "flex";
    password.style.display = "flex";
    classPerson.style.display = "flex";
  }
  if (role == "teacher") {
    email.style.display = "flex";
    firstname.style.display = "flex";
    lastname.style.display = "flex";
    password.style.display = "flex";
    classPerson.style.display = "none";
  }
  if (role == "admin") {
    email.style.display = "flex";
    firstname.style.display = "none";
    lastname.style.display = "none";
    password.style.display = "flex";
    classPerson.style.display = "none";
  }
}

async function ShowAddPerson() {
  CloseAdd();

  let classes = [];
  classes = await FetchClasses();
  console.log(classes[0]);
  const addRoomPrompt = document.getElementById("addPerson");
  const classList = document.getElementById("class");

  for (let i = 0; i < classes.length; i++) {
    const option = document.createElement("option");
    option.textContent = classes[i].className;
    option.value = classes[i].className;
    classList.append(option);
  }

  addRoomPrompt.style.visibility = "Visible";
}

async function FetchClasses() {
  const classes = await fetch(url + "Class/GetAllClasses", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      credentials: "same-origin",
      Authorization: jwt,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });

  return classes;
}

async function FetchRooms() {
  const rooms = await fetch(url + "Room/GetAllRooms", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      credentials: "same-origin",
      Authorization: jwt,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });

  return rooms;
}

function ShowAddClass() {
  CloseAdd();

  const addRoomPrompt = document.getElementById("addClass");
  addRoomPrompt.style.visibility = "Visible";
}

async function ShowAddBooking() {
  CloseAdd();

  let rooms = [];
  rooms = await FetchRooms();
  console.log(rooms[0]);
  const roomList = document.getElementById("room");

  for (let i = 0; i < rooms.length; i++) {
    const option = document.createElement("option");
    option.textContent = rooms[i].roomName;
    option.value = rooms[i].roomName;
    roomList.append(option);
  }

  let classes = [];
  classes = await FetchClasses();
  console.log(classes[0]);
  const classList = document.getElementById("classBooking");

  for (let i = 0; i < classes.length; i++) {
    const option = document.createElement("option");
    option.textContent = classes[i].className;
    option.value = classes[i].className;
    classList.append(option);
  }

  const addRoomPrompt = document.getElementById("addBooking");
  addRoomPrompt.style.visibility = "Visible";
}

function CloseAdd() {
  const addPrompt = document.getElementById("addPrompt");
  addPrompt.style.visibility = "Hidden";
}

function CloseAddAll() {
  const addPrompts = document.getElementsByClassName("prompt");

  for (let i = 0; i < addPrompts.length; i++) {
    console.log(addPrompts[i]);
    addPrompts[i].style.visibility = "Hidden";
  }
}
