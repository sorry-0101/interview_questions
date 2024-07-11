tournamentWinner(
  [
    ["html", "c#"],
    ["c#", "python"],
    ["python", "html"],
  ],
  [0, 0, 1]
);

function tournamentWinner(competition, results) {
    let currentBestTeam=''
  scoreBoard = { [currentBestTeam]: 0 };
  for (i = 0; i < competition.length; i++) {
    let result = results[i];
    const [homeTeam, awayTeam] = competition[i];
    let winningTeam = result == 1 ? homeTeam : awayTeam;
    updateScores(winningTeam, 3, scoreBoard);
    if (scoreBoard[winningTeam] > scoreBoard[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  console.log(currentBestTeam);
}

function updateScores(team, point, scores) {
  if (!scores[team]) {
    scores[team] = 0;
  }
    scores[team] += point;
  
}
