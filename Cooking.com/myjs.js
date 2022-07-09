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
  let prev = document.querySelectorAll('.prev');
  let next = document.querySelectorAll('.next');
  let displayScroll = document.querySelectorAll('.slider-items');
  let mediaQuery = window.matchMedia('(min-width: 1024px)')

  if (mediaQuery.matches) {
    for (let i = 0; i < displayScroll.length; i++) {
      prev[i].classList.remove('hidden')
      next[i].classList.remove('hidden')

      prev[i].addEventListener('click', function () {
        displayScroll[i].scrollLeft -= window.innerWidth;
      })
      next[i].addEventListener('click', function () {
        displayScroll[i].scrollLeft += window.innerWidth;
      })
    }
  }

  //LazyLoad
  const loading = document.querySelectorAll('img');

  for (const lazy of loading) {
    lazy.setAttribute('loading', 'lazy');
  }