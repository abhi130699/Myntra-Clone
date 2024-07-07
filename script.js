function showMenu(){
    const menu = document.querySelector(".menu")
    menu.style.display = "flex"
  }
  function hideMenu(){
    const menu = document.querySelector(".menu")
    menu.style.display = "none"
  }
  var owl = $('.owl-carousel');
owl.owlCarousel({
  items:6,
  loop:true,
  autoplay:true,
  autoplayTimeout:10000,
});