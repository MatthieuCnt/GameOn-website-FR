// Nav Elements
function editNav() {
	var x = document.getElementById('myTopnav');
	if (x.className === 'topnav') {
		x.className += ' responsive';
	} else {
		x.className = 'topnav';
	}
}

// launch modal form
function launchModal() {
	modalbg.style.display = 'block';
}

// launch modal form
function launchThanks() {
	modalThanks.style.display = 'block';
	return false;
}
