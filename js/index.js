const burgerClose = document.querySelector('.navbar__close');
const burgerOpen = document.querySelector('.burger__open');
const navbarBurger = document.querySelector('.navbar__burger');
const headerText = document.querySelector('.header__text');
const headerImg = document.querySelector('.header__img');
const wrapper = document.querySelector('.wrapper');
const navbar = document.querySelector('.navbar');
const iphoneFeaturesImg = document.querySelector('.iphone-features__img');
const planButtons = document.querySelector('.plan__buttons')
const planButton = document.querySelectorAll('.plan__button')
const featuresContainer = document.querySelector('.features__container');
const mapFeatureImg = document.querySelector('.map-feature__img');

burgerClose.addEventListener('click', () => {
	navbarBurger.classList.toggle('navbar__burger-active')
})

burgerOpen.addEventListener('click', () => {
	navbarBurger.classList.toggle('navbar__burger-active')
})

window.addEventListener('scroll', (event) => {
	AddClass(event);
})

planButtons.addEventListener('click', (event) => {
	let active = undefined
	planButton.forEach(item => {
		if (item.classList.contains('plan__button-active')) {
			active = item
		}
	})
	if (!event.target.classList.contains('plan__button-active')) {
		event.target.classList.toggle('plan__button-active')
		active.classList.toggle('plan__button-active')
		planButtons.classList.toggle('plan__buttons-active')
	}
})

function load() {
	headerText.classList.toggle('header__text-active')
	headerImg.classList.toggle('header__img-active');
	setInterval(() => {
		nextUser()
	}, 5000)
}


function AddClass(event) {
	let wrapperY = wrapper.getBoundingClientRect().y;
	let iphoneFeaturesImgY = iphoneFeaturesImg.getBoundingClientRect().y;
	let featuresContainerY = featuresContainer.getBoundingClientRect().y;
	let mapFeatureImgY = mapFeatureImg.getBoundingClientRect().y;
	if (wrapperY <= -1) {
		navbar.classList.add('navbar-sticky')
	} else if (wrapperY === 0) {
		navbar.classList.remove('navbar-sticky')
	}
	if (iphoneFeaturesImgY <= 675) {
		iphoneFeaturesImg.classList.add('iphone-features__img-active')
	}

	if (featuresContainerY <= 550) {
		featuresContainer.classList.remove('features__container-active')
	}

	if (mapFeatureImgY <= 800) {
		mapFeatureImg.classList.remove('map-feature__img-active')
	}
}