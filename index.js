//  explore India javascript

  const covers = document.querySelectorAll('.cover');
  let currentIndex = 0;

  function showNextCover() {
    covers[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % covers.length;
    covers[currentIndex].classList.add('active');
  }
  setInterval(showNextCover, 3000); // Change cover every 3 seconds
