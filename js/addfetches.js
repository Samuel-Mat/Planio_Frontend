let url = "";
let jwt;

async function AddPerson() {
  let email = document.getElementById("personEmail").value;
  let name = document.getElementById("personName").value;
  let password = document.getElementById("personPassword").value;
  let role = document.getElementById("role").value;
  let classPerson = document.getElementById("class").value;

  console.log("Add Person: " + name + email + password + role + classPerson);

  await fetch(url + "AddPerson", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      credentials: "same-origin",
    },
    body: JSON.stringify({
      email: email,
      name: name,
      password: password,
      role: role,
      class: classPerson,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    });
  CloseAddAll();
}

async function AddRoom() {
  let roomName = docuemnt.getElementById("roomName").value;

  await fetch(url + "AddRoom", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      credentials: "same-origin",
    },
    body: JSON.stringify({
      name: roomName,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    });
}

async function AddBooking() {
  let subject = document.getElementById("subjectName").value;
  let timeFrom = document.getElementById("from").value;
  let timeTo = document.getElementById("to").value;
  let room = document.getElementById("room").value;

  await fetch(url + "AddBooking", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      credentials: "same-origin",
    },
    body: JSON.stringify({
      subject: subject,
      from: timeFrom,
      to: timeTo,
      room: room,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    });
}

async function AddClass() {
  let className = document.getElementById("className").value;

  await fetch(url + "AddClass", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      credentials: "same-origin",
    },
    body: JSON.stringify({
      name: className,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    });
}

function CloseAddAll() {
  const addPrompts = document.getElementsByClassName("prompt");

  for (let i = 0; i < addPrompts.length; i++) {
    addPrompts[i].style.visibility = "Hidden";
  }
}
