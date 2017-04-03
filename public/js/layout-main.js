//	Error messages
var errorMsgs = {
	NO_FILE_SELECTED: 'Please, select a file to be played',
	WRONG_FILE_TYPE: 'Please, select a valid audio file'
}

//	Supported audio extensions
var audioExtensions = ['wav', 'mp3', 'ogg'];

//	Function to get a param from URL
var getUrlParameter = function (sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=')

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1]
        }
    }
}

//	Function to validate an e-mail
var validateEmail = function (email) {
	return  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)
}

$(document).ready(function() {
	$('#login').click(function() {
		//	Reset error
		$('#login-error').addClass('hidden')
		// Parameters
		var email = $('#email').val()
		var password = $('#password').val()
		var redir = getUrlParameter('redir') || '/'
		//	Build frontend hash
		var hash = CryptoJS.SHA512(email + password).toString(CryptoJS.enc.Hex).substr(0, 30)
		//	Error control
		if(validateEmail(email) && password) {
			//	Assign new value
			$.post("/api/login", {
				email : email,
				password : hash
			})
			.done(function (data) {
				if(data.error) {
					$('#login-error').removeClass('hidden')
					$('#login-error').html(data.error)
				}
				else {
					console.log('Correct')
					window.location.href = redir
				}
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				$('#login-error').removeClass('hidden')
				$('#login-error').html(textStatus)
			})
		}
		else {
			$('#login-error').removeClass('hidden')
			$('#login-error').html('Missing parameters')
		}
	})
	$('#logout').click(function() {
		$.post("/api/logout", {})
		.done(function (data) {
			window.location.href = window.location.href
		})
	})
})
