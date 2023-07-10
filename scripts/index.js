const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');
/*const themeSelect = document.getElementById('themeSelect');
themeSelect.addEventListener('change', switchTheme);*/


button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

/*function switchTheme () {
  debugger;
  const themeSelect=
  document.getElementById("themeSelect").value;
            document.getElementsByTagName("meta")
            [0].content = themeSelect;
}*/
