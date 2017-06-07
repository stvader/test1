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

	function triggerBlock(e) {
		e.preventDefault();

		var parentBlock = this.closest('.js-trigger-parent');
		var aimBlock = parentBlock.querySelector('.js-hidden-block');
		var navItem = this.closest('.main-nav__item');

		if (!aimBlock.classList.contains('js-vision')) {
			aimBlock.classList.add('js-vision');
		} else {
			aimBlock.classList.remove('js-vision');
		}

		if (!parentBlock.classList.contains('main-nav__list')) return;

		if (aimBlock.classList.contains('js-vision')) {
			navItem.classList.add('main-nav__item--arrow');
		} else {
			navItem.classList.remove('main-nav__item--arrow');
		}
		
	}

	for (i=0; i<button.length; i++) {
		button[i].addEventListener('click', triggerBlock)
	}
});


window.addEventListener('load', function() {
	var heightForChange = 930;
	var nav = document.querySelector('.main-nav');

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

