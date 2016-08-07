jQuery("#High Scores").on("click", function registerScore() {
  console.log(score);
  console.log(highscoreList);
  gameResult = {player: playerName, score: score};
  highscoreList.push(gameResult);
  highscoreList.sort(function(a,b) { return (b.score - a.score ) });
  if (score == highscoreList[0].score && score>1) {
    jQuery("#content").empty();
    playerName = prompt("You got a high score! What is your name?");
    jQuery("#content").append(
      "<ul>" +
        "<li>"+ playerName + ":" + score + "<li>" +
      "</ul>");
  }
}
);

jQuery("#credits").on("click", function() {
  var message = "Game created by Neeraj";
  jQuery("#content").empty();
  jQuery("#content").append(
    "<div>"+ message + "</div>"
  );
});

jQuery("#help").on("click", function() {
  jQuery("#content").empty();
  jQuery("#content").append(
    "<ol>" +
          "<li>" + "Press SPACE to go up" + "</li>" +
          "<li>" + "Avoid the incoming pipes" + "</li>" +
    "</ol>"
  );
});

function registerScore(score) {
  console.log(score);
  console.log(highscoreList);
  gameResult = {player: playerName, score: score};
  highscoreList.push(gameResult);
  highscoreList.sort(function(a,b) { return (b.score - a.score ) });
  if (score == highscoreList[0].score && score>1) {
    jQuery("#content").empty();
    playerName = prompt("You got a high score! What is your name?");
    jQuery("#content").append(
      "<ul>" +
        "<li>"+ playerName + ":" + score + "<li>" +
      "</ul>")
  }
}
