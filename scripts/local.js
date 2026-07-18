const currentYearElement =
  document.querySelector("#currentyear");

const lastModifiedElement =
  document.querySelector("#lastModified");

const temperatureElement =
  document.querySelector("#temperature");

const windSpeedElement =
  document.querySelector("#wind-speed");

const windChillElement =
  document.querySelector("#windchill");

/*
  Valores estáticos usados na página.
*/

const temperature = 24;
const windSpeed = 15;

/*
  Função exigida na atividade.
*/

function calcularSensacaoTermica(temperatura, velocidadeVento) {
  return 13.12
    + 0.6215 * temperatura
    - 11.37 * velocidadeVento ** 0.16
    + 0.3965 * temperatura * velocidadeVento ** 0.16;
}

/* Mostra a temperatura e o vento */

temperatureElement.textContent = temperature;
windSpeedElement.textContent = windSpeed;

/* Mostra o ano atual */

currentYearElement.textContent =
  new Date().getFullYear();

/* Mostra a última modificação */

lastModifiedElement.textContent =
  `Última modificação: ${document.lastModified}`;

/*
  A função só será chamada quando:
  temperatura <= 10 °C
  vento > 4,8 km/h
*/

if (temperature <= 10 && windSpeed > 4.8) {
  const windChill =
    calcularSensacaoTermica(temperature, windSpeed);

  windChillElement.textContent =
    `${windChill.toFixed(1)} °C`;
} else {
  windChillElement.textContent = "N/A";
}