import { convertDate } from "../functions"

const vacations = [
  {
    name: "fall",
    startDate: "2026-10-26",
    endDate: "2026-11-01",
    dates: [],
  },
  {
    name: "winter",
    startDate: "2026-12-24",
    endDate: "2027-01-10",
    dates: [],
  },
  {
    name: "additional",
    startDate: "2027-02-15",
    endDate: "2027-02-21",
    dates: [],
  },
  {
    name: "spring",
    startDate: "2027-03-22",
    endDate: "2027-03-28",
    dates: [],
  },
]

// сортировка массива каникул по дате
const organazeVacations = () => {
  const compareItem = (a, b) => {
    if (Date.parse(a.startDate) > Date.parse(b.startDate)) return 1
    if (Date.parse(a.startDate) == Date.parse(b.startDate)) return 0
    if (Date.parse(a.startDate) < Date.parse(b.startDate)) return -1
  }

  vacations.sort(compareItem)
}

// заполнение массива дат для определенных каникул
const createArrayDates = (vacationName) => {
  let foundVacation = vacations.find((item) => item.name == vacationName)
  foundVacation.dates = []
  for (
    let i = Date.parse(foundVacation.startDate);
    i <= Date.parse(foundVacation.endDate);
    i = i + 1000 * 3600 * 24
  ) {
    foundVacation.dates.push(i)
  }
}

createArrayDates("fall")
createArrayDates("winter")
createArrayDates("additional")
createArrayDates("spring")

//Формирование массива дат всех каникул
let arrVacations = []
const createArrVacations = () => {
  arrVacations = []
  vacations.forEach((item) => {
    arrVacations = arrVacations.concat(item.dates)
  })
}

createArrVacations()

// выаод каникул на странице
const outputVacations = () => {
  const vacationsField = document.getElementById("vacations")
  vacationsField.innerHTML = ""
  for (let item of vacations) {
    vacationsField.innerHTML += `
        <div class="d-flex justify-content-between align-items-center mb-2">
          <div>
            з <span>${convertDate(item.startDate)}</span> до <span>${convertDate(item.endDate)}</span> 
          </div>
          <div>
            <button type="button" class="btn btn-primary" name="btnEditVacation" data-vacation-name='${
              item.name
            }' data-bs-toggle="modal" data-bs-target="#modalEditVacationDates">
                <i class="bi bi-pencil-square"></i>
            </button>
            <button type="button" class="btn btn-primary" name="btnDeleteVacation" data-vacation-name='${
              item.name
            }' data-bs-toggle="modal" data-bs-target="#modalDeleteVacation">
                <i class="bi bi-x-square"></i>
            </button>
          </div>
        </div>
      `
  }
}

outputVacations()

export {
  vacations,
  arrVacations,
  createArrayDates,
  createArrVacations,
  organazeVacations,
  outputVacations,
}
