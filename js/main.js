// homepage typing function
let onTyping = document.getElementById('typing');
const waitToType = "Software Engineer, Web Developer, Data Analyst";
let addedText = "";
let count = 0;
if (count <= waitToType.length) {
  addText = setInterval(() => {
    //put the letter to the addedText ont by one
    let addedText = waitToType.substring(0, count);
    count += 1;
    //display the typing letters 
    onTyping.innerHTML = addedText;
    if (count > waitToType.length) {
      //typing finished, clear interval
      clearInterval(addText)
    }
  }, 50)
}

// DOM elements/NodeList
// return an HTMLElement object representing the first element in the document
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu__nav');
const NavItems = document.querySelectorAll('.nav-item'); // return an NodeList

// Initial state of menu
let showMenu = false;
function toggleMenu () {
  if (!showMenu) { // if menu is not shown
    // add 'close' class to the 'menu-btn' class
    menuBtn.classList.add('close');
    menuNav.classList.add('show');
    // change menu state
    showMenu = true;
  }
  else { // if menu is shown
    // add 'close' class to the 'menu-btn' class
    menuBtn.classList.remove('close');
    menuNav.classList.remove('show');
    // change menu state
    showMenu = false;
  }
}
menuBtn.addEventListener('click', toggleMenu)

// handle nav active attribute change
class Nav {
  constructor() {
    this.previous = '';
    this.current = '#home';
    this.push = function (event) {
      this.previous = this.current;
      let href = event.target.getAttribute('href');
      this.current = href;
      this.changeNavItem();
    }

    this.changeNavItem = () => {
      console.log('this.previous', this.previous)
      console.log('this.current', this.current)
      var previousNavItem = document.querySelector(`[href="${this.previous}"]`);
      var navItem = document.querySelector(`[href="${this.current}"]`);
      previousNavItem.classList.remove('current');
      navItem.classList.add('current');
      console.log('previousNavItem', previousNavItem)
      console.log('navItem', navItem)
    }
  }
}

function NavChange () {
  const nav = new Nav();

  function onClick (event) {
    nav.push(event);
    // special case for side navbar: hide after click
    // add 'close' class to the 'menu-btn' class
    menuBtn.classList.remove('close');
    menuNav.classList.remove('show');
    // change menu state
    showMenu = false;
  }

  function onEach (element) {
    element.onclick = onClick;
  }

  // change active page
  document
    .querySelectorAll('.nav-item')
    .forEach(onEach);
}

NavChange();