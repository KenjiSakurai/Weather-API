


//Hämtar data från Weather API sidan med hjälp av min key
$.get( "https://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&appid=eb05bb1d4707c64657317872a9e34b52", function( data ) {

//Ett flertal "let" statements där jag hämtar datan och döper om den till enklare namn.
//location och icon fungerar inte, förmodligen på grund av fel hämtning av data. 
let location = Math.floor(data.name)
let icon = Math.floor(data.weather.icon)
let Temp = Math.floor(data.main.temp)
let minTemp = Math.floor(data.main.temp_min)
let maxTemp = Math.floor(data.main.temp_max)
let humdity = Math.floor(data.main.humidity)
let winSped = Math.floor(data.wind.speed)

//Ett försök att få icon att komma upp på sidan men det fungerade inte.
let imgsrc = "http://openweathermap.org/img/wn/" + icon + ".png";

//Ett flertal rader kod som ändrar texten på html objekten till datan från API sidan.
$("#location").html(location)
$("#icon").attr('src', imgsrc)
$("#temp").html(Temp)
$( "#min" ).html( minTemp )
$( "#max" ).html( maxTemp )
$( "#humidity" ).html( humdity )
$( "#windspeed" ).html( winSped )

//Lägger in datan i console.
console.log(data);  
});


