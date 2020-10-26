//PARA CARGAR IMÀGENES DESDE NUESTRA CARPETA LOCAL ó DESDE INTERNET LINK
// let aries = "https://www.horoscopedates.com/img/icon_aries.png"
//oder:
// let aries= "assets/img/aquarius-759383_1920.jpg"
// und dann in der Funktion:
// <img src=${aries}>

function horoskop() {

    let zeichen = document.getElementById("month").value;
   
    let text

    switch(zeichen) {
        case "Mar":
        case "mar":
        case "March":
        case "march":
            text = `<h1>Your horoscope is Aries</h1>
            <img src="https://www.horoscopedates.com/img/icon_aries.png">
            <p>Today your patience might be tested when one or more of your projects gets put on hold by someone…</p>`
            break;

        case "Apr":
        case "apr":
        case "April":
        case "april":
            text = `<h1>Your horoscope is Taurus</h1>
            <img src="https://www.horoscopedates.com/img/icon_taurus.png">
            <p>Your intense energy makes you a great candidate for a leadership position right now, so if you are…</p>`
            break;
        

        case "May":
        case "may":
            text = `<h1>Your horoscope is Gemini</h1>
            <img src="https://www.horoscopedates.com/img/icon_gemini.png">
            <p>If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…
            </p>`
            break;

        case "June":
        case "june":
        case "Jun":
        case "jun":
            text = `<h1>Your horoscope is Cancer</h1>
            <img src="https://www.horoscopedates.com/img/icon_cancer.png">
            <p>Too many different elements in your life are overlapping with each other right now—and it's your...</p>`
            break;


        case "July":
        case "july":
        case "Jul":
        case "jul":
            text = `<h1>Your horoscope is Leo</h1>
            <img src="https://www.horoscopedates.com/img/icon_leo.png">
            <p>The issues you'll be dealing with today are very complicated ones—you will have to navigate your…
            </p>`
            break;

        case "August":
        case "august":
        case "Aug":
        case "aug":
            text = `<h1>Your horoscope is Virgo</h1>
            <img src="https://www.horoscopedates.com/img/icon_virgo.png">
            <p>You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…
            </p>`
            break;   


        case "Sep":
        case "sep":
        case "Sept":
        case "sept":
        case "September":
        case "september":
            text = `<h1>Your horoscope is Libra</h1>
            <img src="https://www.horoscopedates.com/img/icon_libra.png">
            <p>Pick a cultural event that's coming up and get some tickets for it today.</p>`
            break;

        case "Oct":
        case "oct":
        case "October":
        case "october":
            text = `<h1>Your horoscope is Scorpio</h1>
            <img src="https://www.horoscopedates.com/img/icon_scorpio.png">
            <p>Someone will challenge a belief that you've held for a very long time today—and they will say an…</p>`
            break;

        case "Nov":
        case "nov":
        case "November":
        case "november":
            text = `<h1>Your horoscope is Sagitarius</h1>
            <img src="https://www.horoscopedates.com/img/icon_sagittarius.png">
            <p>Someone in your life needs to step up and take on more responsibility—and you need to tell them to....
            </p>`
            break;

        case "Dec":
        case "dec":
        case "December":
        case "december":
            text = `<h1>Your horoscope is Capricorn</h1>
            <https://www.horoscopedates.com/img/icon_capricorn.png">
            <p>Breaking the rules is not always a bad thing—especially if the rules limit your creativity. </p>`
            break;

        case "Jan":
        case "jan":
        case "January":
        case "january":
            text = `<h1>Your horoscope is Aquarius</h1>
            <https://www.horoscopedates.com/img/icon_aquarius.png">
            <p>Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…</p>`
            break;


        case "Feb":
        case "feb":
        case "February":
        case "february":
            text = `<h1>Your horoscope is Pisces</h1>
            <https://www.horoscopedates.com/img/icon_pisces.png">
            <p>Communication is very important today—written, spoken, and even nonverbal body language will all…</p>`
            break;



        default:
            text= `<h2 class="default__text">Please write your month of birth in the box to check your horoscope!</h2>`;
    }
    document.getElementById("horoskopZeichen").innerHTML = text;

    document.getElementById("horoskopZeichen").style.marginTop="3vh"
    document.getElementById("horoskopZeichen").style.padding="5vh 0"
}