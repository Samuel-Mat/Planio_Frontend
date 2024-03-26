let jwt = sessionStorage.getItem("token");
let errorBox = document.getElementById("errorBox");

fetch(url + "User/GetRole", {
  method: "GET",
  headers: {
    "content-type": "application/json",
    credentials: "same-origin",
    Authorization: jwt,
  },
})
.then((response) => response.text())
.then((data) => {
  console.log(data);
  if(data == "teacher") {
    document.getElementById("newroom").style.display = "none";
    document.getElementById("newperson").style.display = "none";
    document.getElementById("newclass").style.display = "none";
  }
  if(data == "student") {
    document.getElementById("addbtn").style.display = "none";
  }
  if(data == "admin") {
    document.getElementById("newbooking").style.display = "none";
  }
});

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
      Authorization: jwt,
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
      if(data == "Class not found." || data == "A User with this Email already exists (╯°□°）╯︵ ┻━┻") {
        errorBox.innerHTML = "the student could not be added";
        errorBox.style.right = "-35vw";
        errorBox.classList.remove("flyOut");
        errorBox.classList.add("flyIn");

        setTimeout(() => {
          errorBox.style.right = "0";
          errorBox.classList.add("flyOut");
          errorBox.classList.remove("flyIn");
        }, 2000);
      } else {
        CloseAddAll();
      }
    });
}

async function AddTeacher(email, firstname, lastname, password) {
  await fetch(url + "Admin/RegisterTeacher", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      credentials: "same-origin",
      Authorization: jwt,
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
      if(data == "A User with this Email already exists (╯°□°）╯︵ ┻━┻") {
        errorBox.innerHTML = "the teacher could not be added";
        errorBox.style.right = "-35vw";
        errorBox.classList.remove("flyOut");
        errorBox.classList.add("flyIn");

        setTimeout(() => {
          errorBox.style.right = "0";
          errorBox.classList.add("flyOut");
          errorBox.classList.remove("flyIn");
        }, 2000);
      } else {
        CloseAddAll();
      }
    });
}

async function AddAdmin(email, password) {
  await fetch(url + "Admin/RegisterAdmin", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      credentials: "same-origin",
      Authorization: jwt,
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if(data == "An Admin with this Email already exists (╯°□°）╯︵ ┻━┻") {
        errorBox.innerHTML = "the admin could not be added";
        errorBox.style.right = "-35vw";
        errorBox.classList.remove("flyOut");
        errorBox.classList.add("flyIn");

        setTimeout(() => {
          errorBox.style.right = "0";
          errorBox.classList.add("flyOut");
          errorBox.classList.remove("flyIn");
        }, 2000);
      } else {
        CloseAddAll();
      }
    });
}

async function AddRoom() {
  let roomName = document.getElementById("roomName").value;

  await fetch("https://planiobackend.onrender.com/api/Room/CreateRoom", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      credentials: "same-origin",
      Authorization: jwt,
    },
    body: JSON.stringify({
      roomname: roomName,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      if (data == "Room successfully created") {
        CloseAddAll();
      } else {
        errorBox.innerHTML = "the room could not be created";
        errorBox.style.right = "-35vw";
        errorBox.classList.remove("flyOut");
        errorBox.classList.add("flyIn");

        setTimeout(() => {
          errorBox.style.right = "0";
          errorBox.classList.add("flyOut");
          errorBox.classList.remove("flyIn");
        }, 2000);
      }
    });
}

async function AddBooking() {
  let subject = document.getElementById("subjectName").value;
  let time = document.getElementById("time").value;
  let day = document.getElementById("day").value;
  let classBooking = document.getElementById("classBooking").value;
  let roomBooking = document.getElementById("room").value;

  let lessonTime = parseInt(time)+parseInt(day);

  await fetch("https://planiobackend.onrender.com/api/Lesson/CreateLesson", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      credentials: "same-origin",
      Authorization: jwt
    },
    body: JSON.stringify({
      lessonname: subject,
      attendingclassname: classBooking,
      roomname: roomBooking,
      lessonTime: lessonTime,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);

      if(data == "Lesson successfully created") {
        CloseAddAll();
      } else {
        errorBox.innerHTML = "the lesson could not be created";
        errorBox.style.right = "-35vw";
        errorBox.classList.remove("flyOut");
        errorBox.classList.add("flyIn");

        setTimeout(() => {
          errorBox.style.right = "0";
          errorBox.classList.add("flyOut");
          errorBox.classList.remove("flyIn");
        }, 2000);
      }
    });
}

async function AddClass() {
  let className = document.getElementById("className").value;

  await fetch("https://planiobackend.onrender.com/api/Class/CreateClass", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      credentials: "same-origin",
      Authorization: jwt,
    },
    body: JSON.stringify({
      classname: className,
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);

      if (data == "Class successfully created") {
        CloseAddAll();
      } else {
        errorBox.innerHTML = "the class could not be added";
        errorBox.style.right = "-35vw";
        errorBox.classList.remove("flyOut");
        errorBox.classList.add("flyIn");

        setTimeout(() => {
          errorBox.style.right = "0";
          errorBox.classList.add("flyOut");
          errorBox.classList.remove("flyIn");
        }, 2000);
      }
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
