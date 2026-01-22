const player = document.getElementById("player");
const missionBox = document.getElementById("missionBox");

let speed = 5;
let x = 200;
let y = 200;
let active = false;

/* BUTTON CONNECTION (IMPORTANT FIX) */
document.getElementById("btn1").onclick = () => chooseCharacter(1);
document.getElementById("btn2").onclick = () => chooseCharacter(2);
document.getElementById("btn3").onclick = () => chooseCharacter(3);

function chooseCharacter(id) {
  active = true;
  player.style.display = "block"; // SHOW PLAYER

  if (id === 1) {
    speed = 7;
    player.style.background = "#ff595e";
    missionBox.innerText = "🏃 Runner selected! Move fast!";
  }

  if (id === 2) {
    speed = 4;
    player.style.background = "#8ac926";
    missionBox.innerText = "🏗 Builder selected! Move carefully!";
  }

  if (id === 3) {
    speed = 5;
    player.style.background = "#1982c4";
    missionBox.innerText = "🧠 Thinker selected! Explore wisely!";
  }

  updatePlayer();
}

/* MOVEMENT */
document.addEventListener("keydown", (e) => {
  if (!active) return;

  if (e.key === "ArrowUp" || e.key === "w") y -= speed;
  if (e.key === "ArrowDown" || e.key === "s") y += speed;
  if (e.key === "ArrowLeft" || e.key === "a") x -= speed;
  if (e.key === "ArrowRight" || e.key === "d") x += speed;

  x = Math.max(0, Math.min(window.innerWidth - 50, x));
  y = Math.max(70, Math.min(window.innerHeight - 50, y));

  updatePlayer();
});

function updatePlayer() {
  player.style.left = x + "px";
  player.style.top = y + "px";
}
