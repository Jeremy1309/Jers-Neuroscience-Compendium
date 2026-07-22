document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if(navToggle && mainNav){
    navToggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      mainNav.style.display = expanded ? 'none' : 'block';
    });
  }

  document.querySelectorAll('details').forEach((detail) => {
    detail.addEventListener('keydown', function (event) {
      if(event.key === 'Enter' || event.key === ' '){
        event.preventDefault();
        detail.open = !detail.open;
      }
    });
  });
});
