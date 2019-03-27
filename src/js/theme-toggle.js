const toggleBtn = document.querySelector(".switcher-checkbox");
toggleBtn.addEventListener('click', e => {
  console.log("Switching theme");
if(document.documentElement.getAttribute('theme') === 'light') {
    document.documentElement.setAttribute('theme', 'dark');
}
else{
    document.documentElement.setAttribute('theme', 'light');
}
});