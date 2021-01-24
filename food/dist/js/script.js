
let openDishes = document.querySelector(".dishes_arrow")
let openBlock = document.querySelector(".dishes_block")
let burger = document.querySelector(".burger")
let menu = document.querySelector(".menu")
let main = document.querySelector(".main")


openDishes.addEventListener('click', function () {
    openDishes.classList.toggle('dishes_arrow-active')
    openBlock.classList.toggle('dishes_block-active')
    main.classList.toggle('main-active')
});



burger.addEventListener('click', function () {
    burger.classList.toggle('burger-active')
    menu.classList.toggle('menu-active')
    
});

