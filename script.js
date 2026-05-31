function searchStation(){

  const station =
    document.getElementById("stationInput").value;

  document.getElementById("result").innerHTML = `
    <h2>${station}駅</h2>

    <h3>山手線</h3>

    07:01<br>
    07:04<br>
    07:07<br>
    07:10
  `;
}
