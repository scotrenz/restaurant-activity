// QUESTION: What is this code doing?
$("#search-btn").on("click", function() {
  var searchedCharacter = $("#character-search").val().trim();

  searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

  // QUESTION: What does $.get do? What are the parameters it is expecting?
  $.get("/api/" + searchedCharacter, function(data) {
    console.log(data);
    if (data) {
      $("#stats").show();
      $("#name").text(data.name);
      $("#role").text(data.role);
      $("#age").text(data.age);
      $("#force-points").text(data.forcePoints);
    }
    else {
      $("#name").text("The force is not strong with this one. Your character was not found.");
      $("#stats").hide();
    }
  });
});