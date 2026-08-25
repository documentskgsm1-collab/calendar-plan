import {firstSemesterYear, secondSemesterYear} from '../holidays/current-period'

const defaultPeriods = () => {
  document.getElementById("btnFirstSemester").addEventListener("click", () => {
    document.getElementById("start-date").value = `${firstSemesterYear}-09-01`
    document.getElementById("end-date").value = `${firstSemesterYear}-12-23`
  })

  document.getElementById("btnSecondSemester").addEventListener("click", () => {
    document.getElementById("start-date").value = `${secondSemesterYear}-01-11`
    document.getElementById("end-date").value = `${secondSemesterYear}-05-28`
  })
}

export default defaultPeriods
