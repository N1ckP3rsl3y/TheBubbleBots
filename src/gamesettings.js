var slider = document.getElementById("difficultlevel");
var output = document.getElementById("demo");
output.innerHTML = getSliderValue(slider.value);

slider.oninput = function () {
  output.innerHTML = getSliderValue(this.value);
};

function getSliderValue(value) {
  switch (value) {
    case "0":
      return "EASY";
    case "1":
      return "MEDIUM";
    case "2":
      return "GRAND MASTER";
    default:
      return "";
  }
}
