$(document).ready(function() {
    _init();
});

function _init() {
    _renderCarouselImages();
    _addMovieListItems();
    _addTrendingMovieListItems();
    _showSlides();
    _slider();
    _slider_1();
    _toggleEffect();
}


function _renderCarouselImages() {
    let wrapperEl = $('.content-container');
    let docFragment = document.createDocumentFragment();
    $.each(carouselJSON, function(idx, item) {

        // style="background: linear-gradient(to bottom, rgba(0,0,0,0), #151515), url('images/f-1.jpg');"
        let styleStr = 'background: linear-gradient(to bottom, rgba(0,0,0,0), #151515), url("'+item.backgroundImage+'");';
    
        let el = document.createElement('div');
        el.className = 'featured-content';
        el.style = styleStr;
        let itemStr = '<img class="featured-title" src="'+item.featureTitleImage+'" alt=""></img>';
            itemStr += '<p class="featured-desc">'+item.featureDesc+'</p>';
            itemStr += '<a class="featured-button" href="'+item.buttonURL+'" target="_blank">'+item.buttonText+'</a>';

        el.innerHTML = itemStr;
        docFragment.append(el);
    });
    wrapperEl.append(docFragment);
}




function _addMovieListItems() {
  let wrapperEl = $('.movie-list');
    let docFragment = document.createDocumentFragment();
    $.each(movieListItemJSON, function(idx, item) {
    
        let el = document.createElement('div');
        el.className = 'movie-list-item';
        let itemStr = '<img class="movie-list-item-img" src="'+item.itemImage+'" alt="First Movie Item Image">';
            itemStr += '<span class="movie-list-item-title">'+item.itemTitle+'</span>';
            itemStr += '<p class="movie-list-item-desc">'+item.itemDesc+'</p>';
            itemStr += '<a class="movie-list-item-button" href="'+item.buttonURL+'" target="_blank">'+item.buttonText+'</a>'

        el.innerHTML = itemStr;
        docFragment.append(el);
    });
    wrapperEl.append(docFragment);
}

function _addTrendingMovieListItems() {
  let wrapperEl = $('.movie-list-1');
    let docFragment = document.createDocumentFragment();
    $.each(trendingListJSON, function(idx, item) {
    
        let el = document.createElement('div');
        el.className = 'movie-list-item';
        let itemStr = '<img class="movie-list-item-img" src="'+item.itemImage+'" alt="First Movie Item Image">';
            itemStr += '<span class="movie-list-item-title">'+item.itemTitle+'</span>';
            itemStr += '<p class="movie-list-item-desc">'+item.itemDesc+'</p>';
            itemStr += '<a class="movie-list-item-button" href="'+item.buttonURL+'" target="_blank">'+item.buttonText+'</a>'

        el.innerHTML = itemStr;
        docFragment.append(el);
    });
    wrapperEl.append(docFragment);
}



var slideIndex = 0;

// Next/previous controls
function plusSlides(n) {
  _showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  _showSlides(slideIndex = n);
}


function _showSlides() {
  var i;
  var slides = document.getElementsByClassName("featured-content");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(_showSlides, 4000); // Change image every 4 seconds
}



function _slider() {
  const arrows = document.querySelectorAll(".arrow");
  const movieLists = document.querySelectorAll(".movie-list");

  arrows.forEach((arrow, idx) => {
    const itemNumber = movieLists[idx].querySelectorAll("img").length;
    
    let clickCounter = 0;
    arrow.addEventListener("click", ()=> {
      const ratio = Math.floor(window.innerWidth / 270);
      
      clickCounter++;
      if(itemNumber - (5 + clickCounter) + (5 - ratio) >= 0) {
        movieLists[idx].style.transform = `translateX(${
          movieLists[idx].computedStyleMap().get("transform")[0].x.value
        -310}px)`;
      } else {
        movieLists[idx].style.transform = "translateX(0)";
        clickCounter = 0;
      }
    });

  });
}

function _slider_1() {
  const arrows = document.querySelectorAll(".arrow-1");
  const movieLists = document.querySelectorAll(".movie-list-1");

  arrows.forEach((arrow, idx) => {
    const itemNumber = movieLists[idx].querySelectorAll("img").length;
    
    let clickCounter = 0;
    arrow.addEventListener("click", ()=> {
      const ratio = Math.floor(window.innerWidth / 270);
      
      clickCounter++;
      if(itemNumber - (5 + clickCounter) + (5 - ratio) >= 0) {
        movieLists[idx].style.transform = `translateX(${
          movieLists[idx].computedStyleMap().get("transform")[0].x.value
        -310}px)`;
      } else {
        movieLists[idx].style.transform = "translateX(0)";
        clickCounter = 0;
      }
    });

  });
}


function _toggleEffect() {
  const ball = document.querySelector(".toggle-scroll");
  const items = document.querySelectorAll(
    ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.footer-top,.toggle"
  );

  ball.addEventListener("click", ()=> {
    //adding active class for all items
    items.forEach(item=> {
      item.classList.toggle("active");
    });
    ball.classList.toggle("active");
  });
}

