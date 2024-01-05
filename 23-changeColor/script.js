document.addEventListener('DOMContentLoaded', function () {
  const colorArray = [
    '#3498db',
    '#e74c3c',
    '#2ecc71',
    '#f39c12',
    '#9b59b6',
    '#1abc9c',
    '#d35400',
  ];

  const colorButton = document.getElementById('colorButton');

  colorButton.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    const randomColor = colorArray[randomIndex];

    document.body.style.backgroundColor = randomColor;
  });
});
