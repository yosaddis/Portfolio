const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMobile = document.querySelector('.nav-mobile');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');
const linkMyWorks = document.querySelector('.link-my-works');
const linkAboutMe = document.querySelector('.link-about-me');
const linkContactMe = document.querySelector('.link-contact-me');

mobileMenuBtn.addEventListener('click', () => {
	mobileMenuBtn.classList.add('hidden');
	navMobile.classList.remove('hidden');
});

mobileMenuCloseBtn.addEventListener('click', () => {
	navMobile.classList.add('hidden');
	mobileMenuBtn.classList.remove('hidden');
});

linkMyWorks.addEventListener('click', () => {
	navMobile.classList.add('hidden');
	console.log('Pass 1');
	mobileMenuBtn.classList.remove('hidden');
	console.log('Pass 2');
});

linkAboutMe.addEventListener('click', () =>{
	navMobile.classList.add('hidden');
	mobileMenuBtn.classList.remove('hidden');
});

linkContactMe.addEventListener('click', () => {
	navMobile.classList.add('hidden');
	mobileMenuBtn.classList.remove('hidden');
});