Start();

async function Start() {
  let lessons = await GetLessons();
  console.log(lessons);
  AddLessonsToSchedule(lessons);
}
async function GetLessons() {
  const lessons = await fetch(url + "Student/GetLessonsOfStudentSelf", {
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

  return lessons;
}

function AddLessonsToSchedule(lessons) {
  const rows = document.getElementsByClassName("schedule_row");
  for (let i = 0; i < lessons.length; i++) {
    let day = Math.floor(lessons[i].lessonTime / 8 - 0.01);
    let time = lessons[i].lessonTime - day * 8;
    let fields = rows[time - 1].querySelectorAll("th");
    const field = fields[day + 1];

    field.textContent = `${lessons[i].lessonName} | ${lessons[i].roomName}`;
  }
}

function getDay(day) {
  let weekDay;
  switch (day) {
    case day < 1:
      weekDay = "monday";
      break;
    case day > 1 && day < 2:
      weekDay = "tuesday";
      break;
    case day < 1:
      weekDay = "monday";
      break;
    case day < 1:
      weekDay = "monday";
      break;
    case day < 1:
      weekDay = "monday";
      break;
  }
}
