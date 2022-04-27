const customerUser = document.querySelectorAll('.customers__user');
const customerUsers = document.querySelector('.customers__users');
const customersItem = document.querySelectorAll('.customers__item');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let counter = undefined;
let maxCounter = customerUser.length - 1;

arrowLeft.addEventListener('click', () => {
	prevUser();
})

arrowRight.addEventListener('click', () => {
	nextUser()
})

customerUsers.addEventListener('click', (event) => {
	clickUser(event);
})

function prevUser() {
	customerUser.forEach((item, index) => {
		if (item.classList.contains('customers__user-focus')) {
			counter = index;
		}
	})
	customerUser[counter].classList.toggle('customers__user-focus');
	counter -= 1;
	if (counter < 0) {
		counter = maxCounter
	}
	customerUser[counter].classList.toggle('customers__user-focus');
}

function nextUser() {
	customerUser.forEach((item, index) => {
		if (item.classList.contains('customers__user-focus')) {
			counter = index
		}
	})
	customerUser[counter].classList.toggle('customers__user-focus');
	counter += 1;
	if (counter > maxCounter) {
		counter = 0
	}
	customerUser[counter].classList.toggle('customers__user-focus')
}


function clickUser(event) {
	if (event.target.offsetParent.classList.contains('customers__user')) {
		let deleteClass = undefined;
		customerUser.forEach(item => {
			if (item.classList.contains('customers__user-focus')) {
				deleteClass = item;
			}
		})
		if (deleteClass !== event.target.offsetParent) {
			deleteClass.classList.toggle('customers__user-focus')
			event.target.offsetParent.classList.toggle('customers__user-focus')
		}
	}
}