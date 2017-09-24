function search() {
    $("#searchResults").empty();
    var s = $("#searchBox").val();
    var wikiAPI = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+ s +"&prop=revisions&rvprop=content&format=json&callback=?";
  
    $.getJSON(wikiAPI).done( function(data) {
      //var decoded = $("<div/>").html(data.query.search[0].title).text();
      
      for (var i = 0; i < data.query.search.length; i++) {
        var title = data.query.search[i].title;
        var snippet = data.query.search[i].snippet;
        
        $("#searchResults").append("<a href=https://en.wikipedia.org/wiki/" + encodeURIComponent(title) + " target='_blank'><div class='result'><p class='title'><b>" + title + "</b></p><p class='snippet'>" + snippet + "</p></div></a>");
      }
    });
  };
  
  $("#search").on("click", function(event) {
    event.preventDefault();
    search();
  }); 
  
  
  $("#searchBox").keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      search();
    }
  });