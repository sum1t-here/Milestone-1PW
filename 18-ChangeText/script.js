document.addEventListener('DOMContentLoaded', function () {
  // Wait for the DOM content to be fully loaded

  var initialText = document.querySelector('.initialText');
  var toggleButton = document.querySelector('.toggle');

  toggleButton.addEventListener('click', function () {
    initialText.textContent =
      initialText.textContent === 'The most affordable learning platform'
        ? 'PW Skills'
        : 'The most affordable learning platform';
  });
});
