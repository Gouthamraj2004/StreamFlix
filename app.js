document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel .list .item");
  let currentIndex = 0;

  function showSlide(index) {
    items.forEach((item, i) => {
      item.style.opacity = i === index ? "1" : "0";
      item.style.zIndex = i === index ? "1" : "-1";
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
  }


  setInterval(nextSlide, 3000);
  
  function openTrailer(title) {
    const query = `${title} trailer`;
    window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
  }

  document.querySelectorAll(".trailer-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const title = button.closest('.item').querySelector('h1').textContent;
      openTrailer(title);
    });
  });
});
