document.addEventListener('DOMContentLoaded', function () {
  window.onscroll = function () {
    updateProgressBar();
  };

  function updateProgressBar() {
    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    const documentHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;

    document.getElementById('myProgressBar').style.width =
      scrollPercentage + '%';
  }
});
