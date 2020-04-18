CookiesManager = {
    get: function(name) {
        return Cookies.get(name);
    },
    set: function(name, value, attributes) {
        Cookies.set(name, value, attributes);
    },
    remove: function(name, attributes) {
        Cookies.remove(name, attributes);
    },
    mandatory: function() {
        var remember = $('#ckRememberMain')[0].checked;
        CookiesManager.enableCookies(false, false, remember);
    },
    customize: function() {

        var options = CookiesManager.get('cookiesConsentOptions');

        $('#ckMandatory')[0].checked = true;

        if (options == null ) {
            $('#ckTracking')[0].checked = true;
            $('#ckAdvertise')[0].checked = true;
            $('#ckRemember')[0].checked = $('#ckRememberMain')[0].checked;
        }
        else {
            if ( options.includes('t')){
                $('#ckTracking')[0].checked = true;
            }
            if ( options.includes('a')){
                $('#ckAdvertise')[0].checked = true;
            }
            if( options.includes('r')){
                $('#ckRemember')[0].checked = true;
            }
        }
        $('#cookieDetail').modal( {backdrop: 'static', keyboard: false} );
    },
    all: function() {
        var remember = $('#ckRememberMain')[0].checked;

        CookiesManager.enableCookies(true, true, remember);
        window.yett.unblock();
    },
    enableCookies: function( tracking, advertising, remember )
    {

        var options = "m";
        if (tracking) {
            options = options.concat(",t");
            window.yett.unblock("/www.googletagmanager.com");
        }
        if( advertising) {
            options = options.concat(",a");
					window.yett.unblock("/pagead2.googlesyndication.com");
        }
        if ( remember ) {
            options = options.concat(",r");
            CookiesManager.set('cookiesConsentOptions', options, { expires: 28 } );
        }
        else {
            CookiesManager.set('cookiesConsentOptions', options );
        }
    },
	getUserChoices: function () {
		var remember = $('#ckRemember')[0].checked;
        var tracking = $('#ckTracking')[0].checked;
        var advertise = $('#ckAdvertise')[0].checked;

        CookiesManager.enableCookies( tracking, advertise, remember );
    }
};

var options = CookiesManager.get('cookiesConsentOptions');
if ( options == null ) {
    $('#cookieConsent').modal( {backdrop: 'static', keyboard: false} );
}
else {
	var tracking = false;
	var advertising = false;
	var remember = false;
	if (options.includes('t')) {
		tracking = true;
	}
	if (options.includes('a')) {
		advertising = true;
	}
	if (options.includes('r')) {
		rememeber = true;
	}

	CookiesManager.enableCookies(tracking, advertising, remember);
}