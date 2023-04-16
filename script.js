const soldiers_slider = document.getElementById("soldiers-slider");
const soldiers_input = document.getElementById("soldiers-input");
const tanks_slider = document.getElementById("tanks-slider");
const tanks_input = document.getElementById("tanks-input");
const planes_slider = document.getElementById("planes-slider");
const planes_input = document.getElementById("planes-input");
const ships_slider = document.getElementById("ships-slider");
const ships_input = document.getElementById("ships-input");
const total_score = document.getElementById("total-score");


const updateScore = () => {
    const soldiers = Number(soldiers_slider.value);
    const tanks = Number(tanks_slider.value);
    const planes = Number(planes_slider.value);
    const ships = Number(ships_slider.value);
    const raw_score = soldiers * 0.0004 + tanks * 0.025 + planes * 0.3 + ships * 1;
    const score = raw_score.toFixed(2);
    total_score.textContent = `Total Score: ${score}`;
};

soldiers_slider.addEventListener("input", e => {
  soldiers_input.value = e.target.value;
  updateScore();
});

soldiers_input.addEventListener("input", e => {
  soldiers_slider.value = e.target.value;
  updateScore();
});

tanks_slider.addEventListener("input", e => {
  tanks_input.value = e.target.value;
  updateScore();
});

tanks_input.addEventListener("input", e => {
  tanks_slider.value = e.target.value;
  updateScore();
});

planes_slider.addEventListener("input", e => {
  planes_input.value = e.target.value;
  updateScore();
});

planes_input.addEventListener("input", e => {
  planes_slider.value = e.target.value;
  updateScore();
});

ships_slider.addEventListener("input", e => {
  ships_input.value = e.target.value;
  updateScore();
});

ships_input.addEventListener("input", e => {
  ships_slider.value = e.target.value;
  updateScore();
});



updateScore();