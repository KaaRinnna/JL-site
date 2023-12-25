let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');


function toggleBurger() {
   burger.addEventListener('click', function () {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
      document.body.classList.toggle('lock');
   })
};

toggleBurger();

// Прокрутка
const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

         if (burger.classList.contains('active')) {
            document.body.classList.remove('lock');
            burger.classList.remove('active');
            menu.classList.remove('active');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}
