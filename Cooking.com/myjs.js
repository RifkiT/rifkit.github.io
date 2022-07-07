  // hidden menu
  const menu = document.querySelector('#menu-icon');
  const hidden = document.querySelector('.nav-menu');

  menu.addEventListener('click', function (e) {
      e.preventDefault();
      hidden.classList.toggle('hidden');
  })


  // search
  let searchIcon = document.querySelector('#search-icon');
  let search = document.querySelector('#search');

  searchIcon.addEventListener('click', function () {
      searchIcon.style.transform = 'scale(0)';
      search.style.width = '300px';
      search.style.height = '40px';
  })

  window.addEventListener('scroll', function () {
      searchIcon.style.transform = '';
      search.style.width = '';
      search.style.height = '';
  });

  // slider
  let scrollLeft = document.getElementById('btn-left');
  let scrollRight = document.getElementById('btn-right');
  let displayScroll = document.getElementById('slider-container');
  let mediaQuery = window.matchMedia('(min-width: 1024px)')

  if(mediaQuery.matches){
    scrollLeft.classList.remove('hidden');
    scrollRight.classList.remove('hidden');

    scrollLeft.addEventListener('click', function(){
        displayScroll.scrollLeft -= window.innerWidth;
    });
    scrollRight.addEventListener('click', function(){
        displayScroll.scrollLeft += window.innerWidth;
    }); 
  }
