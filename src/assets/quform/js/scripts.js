'use strict';
jQuery(function($) {
    $('form.quform').Quform();
    if (window.tippy) {
        $('.quform-tooltip').each(function() {
            tippy(this, {
                theme: 'quform'
            });
        });
    }
    $('#subject').replaceSelectWithTextInput({
        onValue: 'Other'
    });
});
(function($) {
    $(window).on('load', function() {
        var images = ['assets/quform/images/close.png', 'assets/quform/images/success.png', 'assets/quform/images/error.png', 'assets/quform/images/default-loading.gif'];
        if ($('.quform-theme-light-light, .quform-theme-light-rounded').length) {
            images = images.concat(['quform/themes/light/images/button-active-bg-rep.png', 'quform/themes/light/images/close.png', 'quform/themes/light/images/input-active-bg-rep.png']);
        }
        if ($('.quform-theme-dark-dark, .quform-theme-dark-rounded').length) {
            images = images.concat(['quform/themes/dark/images/button-active-bg-rep.png', 'quform/themes/dark/images/close.png', 'quform/themes/dark/images/input-active-bg-rep.png', 'quform/themes/dark/images/loading.gif']);
        }
        if ($('.quform-theme-minimal-light').length) {
            images = images.concat(['quform/themes/minimal/images/close-light.png']);
        }
        if ($('.quform-theme-minimal-dark').length) {
            images = images.concat(['quform/themes/minimal/images/close-dark.png', 'quform/themes/minimal/images/loading-dark.gif']);
        }
        $.preloadImages(images);
    });
}
)(jQuery);
