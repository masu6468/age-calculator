let inputData = document.querySelector('#inputFilde')
let presentDate = new Date()
let todayDate = presentDate.getDate()
let mounth = presentDate.getMonth()
let year = presentDate.getFullYear()
    // year calculation mathod
let yearCalculation = function(arr) {
        let age
        let y = year - arr[2]
        if (mounth === arr[1]) {
            age = y
        } else {
            age = y - 1
        }
        document.querySelector('#year').textContent = age
    }
    //mounth calculation mathod
let mounthCalculation = function(arr) {
        let calcuMounth
        let m = (year - arr[2]) * 12
        if (mounth === arr[1]) {
            calcuMounth = m
        } else {
            calcuMounth = m + (mounth - arr[1])
        }
        document.querySelector('#mounth').textContent = calcuMounth
    }
    // day calculation
let dayCalculation = function(arr) {
    let day, y, m, d
    if (mounth === arr[1]) {
        y = year - arr[2]
    } else {
        y = y - 1
    }
    m = mounth - arr[1]
    d = todayDate - arr[0]
    day = (y * 365) + (m * 30) + d
    document.querySelector('#day').textContent = day
}
document.querySelector('button').addEventListener('click', () => {
    let splitDate = inputData.value.split('-')
    let dateInt = splitDate.map(x => parseInt(x))
    yearCalculation(dateInt)
    mounthCalculation(dateInt)
    dayCalculation(dateInt)
})