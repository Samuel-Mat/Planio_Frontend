let userRole = "teacher";

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

function ShowAddPerson() {
  CloseAdd();

  const addRoomPrompt = document.getElementById("addPerson");
  addRoomPrompt.style.visibility = "Visible";
}

function ShowAddClass() {
  CloseAdd();

  const addRoomPrompt = document.getElementById("addClass");
  addRoomPrompt.style.visibility = "Visible";
}

function ShowAddBooking() {
  CloseAdd();

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
    addPrompts[i].style.visibility = "Hidden";
  }
}
