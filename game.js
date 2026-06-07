// ============================================================
// game.js: Routing and State Management Registry
// ============================================================

let currentSceneId = "START";

// Maps structural string lookup codes to loaded global data objects
const STORY_REGISTRY = {
  "START": scene1Start,
  "OSTRICH_BRANCH": scene2aOstrich,
  "ROCK_BRANCH": scene2bRock,
  "NEST_INFILTRATION": scene3aNest,
  "EGG_TACTICS": scene3bEggs,
  "IRON_PARADISE": scene3cGym,
  "ROCK_BETRAYAL": scene3dBetrayal,
  "END_WIN_OSTRICH_1": endingWinOstrich1,
  "END_WIN_OSTRICH_2": endingWinOstrich2,
  "END_LOSE_OSTRICH_1": endingLoseOstrich1,
  "END_LOSE_OSTRICH_2": endingLoseOstrich2,
  "END_WIN_ROCK_1": endingWinRock1,
  "END_LOSE_ROCK_1": endingLoseRock1,
  "END_WIN_SOLO": endingWinSolo,
  "END_LOSE_SOLO": endingLoseSolo
};

function navigateToScene(nextSceneId) {
  if (STORY_REGISTRY[nextSceneId]) {
    currentSceneId = nextSceneId;
  } else {
    console.error("Missing Scene Path Target ID: " + nextSceneId);
  }
}

function restartAdventure() {
  currentSceneId = "START";
}