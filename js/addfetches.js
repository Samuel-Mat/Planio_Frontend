let jwt;

async function AddPerson() {
  let email = document.getElementById("personEmail").value;
  let firstname = document.getElementById("personFirstName").value;
  let lastname = document.getElementById("personLastName").value;
  let password = document.getElementById("personPassword").value;
  let role = document.getElementById("role").value;
  let classPerson = document.getElementById("class").value;

  if (role == "student") {
    await AddStudent(email, firstname, lastname, password, classPerson);
  }

  if (role == "teacher") {
    await AddTeacher(email, firstname, lastname, password);
  }

  if (role == "admin") {
    await AddAdmin(email, password);
  }

  CloseAddAll();
}

async function AddStudent(email, firstname, lastname, password, classPerson) {
  await fetch(url + "Admin/RegisterStudent", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      credentials: "same-origin",
    },
    body: JSON.stringify({
      email: email,
      firstname: firstname,
      lastname: lastname,
      password: password,
      className: classPerson,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
    });
  CloseAddAll();
}

async function AddTeacher(email, firstname, lastname, password) {
  await fetch(url + "Admin/RegisterTeacher", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      credentials: "same-origin",
    },
    body: JSON.stringify({
      email: email,
      firstname: firstname,
      lastname: lastname,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  CloseAddAll();
}

async function AddAdmin(email, password) {
  await fetch(url + "Admin/RegisterAdmin", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      credentials: "same-origin",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
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
  const textInputs = document.getElementsByClassName("text_inputperson");

  for (let i = 0; i < addPrompts.length; i++) {
    console.log(addPrompts[i]);
    addPrompts[i].style.visibility = "Hidden";
  }
}
