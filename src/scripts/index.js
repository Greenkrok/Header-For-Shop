jQuery(document).ready(function($){
  $('ul.nav__list').flexMenu({
      linkText: "...",
      linkTitle: "Показать еще",
      linkTextAll: "Меню",
      linkTitleAll: "Развернуть меню", 
      popupClass: 'more_dropdown'
  });
});
