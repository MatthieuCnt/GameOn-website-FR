// DOM Elements
const modalBody = document.querySelector('.modal-body');
const modalbg = document.querySelector('.bground');
const modalThanks = document.querySelector('.bgroundThanks');
const modalBtn = document.querySelectorAll('.modal-btn');
const closeBtn = document.querySelector('.btn-Thanks');
const formData = document.querySelectorAll('.formData');
const close = document.querySelector('.close');
const closeThanks = document.querySelector('.closeThanks');
const validmodalBtn = document.getElementById('submit');
const checkbox = document.querySelectorAll('.checkbox-city');

// launch modal event (click on button)
modalBtn.forEach(btn => btn.addEventListener('click', launchModal));

// Close modal form
close.addEventListener('click', () => {
	modalbg.style.display = 'none';
});

//Error Messages
const firstNameError = document.getElementById('first-error'),
	firstName = document.getElementById('first');

const firstNameValidation = () => {
	if (firstName.value.length > 0 && firstName.value.length < 2) {
		firstNameError.innerHTML = 'Veuillez entrer au moins 2 caractères.';
		firstName.style.border = 'solid red 2px';
	} else if (firstName.value.length == 0) {
		firstNameError.innerHTML = 'Ce champs est requis';
		firstName.style.border = 'solid red 2px';
	} else if (!firstName.value.match(/^[a-zA-Z-]+$/)) {
		firstNameError.innerHTML = "Le format n'est pas respecté";
		firstName.style.border = 'solid red 2px';
	} else {
		firstNameError.innerHTML = '';
		firstName.style.border = 'none';
	}
};

const lastNameError = document.getElementById('last-error'),
	lastName = document.getElementById('last');

//lastName.addEventListener('change', event => {
const lastNameValidation = () => {
	if (lastName.value.length > 0 && lastName.value.length < 2) {
		lastNameError.innerHTML = 'Veuillez entrer au moins 2 caractères.';
		lastName.style.border = 'solid red 2px';
	} else if (lastName.value.length == 0) {
		lastNameError.innerHTML = 'Ce champs est requis';
		lastName.style.border = 'solid red 2px';
	} else if (!lastName.value.match(/^[a-zA-Z -]+$/)) {
		lastNameError.innerHTML = "Le format n'est pas respecté";
		lastName.style.border = 'solid red 2px';
	} else {
		lastNameError.innerHTML = '';
		lastName.style.border = 'none';
	}
};

const mailError = document.getElementById('email-error'),
	mail = document.getElementById('email');

//mail.addEventListener('change', event => {
const mailValidation = () => {
	if (!mail.value.match(/^[a-z0-9._-]{2,}@[a-z0-9._-]{2,}\.[a-z]{2,4}$/)) {
		mailError.innerHTML = 'Veuillez entrer une adresse mail valide';
		mail.style.border = 'solid red 2px';
	} else {
		mailError.innerHTML = '';
		mail.style.border = 'none';
	}
};

const birthdateError = document.getElementById('birthdate-error'),
	birthdate = document.getElementById('birthdate');

//birthdate.addEventListener('change', event => {
const birthdateValidation = () => {
	let today_date = new Date();
	let today_year = today_date.getFullYear();
	let born_year;

	if (birthdate.valueAsDate != null) {
		born_year = birthdate.valueAsDate.getFullYear();
	} else {
		born_year = undefined;
	}

	if (born_year == undefined) {
		birthdateError.innerHTML = 'Vous devez entrer votre date de naissance.';
		birthdate.style.border = 'solid red 2px';
	} else if (today_year - born_year < 16) {
		birthdateError.innerHTML = 'Vous devez avoir plus de 16 ans';
		birthdate.style.border = 'solid red 2px';
	} else {
		birthdateError.innerHTML = '';
		birthdate.style.border = 'none';
	}
	console.log(born_year);
};

const quantityError = document.getElementById('quantity-error'),
	quantity = document.getElementById('quantity');

const quantityValidation = () => {
	if (!quantity.value.match(/^[0-9]+$/)) {
		quantityError.innerHTML = 'Ce champs est requis';
		quantity.style.border = 'solid red 2px';
	} else {
		quantityError.innerHTML = '';
		quantity.style.border = 'none';
	}
};

// Boucle FOR city
const cityError = document.getElementById('city-error');
let cities = document.getElementsByName('location');

quantity.addEventListener('change', event => {
	if (quantity.value == 0) {
		for (i = 0; i < cities.length; i++) {
			cities[i].removeAttribute('checked');
			cities[i].disabled = true;
			let span = document.getElementsByClassName('checkbox-icon')[i];
			span.classList.add('toggle');
		}
	} else if (quantity.value > 0) {
		for (i = 0; i < 6; i++) {
			cities[i].disabled = false;
			let span = document.getElementsByClassName('checkbox-icon')[i];
			span.classList.remove('toggle');
		}
	}
});

//check1.addEventListener('change', event => {
const checkValidation = () => {
	const check1 = document.getElementById('checkbox1');
	if (!check1.checked) {
		check1Error.innerHTML = 'Vous devez accepter les termes et conditions.';
	} else {
		check1Error.innerHTML = '';
	}
};

// Valid modal button submit
validmodalBtn.addEventListener('click', event => {
	firstNameValidation();
	lastNameValidation();
	mailValidation();
	birthdateValidation();
	quantityValidation();
	checkValidation();

	//if all validation are alright
	if (
		firstNameError.innerHTML == '' &&
		lastNameError.innerHTML == '' &&
		mailError.innerHTML == '' &&
		birthdateError.innerHTML == '' &&
		quantityError.innerHTML == '' &&
		check1Error.innerHTML == ''
	) {
		modalbg.style.display = 'none';
	} else {
		event.preventDefault();
	}
});

// Close modal form
closeThanks.addEventListener('click', () => {
	modalThanks.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
	modalThanks.style.display = 'none';
});
