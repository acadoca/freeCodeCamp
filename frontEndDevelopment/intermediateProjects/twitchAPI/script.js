var streamArr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

for (var i = 0; i < streamArr.length; i++) {
    $.getJSON("https://wind-bow.glitch.me/twitch-api/users/" + streamArr[i], function( json ) {
        var txt = "<a href='http://www.twitch.tv/" + json.display_name + "'><div id='" + json.display_name + "' class='stream row m-3 p-3'>";

        if (!json.logo) {
            txt += "<div class='col-2'><img class='img-fluid' src=' http://liferay.github.io/clay/images/thumbnail_placeholder.gif' alt='" + json.display_name + "'></div>";
        } else {
            txt += "<div class='col-2'><img class='img-fluid' src='" + json.logo + "' alt='" + json.display_name + "'></div>";
        }

        txt += "<div class='col-10'><p class='font-weight-bold'>" + json.display_name + "</p>";
        // fali jedan div
        var name = json.display_name;
        $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + json.display_name, function(data) {
            
            if (!data.stream) {
                txt += "<p class='font-italic'>Offline</p></div>";  
            } else {
                txt +="<p>Game: " + data.stream.game + "</p><p class='font-italic'>" + data.stream.channel.status + "</p></div>";
            }
            txt += "</div></a>";
            $("#streamers-list").append(txt);
            
            if (!data.stream) {
                $("#" + name).addClass("off");  
            } else {
                $("#" + name).addClass("on");
            }
        });
    });
}