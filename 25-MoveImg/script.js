document.addEventListener('DOMContentLoaded', function () {
  const movingImage = document.getElementById('movingImage');
  let positionX = 0;
  let positionY = 0;

  document.addEventListener('keydown', function (event) {
    switch (event.key) {
      case 'ArrowUp':
        positionY -= 10;
        break;
      case 'ArrowDown':
        positionY += 10;
        break;
      case 'ArrowLeft':
        positionX -= 10;
        break;
      case 'ArrowRight':
        positionX += 10;
        break;
    }

    movingImage.style.transform = `translate(${positionX}px, ${positionY}px)`;
  });
});
