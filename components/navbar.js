const navbarHtml = `
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="index.html" class="nav-logo">
        <span class="logo-icon"><i class="fas fa-layer-group"></i></span>
        <span class="logo-text">Talent<span class="logo-accent">Bridge</span></span>
      </a>
      <ul class="nav-menu" id="navMenu">
        <li><a href="index.html" class="nav-link" data-page="index.html">Home</a></li>
        <li><a href="jobs.html" class="nav-link" data-page="jobs.html">Jobs</a></li>
        <li><a href="apply.html" class="nav-link" data-page="apply.html">Apply</a></li>
        <li><a href="about.html" class="nav-link" data-page="about.html">About</a></li>
        <li><a href="contact.html" class="nav-link" data-page="contact.html">Contact</a></li>
        <li><a href="dashboard.html" class="nav-link nav-btn-outline" data-page="dashboard.html">HR Login</a></li>
        <li><a href="apply.html" class="nav-link nav-btn-primary">Apply Now</a></li>
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
`;

document.getElementById('navbar-container').innerHTML = navbarHtml;

// Set active link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  if (link.getAttribute('data-page') === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
