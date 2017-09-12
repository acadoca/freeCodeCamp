function twt() {
    
      var text = "https://twitter.com/intent/tweet?text=";
      $.getJSON("https://talaikis.com/api/quotes/random/", function(data) {
        $("#quote-source").html("<em>" + data["author"] + "</em>");
        $("#quote-content").html(data["quote"]);
        
        text += encodeURIComponent(data["quote"] + " " + data["author"]);
      $("#tweet").attr("href", text);
      });
    }
    
    $(document).ready(twt);
    
    $("#next").on("click", twt);
    