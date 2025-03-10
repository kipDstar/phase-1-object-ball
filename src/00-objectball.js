function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points:24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamdunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
};
console.log(gameObject());
function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
  
  console.log(homeTeamName());
  // logs "Brooklyn Nets"
function numpointsScored(playerName) {
    let object = gameObject();
    return object["home"]["players"][playerName]["points"];
  }
  console.log(numpointsScored("Alan Anderson"));
// logs points scored by the specified player
function shoeSize(playerName) {
    return gameObject().home.players[playerName].shoe;
}
console.log(shoeSize("Alan Anderson"));
// logs shoe size of the specified player
function teamcolors(teamName) {
    let object = gameObject();
    if (object["home"]["teamName"] === teamName) {
      return object["home"]["colors"];
    } else {
      return object["away"]["colors"];
    }
  }
  console.log(teamcolors("Brooklyn Nets"));
  // logs team colors of the specified team
function playerNumbers(teamName) {

}
function playerStats(playerName) {
    for (let key in gameObject().home.players) {
        if (key === playerName) {
            return gameObject().home.players[key];
        } else {
            return gameObject().away.players[key];
        }
        }
    }
    console.log(playerStats("Alan Anderson"));
// logs stats of the specified player
function bigShoeRebounds() {
    let biggestShoe = 0;
    let rebounds = 0;
    for (let key in gameObject().home.players()) {
        if (gameObject().home.players[key].shoe > biggestShoe) {
            biggestShoe = gameObject().home.players[key].shoe;
            rebounds = gameObject().home.players[key].rebounds;
        } else {
            biggestShoe = gameObject().away.players[key].shoe;
            rebounds = gameObject().away.players[key].rebounds;
        } 
    }
}
console.log(bigShoeRebounds());
// logs rebounds of the player with the biggest shoe size