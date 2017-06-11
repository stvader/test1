(function() {

  // проверяем поддержку
  if (!Element.prototype.matches) {

    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;

  }

})();

(function() {

  	if (!Element.prototype.closest) {

    
	    Element.prototype.closest = function(css) {
	        var node = this;

	        while (node) {
	            if (node.matches(css)) return node;
	            else node = node.parentElement;
	        }
	        
	        return null;
	    };
	}

})();

window.addEventListener('load', function() {
	var button = document.querySelectorAll('.js-show-link');
	var i;

	function toggleBlock(e) {
		e.preventDefault();

		var parentBlock = this.closest('.js-toggle-parent');
		var aimBlock = parentBlock.querySelector('.js-hidden-block');
		var navItem = this.closest('.main-nav__item');
		var image = this.querySelector('.main-nav__image-lang');

		if (!aimBlock.classList.contains('js-vision')) {
			aimBlock.classList.add('js-vision');
			navItem.classList.add('main-nav__item--arrow');
			image.classList.add('main-nav__image-lang--active');
		} else {
			aimBlock.classList.remove('js-vision');
			navItem.classList.remove('main-nav__item--arrow');
			image.classList.remove('main-nav__image-lang--active');
		}			
		
	}

	for (i=0; i<button.length; i++) {
		button[i].addEventListener('click', toggleBlock)
	}
});


window.addEventListener('load', function() {
	var heightForChange = 930;
	var tabletWidth = 1150;
	var mobileWidth = 768;
	var clientWidth = document.documentElement.clientWidth;
	var nav = document.querySelector('.main-nav');

	if (clientWidth < mobileWidth) {
		heightForChange = 500;
	}else if (clientWidth < tabletWidth) {
		heightForChange = 600;
	}

	window.addEventListener('scroll', function() {		
		if (!nav.classList.contains('main-nav--scroll') && window.pageYOffset >= heightForChange) {
			nav.classList.add('main-nav--scroll');
		}else if (window.pageYOffset < heightForChange) {
			nav.classList.remove('main-nav--scroll');
		}
	});
});

window.addEventListener('load', function() {
	var input = document.querySelector('.form-text-input');
	var submit = document.querySelector('.form-submit');
	var spanDefault = document.querySelector('.btn-default');
	var spanHover = document.querySelector('.btn-hover');
	var spanError = document.querySelector('.btn-error');

	function checkEmptyInput() {
		if (!input.value) {
			if (!submit.classList.contains('submit-error')) {
				submit.classList.add('submit-error');
			}
			submit.addEventListener('click', refuseSend);
		}	
	}

	function removeSendRefuse() {		
		if (submit.classList.contains('submit-error')) {
			submit.classList.remove('submit-error');
		}

		submit.removeEventListener('click', refuseSend);
	}

	function refuseSend(e) {
		e.preventDefault();
	}	
	 
	submit.addEventListener('mouseover', checkEmptyInput);
	submit.addEventListener('mouseout', removeSendRefuse);
	
});

window.addEventListener('load', function() {
	var toggleButton = document.querySelector('.main-nav__toggle');
	var menuBlock = toggleButton.closest('.js-mobile-nav-toggle');
	var hiddenMenu = menuBlock.querySelector('.js-hidden-menu');
	var listHasSubmenu = menuBlock.querySelectorAll('.js-has-submenu');
	var menuHeight = document.documentElement.clientHeight + 20;
	

	function doBlockHeight(block, height) {
		block.style.height = height + 'px';
	}

	function toggleSubmenu(e) {
		var itemMenu = this;

		if (e.target = 'A') {
			e.preventDefault();
		}

		if (!itemMenu.classList.contains('main-nav__item--submenu-show')) {
			itemMenu.classList.add('main-nav__item--submenu-show');
		}else {
			itemMenu.classList.remove('main-nav__item--submenu-show');
		}
	}

	function addEventsSubmenu(block) {
		var i;

	 	for (i=0; i<block.length; i++) {
	 		block[i].addEventListener('click', toggleSubmenu)
	 	}
	 } 

	function toggleMenu() {
		if (menuBlock.classList.contains('main-nav--closed')) {
			menuBlock.classList.remove('main-nav--closed');
			menuBlock.classList.add('main-nav--opened');
			doBlockHeight(hiddenMenu, menuHeight);
			addEventsSubmenu(listHasSubmenu);			
		}else if (menuBlock.classList.contains('main-nav--opened')) {
			menuBlock.classList.remove('main-nav--opened');
			menuBlock.classList.add('main-nav--closed');
		}
	}

	toggleButton.addEventListener('click', toggleMenu)
});

