var city="Delhi";
$.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID=bdfde87ea97cb92840e65007722d060b",
    function(data){
     console.log(data);
     var icon="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
     var temp=data.main.temp;
     var weather=data.weather[0].main;
     var description=data.name;
     $('.icon').attr("src",icon);
     $(".weather").append(weather);
     $(".temp").append(temp);
     $(".des").append(description);
});