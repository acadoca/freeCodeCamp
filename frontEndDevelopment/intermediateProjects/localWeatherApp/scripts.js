var lat;
var lon;

window.onload = function() {
  var startPos;
  var geoSuccess = function(position) {
    startPos = position;
    lat = startPos.coords.latitude;
    lon = startPos.coords.longitude;
    // insert here 
    $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+ lat+"&lon="+lon, function(data) {
      //$("#").html("");
      $("#city").text(data.name + ", " + data.sys.country);
      $("#deg").text(data.main.temp);
      $("#sign").html("&deg;C");
      $("#weather").html(data.weather[0].main);
      $("#icon").html("<img src='" + data.weather[0].icon + "' alt='weather'>");
    });   
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
};


$("#change").on("click", function() {
  if ($("#change").attr("name") == "far") {
    $("#deg").text($("#deg").text() * 9 / 5 + 32);
    $("#sign").html(" &deg;F");
    $("#change").text("To Celsius");
    $("#change").attr("name", "cel");
  } else if ($("#change").attr("name") == "cel") {
    $("#deg").text(($("#deg").text() - 32) * 5 / 9);
    $("#sign").html(" &deg;C");
    $("#change").text("To Farenheith");
    $("#change").attr("name", "far");
  }
});