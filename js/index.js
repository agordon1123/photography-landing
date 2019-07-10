console.log('hello, world!');

const myCont = document.querySelector('.container');

// Removed- this was from messing around wiht query selectors
// myCont.addEventListener('click', () => {
//     myCont.classList.toggle('toggle-red')
// });

const menuButton = document.querySelector('.menu-button');
const menuItem = document.getElementsByClassName('nav-a');
console.log(menuItem);

menuButton.addEventListener('click', () => {
    for(i=0; i < menuItem.length; i++) {
        menuItem[i].classList.toggle('toggle-item');
    }
    // if(menuItem.classList.contains('toggle-item')) {
        TweenMax.staggerFrom('.nav-a', 2, {opacity: 0}, .5)
    // }
});

// TweenMax.staggerFrom('.nav-link', 2, {opacity: 0}, .3)

























// const myFunc = menuItem.forEach(menuItem.classList.toggle('toggle-item'));

// const menuItem = document.querySelectorAll('.nav-a');
// let menuArr = Array.from(menuItem);

// function myFunction() {
//     var x = document.getElementsByClassName("nav-a");
//     if (x.style.visibility === "hidden") {
//       x.style.visibility = "visible";
//     } else {
//       x.style.visibility = "hidden";
//     }
// }

// menuButton.addEventListener('click', () => {
//     this.menuArr.classList.toggle('toggle-item')
// });

// menuButton.addEventListener('click', () => {
//     document.getElementsByClassName('nav-a').classList.remove('toggle-item');
// });

// function myFunction() {
    // var menuItems = document.getElementsByClassName('nav-a');
    // if(menuItems.style.visibility == "hidden") { // if is menuBox displayed, hide it
    //   menuItems.style.visibility = "visible";
    // }
    // else { // if is menuBox hidden, display it
    //   menuItems.style.visibility = "visible";
    // }
//   }

//   Check newsfeed components for inspiration