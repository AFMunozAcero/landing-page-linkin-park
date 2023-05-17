ocument.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('img').addEventListener('click', function () {
    this.classList.add('animated', 'bounce');
});
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
  }