const toggleBtn = document.querySelector(".switcher-checkbox");
toggleBtn.addEventListener('click', e => {

	if (document.documentElement.getAttribute('theme') === 'light') {
		document.documentElement.setAttribute('theme', 'dark');
	}

	else {
		document.documentElement.setAttribute('theme', 'light');
	}
});