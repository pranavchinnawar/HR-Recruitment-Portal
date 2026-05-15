const footerHtml = `
  <footer class="footer">
    <div class="footer-top">
      <div class="container footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo">
            <span class="logo-icon"><i class="fas fa-layer-group"></i></span>
            <span class="logo-text">Talent<span class="logo-accent">Bridge</span></span>
          </a>
          <p>Empowering careers and building world-class technology teams across the globe since 2004.</p>
          <div class="social-links">
            <a href="#" class="social-btn" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="social-btn" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-btn" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-btn" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="#" class="social-btn" aria-label="GitHub"><i class="fab fa-github"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="#">Leadership</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="jobs.html">Job Listings</a></li>
            <li><a href="#">Executive Search</a></li>
            <li><a href="#">Contract Staffing</a></li>
            <li><a href="#">HR Consulting</a></li>
            <li><a href="#">Payroll Services</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Career Blog</a></li>
            <li><a href="#">Interview Tips</a></li>
            <li><a href="#">Resume Builder</a></li>
            <li><a href="#">Salary Guide</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">GDPR</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>© 2026 TalentBridge Technologies. All rights reserved.</p>
      </div>
    </div>
  </footer>
  <!-- Back to Top -->
  <button class="back-to-top" id="backToTop" aria-label="Back to top"><i class="fas fa-arrow-up"></i></button>
`;

document.getElementById('footer-container').innerHTML = footerHtml;
