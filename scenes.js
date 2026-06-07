// ============================================================
// scenes.js: Canvas UI Component Drawing Rules
// ============================================================

function drawBackground() {
  background(15, 15, 22);
}

function renderAdventureScreen(sceneData) {
  // Level Tracking Tag Line
  push();
  noStroke();
  fill(110, 120, 140);
  textSize(13);
  textAlign(CENTER);
  text("LEVEL " + sceneData.level + " • PHASE: " + sceneData.type.toUpperCase(), width / 2, 40);
  
  stroke(35, 40, 55);
  strokeWeight(2);
  line(50, 55, width - 50, 55);

  // Scene Header Text Frame (Color matches outcome polarity)
  noStroke();
  if (sceneData.type === "win") {
    fill(46, 204, 113); // Positive Green
  } else if (sceneData.type === "lose") {
    fill(231, 76, 60); // Negative Red
  } else {
    fill(241, 196, 15); // Neutral Yellow
  }
  
  textSize(26);
  textAlign(CENTER);
  text(sceneData.title, width / 2, 100);

  // Body Block Text Wrap Setup
  fill(215, 220, 235);
  textSize(15);
  textAlign(CENTER);
  textLeading(26);
  text(sceneData.narrative, 80, 145, width - 160, 180);
  pop();

  // Dynamic Button Render Block
  if (sceneData.choices && sceneData.choices.length > 0) {
    for (let i = 0; i < sceneData.choices.length; i++) {
      let choice = sceneData.choices[i];
      let btnX = (i === 0) ? width / 4 + 40 : (3 * width) / 4 - 40;
      let btnY = 380;
      let btnW = 300;
      let btnH = 65;

      let hovered = isMouseOver(btnX, btnY, btnW, btnH);
      drawChoiceButton(btnX, btnY, btnW, btnH, choice.text, hovered, sceneData.type);
    }
  } else {
    // Ending Screen Reset Trigger Button
    let btnX = width / 2;
    let btnY = 390;
    let btnW = 260;
    let btnH = 55;
    let hovered = isMouseOver(btnX, btnY, btnW, btnH);
    
    drawChoiceButton(btnX, btnY, btnW, btnH, "TRY ANOTHER PATH", hovered, "reset");
  }
}

function drawChoiceButton(x, y, w, h, label, isHovered, sceneType) {
  push();
  rectMode(CENTER);
  
  // Custom Color Selection Framework Based on Positive/Negative Outcomes
  if (sceneType === "win") {
    fill(isHovered ? color(39, 174, 96) : color(27, 128, 68)); // Green spectrum
    stroke(46, 204, 113);
  } else if (sceneType === "lose") {
    fill(isHovered ? color(192, 41, 43) : color(139, 30, 31)); // Red spectrum
    stroke(231, 76, 60);
  } else if (sceneType === "reset") {
    fill(isHovered ? color(127, 140, 141) : color(52, 73, 94)); // Utility grey/blue
    stroke(149, 165, 166);
  } else {
    fill(isHovered ? color(40, 45, 60) : color(24, 26, 36)); // Base game option layout
    stroke(isHovered ? color(241, 196, 15) : color(60, 75, 100));
  }
  
  strokeWeight(2);
  rect(x, y, w, h, 6);

  // Label text formatting inside the button box boundary
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(12);
  text(label.toUpperCase(), x, y - 1, w - 24, h - 10);
  pop();
}

function isMouseOver(x, y, w, h) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}