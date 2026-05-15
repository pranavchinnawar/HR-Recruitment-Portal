// ===== DUMMY DATA ===== //
const jobsData = [
  { id: 1, title: "Senior Software Engineer", type: "Full-time", location: "Bengaluru, Hybrid", category: "engineering", salary: "₹25L - ₹35L", tags: ["React", "Node.js", "AWS"], icon: "<i class='fas fa-laptop-code'></i>" },
  { id: 2, title: "Data Scientist", type: "Full-time", location: "Remote, India", category: "data", salary: "₹20L - ₹30L", tags: ["Python", "TensorFlow", "SQL"], icon: "<i class='fas fa-database'></i>" },
  { id: 3, title: "Frontend Developer", type: "Contract", location: "Mumbai, On-site", category: "engineering", salary: "₹12L - ₹18L", tags: ["Vue.js", "CSS", "TypeScript"], icon: "<i class='fas fa-paint-brush'></i>" },
  { id: 4, title: "QA Automation Engineer", type: "Full-time", location: "Pune, Hybrid", category: "qa", salary: "₹10L - ₹15L", tags: ["Selenium", "Java", "CI/CD"], icon: "<i class='fas fa-bug'></i>" },
  { id: 5, title: "AI / ML Engineer", type: "Full-time", location: "Hyderabad, Hybrid", category: "data", salary: "₹30L - ₹45L", tags: ["PyTorch", "NLP", "Computer Vision"], icon: "<i class='fas fa-brain'></i>" },
  { id: 6, title: "DevOps Engineer", type: "Full-time", location: "Remote, Global", category: "engineering", salary: "₹22L - ₹32L", tags: ["Kubernetes", "Docker", "Terraform"], icon: "<i class='fas fa-server'></i>" }
];

const candidatesData = [
  { id: 1, name: "Rahul Mehta", role: "Software Engineer", status: "new", statusText: "New Applicant", initials: "RM" },
  { id: 2, name: "Ananya Iyer", role: "Data Analyst", status: "shortlisted", statusText: "Shortlisted", initials: "AI" },
  { id: 3, name: "Vikram Nair", role: "Frontend Developer", status: "interview", statusText: "Interview Scheduled", initials: "VN" },
  { id: 4, name: "Sneha Patel", role: "QA Engineer", status: "new", statusText: "New Applicant", initials: "SP" },
  { id: 5, name: "Arjun Das", role: "AI Engineer", status: "rejected", statusText: "Rejected", initials: "AD" },
  { id: 6, name: "Pooja Singh", role: "DevOps Engineer", status: "shortlisted", statusText: "Shortlisted", initials: "PS" }
];

// Helper to run after components load (since navbar is loaded dynamically)
setTimeout(() => {
  // Navigation
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const backToTop = document.getElementById("backToTop");

  // ===== NAVIGATION LOGIC ===== //
  window.addEventListener("scroll", () => {
    if (navbar && window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else if (navbar) {
      navbar.classList.remove("scrolled");
    }

    if (backToTop) {
      if (window.scrollY > 500) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    }
  });

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}, 100);

document.addEventListener("DOMContentLoaded", () => {
  // Number Counter
  const statNumbers = document.querySelectorAll(".stat-number, .dsc-value");
  
  if (statNumbers.length > 0) {
    const animateCounters = () => {
      statNumbers.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        const duration = 2000;
        const increment = target / (duration / 16);

        let current = 0;
        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.innerText = Math.ceil(current).toLocaleString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target.toLocaleString();
          }
        };
        
        const observer = new IntersectionObserver((entries) => {
          if(entries[0].isIntersecting) {
            updateCounter();
            observer.disconnect();
          }
        });
        observer.observe(counter);
      });
    };
    animateCounters();
  }

  // Jobs
  const jobsGrid = document.getElementById("jobsGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (jobsGrid) {
    const renderJobs = (category = "all") => {
      jobsGrid.innerHTML = "";
      const filteredJobs = category === "all" ? jobsData : jobsData.filter(job => job.category === category);

      filteredJobs.forEach(job => {
        const tagsHtml = job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join("");
        
        const jobCard = `
          <div class="job-card" data-aos="fade-up">
            <div class="job-header">
              <div class="job-icon">${job.icon}</div>
              <span class="job-type">${job.type}</span>
            </div>
            <h3 class="job-title">${job.title}</h3>
            <div class="job-location">
              <i class="fas fa-map-marker-alt"></i> ${job.location}
            </div>
            <div class="job-tags">${tagsHtml}</div>
            <div class="job-footer">
              <div class="job-salary">${job.salary} <span>/ year</span></div>
              <a href="apply.html?role=${job.title.toLowerCase().replace(/ /g, '-')}" class="apply-link">
                Apply <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        `;
        jobsGrid.innerHTML += jobCard;
      });
    };

    renderJobs();

    if (filterBtns.length > 0) {
      filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          filterBtns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          renderJobs(btn.getAttribute("data-filter"));
        });
      });
    }
  }

  // Apply Form
  const expSlider = document.getElementById("experience");
  const expValue = document.getElementById("expValue");
  const resumeFile = document.getElementById("resumeFile");
  const fileDropZone = document.getElementById("fileDropZone");
  const filePreview = document.getElementById("filePreview");
  const fileName = document.getElementById("fileName");
  const removeFile = document.getElementById("removeFile");
  const applyForm = document.getElementById("applyForm");
  const formSuccess = document.getElementById("formSuccess");
  const submitBtn = document.getElementById("submitBtn");

  if (expSlider && expValue) {
    expSlider.addEventListener("input", (e) => {
      const val = e.target.value;
      expValue.innerText = val == 0 ? "Fresher" : val == 20 ? "20+ Years" : `${val} Years`;
    });
  }

  if (fileDropZone && resumeFile && filePreview && fileName && removeFile) {
    const preventDefaults = (e) => { e.preventDefault(); e.stopPropagation(); };

    ["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
      fileDropZone.addEventListener(eventName, preventDefaults, false);
    });

    ["dragenter", "dragover"].forEach(eventName => {
      fileDropZone.addEventListener(eventName, () => fileDropZone.classList.add("dragover"), false);
    });

    ["dragleave", "drop"].forEach(eventName => {
      fileDropZone.addEventListener(eventName, () => fileDropZone.classList.remove("dragover"), false);
    });

    const handleFiles = (files) => {
      if(files.length > 0) {
        const file = files[0];
        if(file.size > 5242880) {
          alert("File is too large. Max size is 5MB.");
          return;
        }
        document.querySelector(".file-drop-inner").style.display = "none";
        filePreview.style.display = "flex";
        fileName.innerText = file.name;
      }
    };

    fileDropZone.addEventListener("drop", (e) => handleFiles(e.dataTransfer.files));
    resumeFile.addEventListener("change", function() { handleFiles(this.files); });

    removeFile.addEventListener("click", () => {
      resumeFile.value = "";
      filePreview.style.display = "none";
      document.querySelector(".file-drop-inner").style.display = "block";
    });
  }

  if (applyForm) {
    // Pre-fill role from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const roleParam = urlParams.get('role');
    const roleSelect = document.getElementById('preferredRole');
    if (roleParam && roleSelect) {
      // Find matching option
      for (let i = 0; i < roleSelect.options.length; i++) {
        if (roleSelect.options[i].value === roleParam) {
          roleSelect.selectedIndex = i;
          break;
        }
      }
    }

    applyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const requiredFields = applyForm.querySelectorAll("[required]");
      let isValid = true;
      
      requiredFields.forEach(field => {
        if(!field.value) {
          isValid = false;
          field.style.borderColor = "var(--danger)";
        } else {
          field.style.borderColor = "var(--light-200)";
        }
      });

      if(!resumeFile.files.length && !filePreview.style.display === "flex") {
         isValid = false;
         alert("Please upload your resume.");
      }

      if(isValid) {
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        submitBtn.disabled = true;

        setTimeout(() => {
          applyForm.style.display = "none";
          formSuccess.style.display = "block";
        }, 1500);
      }
    });
  }

  // Dashboard
  const candidatesList = document.getElementById("candidatesList");
  const candidateSearch = document.getElementById("candidateSearch");
  const interviewForm = document.getElementById("interviewForm");
  const interviewSuccess = document.getElementById("interviewSuccess");

  if (candidatesList) {
    const renderCandidates = (searchQuery = "") => {
      candidatesList.innerHTML = "";
      const filtered = candidatesData.filter(c => 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.role.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if(filtered.length === 0) {
        candidatesList.innerHTML = "<p style='color:var(--dark-500); padding: 1rem;'>No candidates found.</p>";
        return;
      }

      filtered.forEach(c => {
        candidatesList.innerHTML += `
          <div class="candidate-item">
            <div class="c-avatar">${c.initials}</div>
            <div class="c-info">
              <h4 class="c-name">${c.name}</h4>
              <p class="c-role">${c.role}</p>
            </div>
            <span class="c-status status-${c.status}">${c.statusText}</span>
            <div class="c-actions">
              <button title="View Profile"><i class="fas fa-eye"></i></button>
              <button title="Download Resume"><i class="fas fa-download"></i></button>
            </div>
          </div>
        `;
      });
    };

    renderCandidates();

    if (candidateSearch) {
      candidateSearch.addEventListener("input", (e) => renderCandidates(e.target.value));
    }
  }

  if (interviewForm) {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("iDate").min = today;

    interviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = interviewForm.querySelector("button[type='submit']");
      const originalText = btn.innerHTML;
      
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Scheduling...';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        interviewSuccess.style.display = "block";
        interviewForm.reset();
        
        setTimeout(() => {
          interviewSuccess.style.display = "none";
        }, 3000);
      }, 1000);
    });
  }

  // Contact Form
  const contactForm = document.getElementById("contactForm");
  const contactSuccess = document.getElementById("contactSuccess");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector("button[type='submit']");
      const originalText = btn.innerHTML;
      
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        contactSuccess.style.display = "block";
        contactForm.reset();
        
        setTimeout(() => {
          contactSuccess.style.display = "none";
        }, 4000);
      }, 1000);
    });
  }
});
