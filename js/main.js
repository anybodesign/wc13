jQuery(document).ready(function($) {
	
	
	// Responsive Main Menu

	$('#menu-toggle').click(function() {
		$('.main-menu').slideToggle();
		$(this).toggleClass('menu-opened');
			
			if ($(this).hasClass('menu-opened')) {
				$('.main-menu').attr('aria-expanded','true');
			} else {
				$('.main-menu').attr('aria-expanded','false');
			}
			
		return false;
	});

		$(window).resize(function() {
			if ($(window).width() > 640) {
		    	$('.main-menu').show().removeAttr('style').removeAttr('aria-expanded');
		    	$('.sub-menu').show().removeAttr('style');
		    	$('#menu-toggle').removeClass('menu-opened');
			}
		});

	
	// Sliders
	
	$('.slicky-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	});
	
	
	// Set focus
	
	$(window).on('scroll', function() {
    	
    	if ($('body').hasClass('fp-viewing-cover')) {
			window.location.hash = '#fullpage';
		}
		else if ($('body').hasClass('fp-viewing-a11y')) {
			window.location.hash = '#a11y_section';
		}
    	else if ($('body').hasClass('fp-viewing-typography')) {
			window.location.hash = '#typography_section';
		}
		else if ($('body').hasClass('fp-viewing-navigation')) {
			window.location.hash = '#navigation_section';
		}
		else if ($('body').hasClass('fp-viewing-forms')) {
			window.location.hash = '#forms_section';
		}
		else if ($('body').hasClass('fp-viewing-colors')) {
			window.location.hash = '#colors_section';
		}
		else if ($('body').hasClass('fp-viewing-images')) {
			window.location.hash = '#images_section';
		}				
	});
	  
  
  
  
  
  
  /**	
	 * skip-link-focus-fix.js
	 *
	 * Helps with accessibility for keyboard only users.
	 *
	 * Learn more: https://git.io/vWdr2
	 */
	( function() {
		var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
		    is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
		    is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;
	
		if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
			window.addEventListener( 'hashchange', function() {
				var id = location.hash.substring( 1 ),
					element;
	
				if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
					return;
				}
	
				element = document.getElementById( id );
	
				if ( element ) {
					if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
						element.tabIndex = -1;
					}
	
					element.focus();
				}
			}, false );
		}
	})();
	

});