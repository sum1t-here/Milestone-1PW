// A local weather station needs to convert temperature data collected from celcius to farhenheit
// before displaying it on it's website. They want a function that can convert celcius to
// farhenheit accurately and efficiently. The function should take input in celsius and
// display it's output in farhenheit

function celciusToFarhenheit(tempInCelcius) {
  console.log(`The temperature provided in Celcius is ${tempInCelcius} C`);

  const tempInFarhenHeit = tempInCelcius * (9 / 5) + 32;

  console.log(`The temperature in Farhenheit is ${tempInFarhenHeit} F`);
}

celciusToFarhenheit(60);

// The temperature provided in Celcius is 60 C
// The temperature in Farhenheit is 140 F
