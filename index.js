console.log;

function convertToCelsius(ftemp) {
  let ctemp = ftemp - 32;
  ctemp = ctemp * (5 / 9);
  return ctemp;
}

console.log(convertToCelsius(20));

function describeTemperature(ftemp) {
  let ctemp = convertToCelsius(ftemp);

  if (ctemp < 0) {
    return "brrr";
  } else if (ctemp < 20) {
    return "cold";
  } else if (ctemp < 30) {
    return "warm";
  } else if (ctemp < 40) {
    return "hot";
  } else {
    return "sweaty";
  }
}

console.log(describeTemperature(90));

function promptUser() {
  const ftemp = prompt("enter a Farenheit temperature.");
  const response =
    convertToCelsius(ftemp) + "°C that's " + describeTemperature(ftemp) + "!";
  alert(response);
}
promptUser();
