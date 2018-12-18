var navToggle = document.querySelector('.nav-toggle');
var navToggleInner = document.querySelector('.nav-toggle-inner');
var offPageNav = document.querySelector('.off-page');
var body = document.querySelector('body');
var mastHead = document.querySelector('#mast-head');
var navLinks = document.getElementsByClassName('nav-link')
var hoverCount = 0;

function delayDisplay () {
  setTimeout(function () {
    body.classList.toggle('no-scroll'); }, 360)
}

function toggleMenu() {

  if (hoverCount === 0) {hoverCount = 1;
    delayDisplay();
  } else { hoverCount = 0;
    navToggleInner.classList.remove('nav-open');
    body.classList.toggle('no-scroll'); }

  offPageNav.classList.toggle('on-page');
  mastHead.classList.toggle('on-nav');
  navToggle.classList.toggle('close-nav');

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.toggle('move-in')
  }

  offPageNav.addEventListener('mouseenter', function () {
  navToggleInner.classList.add('nav-open');  })

}

if (document.location.href==="https://dereckachy.github.io/dereckachystudios") {
  var heroTextSvg = document.querySelector('#hero-text-svg');

  if (matchMedia) {
    var mq = window.matchMedia("(max-width: 480px)")
    mq.addListener(widthChange)
    widthChange(mq)
  }

  function widthChange() {
  }

}

if (document.location.href==="https://dereckachy.github.io/dereckachystudios/contact/") {

  var inputGroup = document.getElementsByClassName('input-group');
  var textBox = document.querySelector('#text-area');
  var hiddenTextBox = document.querySelector('#hidden-text-box');

  for (var i = 0; i < inputGroup.length; i++) {
    inputGroup[i].addEventListener('click', function (event) {
      this.firstElementChild.focus();
      this.children[2].firstElementChild.style.transformOrigin = ''+ event.offsetX +'px center 0px'
    })
  }

  for (var  i = 0; i < inputGroup.length; i++) {
    inputGroup[i].firstElementChild.addEventListener('blur', function () {
      this.parentElement.children[2].firstElementChild.style.transformOrigin = ''
        if (this.value !== "") { this.classList.add('has-text');}
        else { this.classList.remove('has-text'); }
    })
  }

}
