const soldiersSlider = document.getElementById("soldiers");
const soldiersInput = document.getElementById("soldiers-input");
const tanksSlider = document.getElementById("tanks");
const tanksInput = document.getElementById("tanks-input");
const planesSlider = document.getElementById("planes");
const planesInput = document.getElementById("planes-input");
const shipsSlider = document.getElementById("ships");
const shipsInput = document.getElementById("ships-input");
const totalScore = document.getElementById("total-score");

const updateScore = () => {
  const soldiers = Number(soldiersSlider.value);
  const tanks = Number(tanksSlider.value);
  const planes = Number(planesSlider.value);
  const ships = Number(shipsSlider.value);
  const score = soldiers * 0.0004 + tanks * 0.025 + planes * 0.3 + ships * 1;
  totalScore.textContent = `Total Score: ${score}`;
};

soldiersSlider.addEventListener("input", e => {
  soldiersInput.value = e.target.value;
  updateScore();
});

soldiersInput.addEventListener("input", e => {
  soldiersSlider.value = e.target.value;
  updateScore();
});

tanksSlider.addEventListener("input", e => {
  tanksInput.value = e.target.value;
  updateScore();
});

tanksInput.addEventListener("input", e => {
  tanksSlider.value = e.target.value;
  updateScore();
});

planesSlider.addEventListener("input", e => {
  planesInput.value = e.target.value;
  updateScore();
});

planesInput.addEventListener("input", e => {
  planesSlider.value = e.target.value;
  updateScore();
});

shipsSlider.addEventListener("input", e => {
  shipsInput.value = e.target.value;
  updateScore();
});

shipsInput.addEventListener("input", e => {
  shipsSlider.value = e.target.value;
  updateScore();
});

updateScore();
