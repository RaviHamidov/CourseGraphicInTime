/*=================================
          For Real Time
==================================*/
(function () {
    function checkTime(i) {
        return i < 10 ? "0" + i : i;
    }

    function startTime() {
        var currentTime = new Date(),
            d = checkTime(currentTime.getDate()),
            y = checkTime(currentTime.getFullYear()),
            m = checkTime(currentTime.getMonth() + 1),
            h = checkTime(currentTime.getHours()),
            min = checkTime(currentTime.getMinutes()),
            s = checkTime(currentTime.getSeconds());
        document.getElementById("header_time").innerHTML =
            y + "/" + m + "/" + d + " | " + h + ":" + min + ":" + s;
        t = setTimeout(function () {
            startTime();
        }, 1000);
    }
    startTime();
})();

/*=================================
    Cta according to Week Days
==================================*/
let weekDayLocale = new Date();
let currentDay = weekDayLocale.toLocaleString("en-us", { weekday: "long" });

/*=================================
         Effect over Time
==================================*/
let dayTime = new Date();
let currentTime = dayTime.toLocaleTimeString("it-IT", {
    // en-US can be set to 'default' to use user's browser settings
    hour: "2-digit",
    minute: "2-digit",
});

/*=================================
         Time convert to Num
==================================*/
function timeStringToFloat(time) {
    var hoursMinutes = time.split(/[.:]/);
    var hours = parseInt(hoursMinutes[0], 10);
    var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours + minutes / 60;
}

function refreshStatus() {
    const weekDay = document.body.getElementsByClassName(currentDay);
    for (var i = 0; i < weekDay.length; i++) {
        let element = weekDay[i];

        let startTime = element.querySelector(
            ".main_column-card--time--start"
        ).innerHTML;
        let endTime = element.querySelector(
            ".main_column-card--time--end"
        ).innerHTML;

        let convertedStartTime = timeStringToFloat(startTime);
        let convertedEndTime = timeStringToFloat(endTime);
        let convertedCurrentTime = timeStringToFloat(currentTime);

        if (
            convertedCurrentTime < convertedStartTime - 0.05 ||
            convertedCurrentTime > convertedEndTime + 0.17
        ) {
            element.classList.remove("main_column-card--preparation");
            element.classList.remove("main_column-card--active");
            element.classList.remove("main_column-card--end");
            element.classList.add("main_column-card--default");
        } else if (
            Math.abs(convertedStartTime - convertedCurrentTime) <= 0.17 &&
            convertedCurrentTime < convertedStartTime
        ) {
            element.classList.remove("main_column-card--default");
            element.classList.remove("main_column-card--active");
            element.classList.remove("main_column-card--end");
            element.classList.add("main_column-card--preparation");
        } else if (
            convertedStartTime <= convertedCurrentTime &&
            convertedEndTime > convertedCurrentTime
        ) {
            element.classList.remove("main_column-card--preparation");
            element.classList.remove("main_column-card--default");
            element.classList.remove("main_column-card--end");
            element.classList.add("main_column-card--active");
        } else if (
            Math.abs(convertedCurrentTime - convertedEndTime) <= 0.17 &&
            convertedCurrentTime >= convertedEndTime
        ) {
            element.classList.remove("main_column-card--preparation");
            element.classList.remove("main_column-card--active");
            element.classList.remove("main_column-card--default");
            element.classList.add("main_column-card--end");
        }
    }
}

window.onload = () => {
    setInterval("refreshStatus()", 1000);
};
