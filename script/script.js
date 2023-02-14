let menuBtn = document.querySelector('.header_burger');
let menuBurger = document.querySelector('.header_menu');
let body = document.body;


menuBtn.addEventListener('click', function () {
    menuBurger.classList.toggle('active');
    menuBtn.classList.toggle('active');
});



//ANCHORS
let menuItems = document.querySelectorAll('.menu_item')

for (let item of menuItems) {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        const blockID = item.querySelector('a').getAttribute('href')
                
        if (blockID == '#' || !document.querySelector(blockID) ) {
            console.log('Element with ID: ' + blockID + ' has not been Founded! Error!');
            return false;
        }
        
        const offsetConst = 0;
        let y =  document.querySelector(blockID).getBoundingClientRect().top + window.pageYOffset - offsetConst;
        const windowOuterWidth = document.documentElement.scrollWidth


        if (windowOuterWidth < 767) {
            y = document.querySelector(blockID).getBoundingClientRect().top + window.pageYOffset - document.querySelector('.header').offsetHeight - offsetConst;
        }

        menuBtn.classList.remove('active');
        menuBurger.classList.remove('active');

        window.scrollTo({
            top: y,
            behavior: "smooth"
        });


        
    })
}


// document.addEventListener('click', (e) => {
//     const isClickedBurger = e.composedPath().includes(menuBtn);
//     const isClickedMenu = e.composedPath().includes(menuBurger);
//     console.log(isClickedBurger);
//     if (!isClickedBurger && !isClickedMenu) {
//         menuBtn.classList.remove('active');
//         menuBurger.classList.remove('active');
//     }
// })

document.addEventListener('click', (e) => {
    //console.log(e.target, e.target.closest('.header'))

    if (!e.target.classList.contains('header_menu') && !e.target.closest('.header_menu') && !e.target.classList.contains('header_burger') && !e.target.closest('.header_burger')) {
        menuBtn.classList.remove('active');
        menuBurger.classList.remove('active');
    }

})

