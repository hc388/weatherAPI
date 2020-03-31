function gettingweather(city){
    document.title = "Weather Today in "+city;
    var URL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&apikey=637e3c2f05207c3a2db1deebc503f4a0";
    $.getJSON(URL, function(data){
        console.log("QUERY BASED");
        console.log(data);
        updatesDOM(data);

    })


}
function updatesDOM(data){

    var city = data.name;
    var temp = Math.round(data.main.temp_max);
    var desc = data.weather[0].description;
    var icon = data.weather[0].icon;


    var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    document.title = "Weather Today in "+city;
    //con = (HttpURLConnection) ( new URL(IMG_URL + icon +".png")).openConnection();

    $('.city').html(city);
    $('#temp').html(temp);
    $('#desc').html(desc);
    $('#icon').attr('src', iconUrl);
    return 0;

}



$(document).ready(function(){

    navigator.geolocation.getCurrentPosition(success,error);

    function success(pos){
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        weather(lat,long)

    }

    function error(){
        $('.city').css('font-size','1.5rem');
        $('.city').html("ERROR FETCHING DATA.\nPLEASE ENABLE LOCATION SERVICES\n");
        var newParagraph = document.createElement("p");
        newParagraph.innerHTML = "<h3>\nOr you could use the query based search below.</h3>";
        $('.city').after(newParagraph);
        //alert("ERROR FETCHING DATA.\nPLEASE TRY AGAIN");
    }

    function weather(lat, long) {

        var URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&apikey=637e3c2f05207c3a2db1deebc503f4a0`;
        console.log(URL);
        $.getJSON(URL, function(data){
            //console.log(data);
            updatesDOM(data);

        })

    }



});