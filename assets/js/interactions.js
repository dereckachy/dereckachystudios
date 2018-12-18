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

if (document.location.href==="http://localhost:7880/html/pages/") {
  var heroTextSvg = document.querySelector('#hero-text-svg');

  if (matchMedia) {
    var mq = window.matchMedia("(max-width: 480px)")
    mq.addListener(widthChange)
    widthChange(mq)
  }

  function widthChange() {
  }

}

if (document.location.href==="http://localhost:7880/html/pages/contact/") {

  var inputGroup = document.getElementsByClassName('input-group');
  var textBox = document.querySelector('#text-area');
  var hiddenTextBox = document.querySelector('#hidden-text-box');

  for (var i = 0; i < inputGroup.length; i++) {
    inputGroup[i].addEventListener('click', function (event) {
      this.firstElementChild.focus();
      this.children[2].firstElementChild.style.transformOrigin = ''+ event.offsetX +'px center 0px'
            // body.classList.add('no-scroll');
    })

    // inputGroup[i].firstElementChild.addEventListener('focus', function () {
    //   console.log(i)
    //   if (this.classList.contains('in-focus')) {}
    //   else { this.parentElement.classList.add('in-focus')
    //          this.parentElement.classList.remove('invisible')
    //          this.parentElement.parentElement.classList.add('in-focus')
    //          this.parentElement.previousElementSibling.classList.remove('in-focus')
    //          this.parentElement.previousElementSibling.classList.add('invisible')
    //          var $this = this;
    //          setTimeout(function () {
    //            $this.parentElement.previousElementSibling.classList.remove('invisible')
    //          }, 1200)
    //          body.classList.add('no-scroll')}
    // })
    // inputGroup[i].firstElementChild.addEventListener('blur', function () {
    //   this.parentElement.parentElement.classList.remove('in-focus')
    //   this.parentElement.classList.add('invisible')
    //   this.parentElement.classList.remove('in-focus')
    //   body.classList.toggle('no-scroll')
    //   for (var i = 0; i < inputGroup.length; i++) {
    //       inputGroup[i].classList.remove('invisible')}
    // })
  }

  for (var  i = 0; i < inputGroup.length; i++) {
    inputGroup[i].firstElementChild.addEventListener('blur', function () {
      this.parentElement.children[2].firstElementChild.style.transformOrigin = ''
        if (this.value !== "") { this.classList.add('has-text');}
        else { this.classList.remove('has-text'); }
    })
  }

  // textBox.addEventListener('input', function () {
  //   var textLength = textBox.value.length
  //   hiddenTextBox.textContent += textBox.value.charAt((textLength - 1))
  //   var bBox = hiddenTextBox.getBoundingClientRect();
  //   var extraHeight = (bBox.height - 33)
  //   if (bBox.height > 33 && bBox.height < 330) {
  //     textBox.style.height = '' + (22 + extraHeight) + 'px'
  //   } else if (bBox.height >= 330 ) {
  //     textBox.style.overflowY = 'scroll'
  //     textBox.style.paddingBottom = 0
  //     textBox.style.marginBottom = '17px'
  //   }
  //   if (textBox.value === "") {
  //     hiddenTextBox.textContent = ""
  //     textBox.style.height = ""
  //   }
  // })

}
