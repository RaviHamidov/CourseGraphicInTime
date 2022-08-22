/*=================================
          For Real Time
==================================*/
(function () {
    function checkTime(i) {
        return i < 10 ? "0" + i : i;
    }

    function startTime() {
        var currentTime = new Date(),
            d = checkTime(currentTime.getDay()),
            y = checkTime(currentTime.getFullYear()),
            mont = checkTime(currentTime.getMonth()),
            h = checkTime(currentTime.getHours()),
            min = checkTime(currentTime.getMinutes()),
            s = checkTime(currentTime.getSeconds());
        document.getElementById("header_time").innerHTML =
            y + "/" + mont + "/" + d + " | " + h + ":" + min + ":" + s;
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

const refreshStatus = () => {
    // Monday
    const dayMonday = document.getElementsByClassName("Monday");
    for (var i = 0; i < dayMonday.length; i++) {
        if (currentDay == "Monday") {
            for (var i = 0; i < dayMonday.length; i++) {
                let element = dayMonday[i];
                let startTime = element.querySelector(
                    ".main_column-card--time--start"
                ).innerHTML;

                let endTime = element.querySelector(
                    ".main_column-card--time--end"
                ).innerHTML;
                if (startTime <= currentTime && endTime > currentTime) {
                    dayMonday[i].classList.remove("main_column-card--default");
                    dayMonday[i].classList.add("main_column-card--active");
                } else {
                    dayMonday[i].classList.remove("main_column-card--active");
                    dayMonday[i].classList.add("main_column-card--default");
                }
            }
        } else {
            dayMonday[i].classList.add("main_column-card--default");
        }
    }

    // Tuesday
    const dayTuesday = document.getElementsByClassName("Tuesday");
    for (var i = 0; i < dayTuesday.length; i++) {
        if (currentDay == "Tuesday") {
            for (var i = 0; i < dayTuesday.length; i++) {
                let element = dayTuesday[i];
                let startTime = element.querySelector(
                    ".main_column-card--time--start"
                ).innerHTML;

                let endTime = element.querySelector(
                    ".main_column-card--time--end"
                ).innerHTML;
                if (startTime <= currentTime && endTime > currentTime) {
                    dayTuesday[i].classList.remove("main_column-card--default");
                    dayTuesday[i].classList.add("main_column-card--active");
                } else {
                    dayTuesday[i].classList.remove("main_column-card--active");
                    dayTuesday[i].classList.add("main_column-card--default");
                }
            }
        } else {
            dayTuesday[i].classList.add("main_column-card--default");
        }
    }

    // Wednesday
    const dayWednesday = document.getElementsByClassName("Wednesday");
    for (var i = 0; i < dayWednesday.length; i++) {
        if (currentDay == "Wednesday") {
            for (var i = 0; i < dayWednesday.length; i++) {
                let element = dayWednesday[i];
                let startTime = element.querySelector(
                    ".main_column-card--time--start"
                ).innerHTML;

                let endTime = element.querySelector(
                    ".main_column-card--time--end"
                ).innerHTML;
                if (startTime <= currentTime && endTime > currentTime) {
                    dayWednesday[i].classList.remove(
                        "main_column-card--default"
                    );
                    dayWednesday[i].classList.add("main_column-card--active");
                } else {
                    dayWednesday[i].classList.remove(
                        "main_column-card--active"
                    );
                    dayWednesday[i].classList.add("main_column-card--default");
                }
            }
        } else {
            dayWednesday[i].classList.add("main_column-card--default");
        }
    }

    // Thursday
    const dayThursday = document.getElementsByClassName("Thursday");
    for (var i = 0; i < dayThursday.length; i++) {
        if (currentDay == "Thursday") {
            for (var i = 0; i < dayThursday.length; i++) {
                let element = dayThursday[i];
                let startTime = element.querySelector(
                    ".main_column-card--time--start"
                ).innerHTML;

                let endTime = element.querySelector(
                    ".main_column-card--time--end"
                ).innerHTML;
                if (startTime <= currentTime && endTime > currentTime) {
                    dayThursday[i].classList.remove(
                        "main_column-card--default"
                    );
                    dayThursday[i].classList.add("main_column-card--active");
                } else {
                    dayThursday[i].classList.remove("main_column-card--active");
                    dayThursday[i].classList.add("main_column-card--default");
                }
            }
        } else {
            dayThursday[i].classList.add("main_column-card--default");
        }
    }

    // Friday
    const dayFriday = document.getElementsByClassName("Friday");
    for (var i = 0; i < dayFriday.length; i++) {
        if (currentDay == "Friday") {
            for (var i = 0; i < dayFriday.length; i++) {
                let element = dayFriday[i];
                let startTime = element.querySelector(
                    ".main_column-card--time--start"
                ).innerHTML;

                let endTime = element.querySelector(
                    ".main_column-card--time--end"
                ).innerHTML;
                if (startTime <= currentTime && endTime > currentTime) {
                    dayFriday[i].classList.remove("main_column-card--default");
                    dayFriday[i].classList.add("main_column-card--active");
                } else {
                    dayFriday[i].classList.remove("main_column-card--active");
                    dayFriday[i].classList.add("main_column-card--default");
                }
            }
        } else {
            dayFriday[i].classList.add("main_column-card--default");
        }
    }

    // Saturday
    const daySaturday = document.getElementsByClassName("Saturday");
    for (var i = 0; i < daySaturday.length; i++) {
        if (currentDay == "Saturday") {
            for (var i = 0; i < daySaturday.length; i++) {
                let element = daySaturday[i];
                let startTime = element.querySelector(
                    ".main_column-card--time--start"
                ).innerHTML;

                let endTime = element.querySelector(
                    ".main_column-card--time--end"
                ).innerHTML;
                if (startTime <= currentTime && endTime > currentTime) {
                    daySaturday[i].classList.remove(
                        "main_column-card--default"
                    );
                    daySaturday[i].classList.add("main_column-card--active");
                } else {
                    daySaturday[i].classList.remove("main_column-card--active");
                    daySaturday[i].classList.add("main_column-card--default");
                }
            }
        } else {
            daySaturday[i].classList.add("main_column-card--default");
        }
    }
};

// run when starting
refreshStatus();

// updates every 1 seconds
setInterval(refreshStatus, 1000);
