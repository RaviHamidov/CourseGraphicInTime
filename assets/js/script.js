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
        }, 500);
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
         Page's Reload Settings
==================================*/
function timedRefresh(timeoutPeriod) {
    setTimeout("location.reload(true);", timeoutPeriod);
}

/*=================================
         Time convert to Num
==================================*/
function timeStringToFloat(time) {
    var hoursMinutes = time.split(/[.:]/);
    var hours = parseInt(hoursMinutes[0], 10);
    var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours + minutes / 60;
}

const refreshStatus = () => {
    // Monday
    const dayMonday = document.getElementsByClassName("Monday");
    for (var i = 0; i < dayMonday.length; i++) {
        if (currentDay == "Monday") {
            let element = dayMonday[i];

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
                convertedCurrentTime < convertedStartTime - 0.25 ||
                convertedCurrentTime > convertedEndTime + 0.2
            ) {
                dayMonday[i].classList.remove("main_column-card--preparation");
                dayMonday[i].classList.remove("main_column-card--active");
                dayMonday[i].classList.remove("main_column-card--end");
                dayMonday[i].classList.add("main_column-card--default");
            } else if (
                Math.abs(convertedStartTime - convertedCurrentTime) <= 0.25 &&
                convertedCurrentTime < convertedStartTime
            ) {
                dayMonday[i].classList.remove("main_column-card--default");
                dayMonday[i].classList.remove("main_column-card--active");
                dayMonday[i].classList.remove("main_column-card--end");
                dayMonday[i].classList.add("main_column-card--preparation");
            } else if (
                convertedStartTime <= convertedCurrentTime &&
                convertedEndTime > convertedCurrentTime
            ) {
                dayMonday[i].classList.remove("main_column-card--preparation");
                dayMonday[i].classList.remove("main_column-card--default");
                dayMonday[i].classList.remove("main_column-card--end");
                dayMonday[i].classList.add("main_column-card--active");
            } else if (
                Math.abs(convertedCurrentTime - convertedEndTime) <= 0.2 &&
                convertedCurrentTime >= convertedEndTime
            ) {
                dayMonday[i].classList.remove("main_column-card--preparation");
                dayMonday[i].classList.remove("main_column-card--active");
                dayMonday[i].classList.remove("main_column-card--default");
                dayMonday[i].classList.add("main_column-card--end");
            }
        } else {
            dayMonday[i].classList.add("main_column-card--default");
        }
    }

    // Tuesday
    const dayTuesday = document.getElementsByClassName("Tuesday");
    for (var i = 0; i < dayTuesday.length; i++) {
        if (currentDay == "Tuesday") {
            let element = dayTuesday[i];

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
                convertedCurrentTime < convertedStartTime - 0.25 ||
                convertedCurrentTime > convertedEndTime + 0.2
            ) {
                dayTuesday[i].classList.remove("main_column-card--preparation");
                dayTuesday[i].classList.remove("main_column-card--active");
                dayTuesday[i].classList.remove("main_column-card--end");
                dayTuesday[i].classList.add("main_column-card--default");
            } else if (
                Math.abs(convertedStartTime - convertedCurrentTime) <= 0.25 &&
                convertedCurrentTime < convertedStartTime
            ) {
                dayTuesday[i].classList.remove("main_column-card--default");
                dayTuesday[i].classList.remove("main_column-card--active");
                dayTuesday[i].classList.remove("main_column-card--end");
                dayTuesday[i].classList.add("main_column-card--preparation");
            } else if (
                convertedStartTime <= convertedCurrentTime &&
                convertedEndTime > convertedCurrentTime
            ) {
                dayTuesday[i].classList.remove("main_column-card--preparation");
                dayTuesday[i].classList.remove("main_column-card--default");
                dayTuesday[i].classList.remove("main_column-card--end");
                dayTuesday[i].classList.add("main_column-card--active");
            } else if (
                Math.abs(convertedCurrentTime - convertedEndTime) <= 0.2 &&
                convertedCurrentTime >= convertedEndTime
            ) {
                dayTuesday[i].classList.remove("main_column-card--preparation");
                dayTuesday[i].classList.remove("main_column-card--active");
                dayTuesday[i].classList.remove("main_column-card--default");
                dayTuesday[i].classList.add("main_column-card--end");
            }
        } else {
            dayTuesday[i].classList.add("main_column-card--default");
        }
    }

    // Wednesday
    const dayWednesday = document.getElementsByClassName("Wednesday");
    for (var i = 0; i < dayWednesday.length; i++) {
        if (currentDay == "Wednesday") {
            let element = dayWednesday[i];

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
                convertedCurrentTime < convertedStartTime - 0.25 ||
                convertedCurrentTime > convertedEndTime + 0.2
            ) {
                dayWednesday[i].classList.remove(
                    "main_column-card--preparation"
                );
                dayWednesday[i].classList.remove("main_column-card--active");
                dayWednesday[i].classList.remove("main_column-card--end");
                dayWednesday[i].classList.add("main_column-card--default");
            } else if (
                Math.abs(convertedStartTime - convertedCurrentTime) <= 0.25 &&
                convertedCurrentTime < convertedStartTime
            ) {
                dayWednesday[i].classList.remove("main_column-card--default");
                dayWednesday[i].classList.remove("main_column-card--active");
                dayWednesday[i].classList.remove("main_column-card--end");
                dayWednesday[i].classList.add("main_column-card--preparation");
            } else if (
                convertedStartTime <= convertedCurrentTime &&
                convertedEndTime > convertedCurrentTime
            ) {
                dayWednesday[i].classList.remove(
                    "main_column-card--preparation"
                );
                dayWednesday[i].classList.remove("main_column-card--default");
                dayWednesday[i].classList.remove("main_column-card--end");
                dayWednesday[i].classList.add("main_column-card--active");
            } else if (
                Math.abs(convertedCurrentTime - convertedEndTime) <= 0.2 &&
                convertedCurrentTime >= convertedEndTime
            ) {
                dayWednesday[i].classList.remove(
                    "main_column-card--preparation"
                );
                dayWednesday[i].classList.remove("main_column-card--active");
                dayWednesday[i].classList.remove("main_column-card--default");
                dayWednesday[i].classList.add("main_column-card--end");
            }
        } else {
            dayWednesday[i].classList.add("main_column-card--default");
        }
    }

    // Thursday
    const dayThursday = document.getElementsByClassName("Thursday");
    for (var i = 0; i < dayThursday.length; i++) {
        if (currentDay == "Thursday") {
            let element = dayThursday[i];

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
                convertedCurrentTime < convertedStartTime - 0.25 ||
                convertedCurrentTime > convertedEndTime + 0.2
            ) {
                dayThursday[i].classList.remove(
                    "main_column-card--preparation"
                );
                dayThursday[i].classList.remove("main_column-card--active");
                dayThursday[i].classList.remove("main_column-card--end");
                dayThursday[i].classList.add("main_column-card--default");
            } else if (
                Math.abs(convertedStartTime - convertedCurrentTime) <= 0.25 &&
                convertedCurrentTime < convertedStartTime
            ) {
                dayThursday[i].classList.remove("main_column-card--default");
                dayThursday[i].classList.remove("main_column-card--active");
                dayThursday[i].classList.remove("main_column-card--end");
                dayThursday[i].classList.add("main_column-card--preparation");
            } else if (
                convertedStartTime <= convertedCurrentTime &&
                convertedEndTime > convertedCurrentTime
            ) {
                dayThursday[i].classList.remove(
                    "main_column-card--preparation"
                );
                dayThursday[i].classList.remove("main_column-card--default");
                dayThursday[i].classList.remove("main_column-card--end");
                dayThursday[i].classList.add("main_column-card--active");
            } else if (
                Math.abs(convertedCurrentTime - convertedEndTime) <= 0.2 &&
                convertedCurrentTime >= convertedEndTime
            ) {
                dayThursday[i].classList.remove(
                    "main_column-card--preparation"
                );
                dayThursday[i].classList.remove("main_column-card--active");
                dayThursday[i].classList.remove("main_column-card--default");
                dayThursday[i].classList.add("main_column-card--end");
            }
        } else {
            dayThursday[i].classList.add("main_column-card--default");
        }
    }

    // Friday
    const dayFriday = document.getElementsByClassName("Friday");
    for (var i = 0; i < dayFriday.length; i++) {
        if (currentDay == "Friday") {
            let element = dayFriday[i];

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
                convertedCurrentTime < convertedStartTime - 0.25 ||
                convertedCurrentTime > convertedEndTime + 0.2
            ) {
                dayFriday[i].classList.remove("main_column-card--preparation");
                dayFriday[i].classList.remove("main_column-card--active");
                dayFriday[i].classList.remove("main_column-card--end");
                dayFriday[i].classList.add("main_column-card--default");
            } else if (
                Math.abs(convertedStartTime - convertedCurrentTime) <= 0.25 &&
                convertedCurrentTime < convertedStartTime
            ) {
                dayFriday[i].classList.remove("main_column-card--default");
                dayFriday[i].classList.remove("main_column-card--active");
                dayFriday[i].classList.remove("main_column-card--end");
                dayFriday[i].classList.add("main_column-card--preparation");
            } else if (
                convertedStartTime <= convertedCurrentTime &&
                convertedEndTime > convertedCurrentTime
            ) {
                dayFriday[i].classList.remove("main_column-card--preparation");
                dayFriday[i].classList.remove("main_column-card--default");
                dayFriday[i].classList.remove("main_column-card--end");
                dayFriday[i].classList.add("main_column-card--active");
            } else if (
                Math.abs(convertedCurrentTime - convertedEndTime) <= 0.2 &&
                convertedCurrentTime >= convertedEndTime
            ) {
                dayFriday[i].classList.remove("main_column-card--preparation");
                dayFriday[i].classList.remove("main_column-card--active");
                dayFriday[i].classList.remove("main_column-card--default");
                dayFriday[i].classList.add("main_column-card--end");
            }
        } else {
            dayFriday[i].classList.add("main_column-card--default");
        }
    }

    // Saturday
    const daySaturday = document.getElementsByClassName("Saturday");
    for (var i = 0; i < daySaturday.length; i++) {
        if (currentDay == "Saturday") {
            let element = daySaturday[i];

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
                convertedCurrentTime < convertedStartTime - 0.25 ||
                convertedCurrentTime > convertedEndTime + 0.2
            ) {
                daySaturday[i].classList.remove(
                    "main_column-card--preparation"
                );
                daySaturday[i].classList.remove("main_column-card--active");
                daySaturday[i].classList.remove("main_column-card--end");
                daySaturday[i].classList.add("main_column-card--default");
            } else if (
                Math.abs(convertedStartTime - convertedCurrentTime) <= 0.25 &&
                convertedCurrentTime < convertedStartTime
            ) {
                daySaturday[i].classList.remove("main_column-card--default");
                daySaturday[i].classList.remove("main_column-card--active");
                daySaturday[i].classList.remove("main_column-card--end");
                daySaturday[i].classList.add("main_column-card--preparation");
            } else if (
                convertedStartTime <= convertedCurrentTime &&
                convertedEndTime > convertedCurrentTime
            ) {
                daySaturday[i].classList.remove(
                    "main_column-card--preparation"
                );
                daySaturday[i].classList.remove("main_column-card--default");
                daySaturday[i].classList.remove("main_column-card--end");
                daySaturday[i].classList.add("main_column-card--active");
            } else if (
                Math.abs(convertedCurrentTime - convertedEndTime) <= 0.2 &&
                convertedCurrentTime >= convertedEndTime
            ) {
                daySaturday[i].classList.remove(
                    "main_column-card--preparation"
                );
                daySaturday[i].classList.remove("main_column-card--active");
                daySaturday[i].classList.remove("main_column-card--default");
                daySaturday[i].classList.add("main_column-card--end");
            }
        } else {
            daySaturday[i].classList.add("main_column-card--default");
        }
    }
};

// run when starting
refreshStatus();

// refresh status every 1 second
window.onload = timedRefresh(60000);
