const dayNums = document.querySelectorAll(".day-num");
const hourNums = document.querySelectorAll(".hour-num");
const minNums = document.querySelectorAll(".min-num");
const secNums = document.querySelectorAll(".sec-num");

const topSpans = Array.from(document.querySelectorAll(".top-part > span"));//selects 3*2 span from days, 2*2 from hours, mins and seconds all, so total is 18 spans
const bottomSpans = Array.from(document.querySelectorAll(".bottom-part > span"));

const day1stTopSpans = topSpans.slice(0,2);
const day1stBottomSpans = bottomSpans.slice(0,2);
const day2ndTopSpans = topSpans.slice(2,4);
const day2ndBottomSpans = bottomSpans.slice(2,4);
const day3rdTopSpans = topSpans.slice(4,6);
const day3rdBottomSpans = bottomSpans.slice(4,6);
const hour1stTopSpans = topSpans.slice(6,8);
const hour1stBottomSpans = bottomSpans.slice(6,8);
const hour2ndTopSpans = topSpans.slice(8,10);
const hour2ndBottomSpans = bottomSpans.slice(8,10);
const min1stTopSpans = topSpans.slice(10,12);
const min1stBottomSpans = bottomSpans.slice(10,12);
const min2ndTopSpans = topSpans.slice(12,14);
const min2ndBottomSpans = bottomSpans.slice(12,14);
const sec1stTopSpans = topSpans.slice(14,16);
const sec1stBottomSpans = bottomSpans.slice(14,16);
const sec2ndTopSpans = topSpans.slice(16,bottomSpans.length);
const sec2ndBottomSpans = bottomSpans.slice(16,bottomSpans.length);

let secAllZero = false;
let minAllZero = false;
let hourAllZero = false;

const newYearDate = "1 Jan 2024";
let difference, seconds, mins, hours, days, splittedSeconds, splittedMins, splittedHours, splittedDays;

//assigning nums to second elements
const assignSeconds = function(){
    let firstDigit, secondDigit;
    seconds = `${Math.floor(difference/1000)%60}`;
    splittedSeconds = seconds.split('');
    // console.log(splittedSeconds);
    
    if(splittedSeconds.length ==1){
        splittedSeconds.unshift('0');
    }
    firstDigit = parseInt(splittedSeconds[0]);
    secondDigit = parseInt(splittedSeconds[1]);
    // console.log(firstDigit, secondDigit);
    //number that are stored here shall be stored in 2nd span of top and 1st span of bottom in case of only one container which stores either firstDigit or secondDigit and this number will be subtracted to be stored as another value

    
    if(secondDigit == 0 && firstDigit!=0){
        sec1stTopSpans[1].innerText = firstDigit;
        sec1stBottomSpans[0].innerText = firstDigit;
        firstDigit--;
        sec1stTopSpans[0].innerText = firstDigit;
        sec1stBottomSpans[1].innerText = firstDigit;

        sec2ndTopSpans[1].innerText = secondDigit;
        sec2ndBottomSpans[0].innerText = secondDigit;
        secondDigit=9;
        sec2ndTopSpans[0].innerText = secondDigit;
        sec2ndBottomSpans[1].innerText = secondDigit;
    }
    else if(secondDigit > 0) {
        sec1stTopSpans[1].innerText = firstDigit;
        sec1stBottomSpans[0].innerText = firstDigit;
        sec1stTopSpans[0].innerText = firstDigit;
        sec1stBottomSpans[1].innerText = firstDigit;

        sec2ndTopSpans[1].innerText = secondDigit;
        sec2ndBottomSpans[0].innerText = secondDigit;
        secondDigit--;
        sec2ndTopSpans[0].innerText = secondDigit;
        sec2ndBottomSpans[1].innerText = secondDigit;
    }
    else if(firstDigit==0 && secondDigit==0)
    {
        sec1stTopSpans[1].innerText = firstDigit;
        sec1stBottomSpans[0].innerText = firstDigit;
        firstDigit=5;
        sec1stTopSpans[0].innerText = firstDigit;
        sec1stBottomSpans[1].innerText = firstDigit;

        sec2ndTopSpans[1].innerText = secondDigit;
        sec2ndBottomSpans[0].innerText = secondDigit;
        secondDigit=9;
        sec2ndTopSpans[0].innerText = secondDigit;
        sec2ndBottomSpans[1].innerText = secondDigit;
        secAllZero = true;
    }
    //adding animation classes
    if(sec2ndTopSpans[1].innerText != sec2ndTopSpans[0].innerText)
    {
        setTimeout(()=>{
            sec2ndTopSpans[1].classList.remove("rotate-0-first");
            sec2ndBottomSpans[1].classList.remove("rotate-90-first");
        },980);
        sec2ndTopSpans[1].classList.add("rotate-0-first");
        sec2ndBottomSpans[1].classList.add("rotate-90-first");
    }
    if(sec1stTopSpans[1].innerText != sec1stTopSpans[0].innerText)
    {
        setTimeout(()=>{
            sec1stTopSpans[1].classList.remove("rotate-0-first");
            sec1stBottomSpans[1].classList.remove("rotate-90-first");
        },980);
        sec1stTopSpans[1].classList.add("rotate-0-first");
        sec1stBottomSpans[1].classList.add("rotate-90-first");
    }
}

//assigning nums to minute elements
const assignMins = function(){
    let firstDigit, secondDigit;
    mins = `${Math.floor(difference /(1000*60))%60}`;
    splittedMins = mins.split('');
    // console.log(splittedMins);
    
    if(splittedMins.length ==1){
        splittedMins.unshift('0');
    }
    firstDigit = parseInt(splittedMins[0]);
    secondDigit = parseInt(splittedMins[1]);
    // console.log(firstDigit, secondDigit);
    
        if(secondDigit == 0 && firstDigit!=0){
            min1stTopSpans[1].innerText = firstDigit;
            min1stBottomSpans[0].innerText = firstDigit;
            firstDigit--;
            min1stTopSpans[0].innerText = firstDigit;
            min1stBottomSpans[1].innerText = firstDigit;
    
            min2ndTopSpans[1].innerText = secondDigit;
            min2ndBottomSpans[0].innerText = secondDigit;
            secondDigit=9;
            min2ndTopSpans[0].innerText = secondDigit;
            min2ndBottomSpans[1].innerText = secondDigit;
        }
        else if(secondDigit > 0) {
            min1stTopSpans[1].innerText = firstDigit;
            min1stBottomSpans[0].innerText = firstDigit;
            min1stTopSpans[0].innerText = firstDigit;
            min1stBottomSpans[1].innerText = firstDigit;
    
            min2ndTopSpans[1].innerText = secondDigit;
            min2ndBottomSpans[0].innerText = secondDigit;
            secondDigit--;
            min2ndTopSpans[0].innerText = secondDigit;
            min2ndBottomSpans[1].innerText = secondDigit;
        }
        else if(secondDigit==0 && firstDigit==0) {
            min1stTopSpans[1].innerText = firstDigit;
            min1stBottomSpans[0].innerText = firstDigit;
            firstDigit=5;
            min1stTopSpans[0].innerText = firstDigit;
            min1stBottomSpans[1].innerText = firstDigit;
    
            min2ndTopSpans[1].innerText = secondDigit;
            min2ndBottomSpans[0].innerText = secondDigit;
            secondDigit=9;
            min2ndTopSpans[0].innerText = secondDigit;
            min2ndBottomSpans[1].innerText = secondDigit;
            minAllZero = true;
        }
    
    if(secAllZero){
        if(min2ndTopSpans[1].innerText != min2ndTopSpans[0].innerText)
        {
            setTimeout(()=>{
                min2ndTopSpans[1].classList.remove("rotate-0-first");
                min2ndBottomSpans[1].classList.remove("rotate-90-first");
            },980);
            min2ndTopSpans[1].classList.add("rotate-0-first");
            min2ndBottomSpans[1].classList.add("rotate-90-first");
        }
        if(min1stTopSpans[1].innerText != min1stTopSpans[0].innerText)
        {
            setTimeout(()=>{
                min1stTopSpans[1].classList.remove("rotate-0-first");
                min1stBottomSpans[1].classList.remove("rotate-90-first");
            },980);
            min1stTopSpans[1].classList.add("rotate-0-first");
            min1stBottomSpans[1].classList.add("rotate-90-first");
        }

        secAllZero= false;
    }
}


//assigning nums to hour elements
const assignHours = function(){
    let firstDigit, secondDigit;
    hours = `${Math.floor(difference /(1000*60*60))%24}`;
    splittedHours = hours.split('');
    // console.log(splittedHours);
    
    if(splittedHours.length ==1){
        splittedHours.unshift('0');
    }
    firstDigit = parseInt(splittedHours[0]);
    secondDigit = parseInt(splittedHours[1]);
    // console.log(firstDigit, secondDigit);
    
        if(secondDigit == 0 && firstDigit!=0){
            hour1stTopSpans[1].innerText = firstDigit;
            hour1stBottomSpans[0].innerText = firstDigit;
            firstDigit--;
            hour1stTopSpans[0].innerText = firstDigit;
            hour1stBottomSpans[1].innerText = firstDigit;
    
            hour2ndTopSpans[1].innerText = secondDigit;
            hour2ndBottomSpans[0].innerText = secondDigit;
            secondDigit=9;
            hour2ndTopSpans[0].innerText = secondDigit;
            hour2ndBottomSpans[1].innerText = secondDigit;
        }
        else if(secondDigit > 0) {
            hour1stTopSpans[1].innerText = firstDigit;
            hour1stBottomSpans[0].innerText = firstDigit;
            hour1stTopSpans[0].innerText = firstDigit;
            hour1stBottomSpans[1].innerText = firstDigit;
    
            hour2ndTopSpans[1].innerText = secondDigit;
            hour2ndBottomSpans[0].innerText = secondDigit;
            secondDigit--;
            hour2ndTopSpans[0].innerText = secondDigit;
            hour2ndBottomSpans[1].innerText = secondDigit;
        }
        else if(secondDigit==0 && firstDigit==0) {
            hour1stTopSpans[1].innerText = firstDigit;
            hour1stBottomSpans[0].innerText = firstDigit;
            firstDigit = 2;
            hour1stTopSpans[0].innerText = firstDigit;
            hour1stBottomSpans[1].innerText = firstDigit;
    
            hour2ndTopSpans[1].innerText = secondDigit;
            hour2ndBottomSpans[0].innerText = secondDigit;
            secondDigit=3;
            hour2ndTopSpans[0].innerText = secondDigit;
            hour2ndBottomSpans[1].innerText = secondDigit;

            hourAllZero = true;
        }
    
    if(minAllZero){
        if(hour2ndTopSpans[1].innerText != hour2ndTopSpans[0].innerText)
        {
            setTimeout(()=>{
                hour2ndTopSpans[1].classList.remove("rotate-0-first");
                hour2ndBottomSpans[1].classList.remove("rotate-90-first");
            },980);
            hour2ndTopSpans[1].classList.add("rotate-0-first");
            hour2ndBottomSpans[1].classList.add("rotate-90-first");
        }
        if(hour1stTopSpans[1].innerText != hour1stTopSpans[0].innerText)
        {
            setTimeout(()=>{
                hour1stTopSpans[1].classList.remove("rotate-0-first");
                hour1stBottomSpans[1].classList.remove("rotate-90-first");
            },980);
            hour1stTopSpans[1].classList.add("rotate-0-first");
            hour1stBottomSpans[1].classList.add("rotate-90-first");
        }

        minAllZero = false;
    }
}

//assigning nums to day elements
const assignDays = function(){
    let firstDigit, secondDigit, thirdDigit;
    days = `${Math.floor(difference /(1000*60*60*24))}`;
    splittedDays = days.split('');
    // console.log(splittedDays);
    
    if(splittedDays.length ==1){
        splittedDays.unshift('0');
        splittedDays.unshift('0');
    }
    else if(splittedDays.length==2){
        splittedDays.unshift('0');
    }
    firstDigit = parseInt(splittedDays[0]);
    secondDigit = parseInt(splittedDays[1]);
    thirdDigit = parseInt(splittedDays[2]);
    // console.log(firstDigit, secondDigit, thirdDigit);
    
        if(thirdDigit == 0 && secondDigit!=0){
            day1stTopSpans[1].innerText = firstDigit;
            day1stBottomSpans[0].innerText = firstDigit;
            // firstDigit--;
            day1stTopSpans[0].innerText = firstDigit;
            day1stBottomSpans[1].innerText = firstDigit;
    
            day2ndTopSpans[1].innerText = secondDigit;
            day2ndBottomSpans[0].innerText = secondDigit;
            secondDigit--;
            day2ndTopSpans[0].innerText = secondDigit;
            day2ndBottomSpans[1].innerText = secondDigit;
    
            day3rdTopSpans[1].innerText = thirdDigit;
            day3rdBottomSpans[0].innerText = thirdDigit;
            thirdDigit=9;
            day3rdTopSpans[0].innerText = thirdDigit;
            day3rdBottomSpans[1].innerText = thirdDigit;
        }
        else if(thirdDigit == 0 && secondDigit==0 && firstDigit!=0){
            day1stTopSpans[1].innerText = firstDigit;
            day1stBottomSpans[0].innerText = firstDigit;
            firstDigit--;
            day1stTopSpans[0].innerText = firstDigit;
            day1stBottomSpans[1].innerText = firstDigit;
    
            day2ndTopSpans[1].innerText = secondDigit;
            day2ndBottomSpans[0].innerText = secondDigit;
            secondDigit=9;
            day2ndTopSpans[0].innerText = secondDigit;
            day2ndBottomSpans[1].innerText = secondDigit;
    
            day3rdTopSpans[1].innerText = thirdDigit;
            day3rdBottomSpans[0].innerText = thirdDigit;
            thirdDigit=9;
            day3rdTopSpans[0].innerText = thirdDigit;
            day3rdBottomSpans[1].innerText = thirdDigit;
        }
        else if(thirdDigit > 0) {
            day1stTopSpans[1].innerText = firstDigit;
            day1stBottomSpans[0].innerText = firstDigit;
            day1stTopSpans[0].innerText = firstDigit;
            day1stBottomSpans[1].innerText = firstDigit;
    
            day2ndTopSpans[1].innerText = secondDigit;
            day2ndBottomSpans[0].innerText = secondDigit;
            day2ndTopSpans[0].innerText = secondDigit;
            day2ndBottomSpans[1].innerText = secondDigit;
    
            day3rdTopSpans[1].innerText = thirdDigit;
            day3rdBottomSpans[0].innerText = thirdDigit;
            thirdDigit--;
            day3rdTopSpans[0].innerText = thirdDigit;
            day3rdBottomSpans[1].innerText = thirdDigit;
        }
        else if(secondDigit==0 && firstDigit==0 && thirdDigit==0) {
            day1stTopSpans[1].innerText = firstDigit;
            day1stBottomSpans[0].innerText = firstDigit;
            day1stTopSpans[0].innerText = firstDigit;
            day1stBottomSpans[1].innerText = firstDigit;
    
            day2ndTopSpans[1].innerText = secondDigit;
            day2ndBottomSpans[0].innerText = secondDigit;
            day2ndTopSpans[0].innerText = secondDigit;
            day2ndBottomSpans[1].innerText = secondDigit;
    
            day3rdTopSpans[1].innerText = thirdDigit;
            day3rdBottomSpans[0].innerText = thirdDigit;
            day3rdTopSpans[0].innerText = thirdDigit;
            day3rdBottomSpans[1].innerText = thirdDigit;
        }

    if(hourAllZero){
        if(day2ndTopSpans[1].innerText != day2ndTopSpans[0].innerText)
        {
            setTimeout(()=>{
                day2ndTopSpans[1].classList.remove("rotate-0-first");
                day2ndBottomSpans[1].classList.remove("rotate-90-first");
            },980);
            day2ndTopSpans[1].classList.add("rotate-0-first");
            day2ndBottomSpans[1].classList.add("rotate-90-first");
        }
        if(day1stTopSpans[1].innerText != day1stTopSpans[0].innerText)
        {
            setTimeout(()=>{
                day1stTopSpans[1].classList.remove("rotate-0-first");
                day1stBottomSpans[1].classList.remove("rotate-90-first");
            },980);
            day1stTopSpans[1].classList.add("rotate-0-first");
            day1stBottomSpans[1].classList.add("rotate-90-first");
        }
        if(day3rdTopSpans[1].innerText != day3rdTopSpans[0].innerText)
        {
            setTimeout(()=>{
                day3rdTopSpans[1].classList.remove("rotate-0-first");
                day3rdBottomSpans[1].classList.remove("rotate-90-first");
            },980);
            day3rdTopSpans[1].classList.add("rotate-0-first");
            day3rdBottomSpans[1].classList.add("rotate-90-first");
        }

        hourAllZero= false;
    }
}

const assignTime = function(){
    let currentDate = new Date();
    const newYear = new Date(newYearDate);
    difference = newYear - currentDate;
    // console.log(difference)
    assignSeconds();
    assignMins();
    assignHours();
    assignDays();
}
setInterval(assignTime, 1000);

