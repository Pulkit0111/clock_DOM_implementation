function clock() {
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let period = "AM";
    if (hrs == 0) {
        hrs = 12;
    } else if (hrs >= 12) {
        hrs = hrs - 12;
        period = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    } else {
        hrs = hrs;
    }
    if (min < 10) {
        min = "0" + min;
    } else {
        min = min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    } else {
        sec = sec;
    }
    let time = `${hrs}:${min}:${sec} ${period}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
};
clock();