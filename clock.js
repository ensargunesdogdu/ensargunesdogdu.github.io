/**
 * Clock
 */

const clock = document.querySelector('.clock')

function startTime () {
    const today = new Date()
    let h = today.getHours()
    let m = today.getMinutes()
    let s = today.getSeconds()
    const A = h > 12 ? 'PM' : 'AM'
    h = pad(h > 12 ? h - 12 : h)
    clock.innerHTML = h + ':' + pad(m) + ':' + pad(s) + A
    setTimeout(startTime, 500)
}

function pad(i) {
    if (i < 10) {
        i = '0' + i
    }

    return i
}

startTime();
