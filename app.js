// let oldDate = '15 dec 1999'
// let d = new Date(oldDate)
// let nd = new Date()
// let t = (nd - d) / 1000
// let year = Math.floor(t / 31536000)
// console.log(year)
(function() {

    let inputData = document.querySelector('#inputFilde')


    function allAppController() {
        let oldDate = new Date(inputData.value)
        let presentDate = new Date()
        let timeToSecond = (presentDate - oldDate) / 1000
        yearCalculation(timeToSecond)
        mounthCalculation(timeToSecond)
        dayCacu(timeToSecond)
        weekCalcu(timeToSecond)
        document.querySelector('#hour').textContent = Math.floor(timeToSecond / 3600)
        document.querySelector('#minute').textContent = Math.floor(timeToSecond / 60)
        document.querySelector('#second').textContent = Math.floor(timeToSecond)
    }
    document.querySelector('button').addEventListener('click', () => {
        allAppController()
        inputData.value = ''
    })
    document.addEventListener('keypress', e => {
        if (e.code === 'Enter') {
            allAppController()
            inputData.value = ''
        }
    })
    let yearCalculation = function(time) {
        let year = Math.floor(time / 31536000) // 1 year = 31536000s
        document.querySelector('#year').textContent = year
    }
    let mounthCalculation = function(time) {
        // 7 mounth 31 days, 4 mounth 30 days, 1 mounth 28
        // avarage mounth 30.42 days..
        // 1 mounth = 2628288s
        let mounth = Math.floor(time / 2628288)
        document.querySelector('#mounth').textContent = mounth
    }
    let dayCacu = function(time) {
        let day = Math.floor(time / 86400)
        document.querySelector('#day').textContent = day
    }
    let weekCalcu = function(time) {
        let week = Math.floor(time / 604800)
        document.querySelector('#week').textContent = week
    }
})()