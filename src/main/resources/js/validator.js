function validateEmail(email) {
    var filter = /^(([^<>()[\]\\.,;:\s@\""]+(\.[^<>()[\]\\.,;:\s@\""]+)*)|(\"".+\""))@((([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
	if (filter.test(email))
		return true;
	else
		return  false;
}