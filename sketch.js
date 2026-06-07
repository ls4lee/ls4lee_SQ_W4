// ============================================================
// sketch.js: p5.js Global Interface Event Engine Loop
// ============================================================

function setup() {
  createCanvas(850, 480);
  textFont("monospace");
}

function draw() {
  drawBackground();

  let activeData = STORY_REGISTRY[currentSceneId];
  if (activeData) {
    renderAdventureScreen(activeData);
  }
}

function mousePressed() {
  let activeData = STORY_REGISTRY[currentSceneId];
  if (!activeData) return;

  if (activeData.choices && activeData.choices.length > 0) {
    for (let i = 0; i < activeData.choices.length; i++) {
      let btnX = (i === 0) ? width / 4 + 40 : (3 * width) / 4 - 40;
      let btnY = 380;
      let btnW = 300;
      let btnH = 65;

      if (isMouseOver(btnX, btnY, btnW, btnH)) {
        navigateToScene(activeData.choices[i].nextId);
        break;
      }
    }
  } else {
    // End node button box tracking coordinates
    let btnX = width / 2;
    let btnY = 390;
    let btnW = 260;
    let btnH = 55;

    if (isMouseOver(btnX, btnY, btnW, btnH)) {
      restartAdventure();
    }
  }
}