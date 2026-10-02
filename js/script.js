/* ==========================================================================
   Campus Events - Web Technology Mini-Project
   Pratibha College of Commerce and Computer Science
   Main JavaScript File: js/script.js
   ========================================================================== */

// 1. MASTER EVENT DATA ARRAY
const eventsData = [
  {
    id: "hackathon",
    name: "Hackathon 2026",
    category: "Competition",
    date: "Nov 25, 2026",
    time: "09:00 AM - 09:00 PM (12 Hours)",
    venue: "Computer Lab 1 & 2, PCCCS Campus",
    fee: "₹200 / Team",
    status: "Open",
    image: "images/hackathon.svg",
    description: "12-hour non-stop software hackathon where student teams design, build, and present innovative web, mobile, or AI solutions to solve real-world problems.",
    organizer: "Department of Computer Science & IT",
    maxParticipants: "30 Teams",
    deadline: "Nov 20, 2026",
    eligibility: "Open to all BCA, B.Sc (CS), B.Tech, and MCA students of PCCCS and participating colleges.",
    rules: [
      "Team size must be between 2 to 4 members.",
      "All code must be written during the hackathon hours.",
      "Use of open-source libraries and APIs is allowed with proper attribution.",
      "Final evaluation will be based on innovation, design, functionality, and pitch."
    ]
  },
  {
    id: "freshers-party",
    name: "Freshers Party 2026",
    category: "Creative",
    date: "Nov 28, 2026",
    time: "04:00 PM - 08:00 PM",
    venue: "College Auditorium, PCCCS",
    fee: "Free",
    status: "Open",
    image: "images/freshers-party.svg",
    description: "Official welcome celebration for newly admitted first-year students featuring live music, dance performances, Mr. & Ms. Fresher contest, fun games, and refreshments.",
    organizer: "Student Cultural Committee & PCCCS Senate",
    maxParticipants: "300 Students",
    deadline: "Nov 25, 2026",
    eligibility: "Exclusively for 1st Year & 2nd Year PCCCS students.",
    rules: [
      "College identity card is mandatory for entry at the gate.",
      "Formal or traditional attire recommended.",
      "Prior registration is required for Mr. & Ms. Fresher contest entry.",
      "Strict college discipline and decorum must be maintained throughout."
    ]
  },
  {
    id: "ai-tech-challenge",
    name: "AI Tech Challenge",
    category: "Technical",
    date: "Dec 02, 2026",
    time: "10:00 AM - 03:00 PM",
    venue: "AI & Data Science Research Lab, PCCCS",
    fee: "₹100 / Participant",
    status: "Open",
    image: "images/ai-tech-challenge.svg",
    description: "Technical challenge testing machine learning, prompt engineering, and artificial intelligence model implementation using Python and modern AI tools.",
    organizer: "PCCCS Tech & Innovation Club",
    maxParticipants: "60 Participants",
    deadline: "Nov 30, 2026",
    eligibility: "Open to all computer science and engineering undergraduates.",
    rules: [
      "Individual or duo participation allowed.",
      "Dataset and problem statements will be provided on the spot.",
      "Model accuracy, clean code architecture, and presentation determine winners.",
      "Python, Scikit-Learn, TensorFlow, or PyTorch can be used."
    ]
  },
  {
    id: "startup-spark",
    name: "Startup Spark",
    category: "Workshop",
    date: "Dec 05, 2026",
    time: "11:00 AM - 04:00 PM",
    venue: "Seminar Hall 2, Commerce Block, PCCCS",
    fee: "Free",
    status: "Open",
    image: "images/startup-spark.svg",
    description: "Entrepreneurship workshop and business pitch competition. Learn how to turn project ideas into viable startups, craft business models, and pitch to mentors.",
    organizer: "Entrepreneurship Development Cell (EDC)",
    maxParticipants: "100 Seats",
    deadline: "Dec 02, 2026",
    eligibility: "Open to Commerce, Management, and Computer Science students.",
    rules: [
      "Submit individual or team business ideas (max 3 members per team).",
      "10-minute pitch deck presentation followed by 5-minute Q&A with judges.",
      "Mentorship opportunities and seed guidance awarded to top 3 pitch ideas.",
      "Executive summary must be submitted prior to presentation."
    ]
  },
  {
    id: "quiz-quest",
    name: "Quiz Quest",
    category: "Competition",
    date: "Dec 10, 2026",
    time: "02:00 PM - 05:00 PM",
    venue: "Main Hall, PCCCS Campus",
    fee: "Free",
    status: "Open",
    image: "images/quiz-quest.svg",
    description: "Fast-paced inter-departmental quiz contest covering general tech trivia, computer history, current science affairs, and logical reasoning.",
    organizer: "PCCCS Academic Quiz Club",
    maxParticipants: "80 Participants",
    deadline: "Dec 08, 2026",
    eligibility: "Open to all enrolled students across all streams at PCCCS.",
    rules: [
      "Team size: exactly 2 members per team.",
      "Preliminary written screening round followed by live buzzer stage round.",
      "No electronic gadgets or smartwatches permitted during rounds.",
      "Quiz master's decision is final and binding."
    ]
  },
  {
    id: "cyber-shield-summit",
    name: "Cyber Shield Summit",
    category: "Technical",
    date: "Dec 15, 2026",
    time: "09:30 AM - 04:30 PM",
    venue: "Central Auditorium, PCCCS",
    fee: "Free",
    status: "Open",
    image: "images/cyber-shield-summit.svg",
    description: "National cybersecurity workshop and seminar focusing on ethical hacking, network defense, web security vulnerabilities, and safe digital practices.",
    organizer: "Department of Computer Science & Cyber Cell",
    maxParticipants: "150 Delegates",
    deadline: "Dec 12, 2026",
    eligibility: "Open to all students interested in cybersecurity and network safety.",
    rules: [
      "Live demonstrations will be conducted in a controlled lab environment.",
      "Official certificate of participation will be awarded to all delegates.",
      "Laptops required for interactive hands-on workshop session.",
      "Strict adherence to ethical hacking boundaries is mandatory."
    ]
  }
];

// 2. DOM INITIALIZATION & COMMON LOGIC
document.addEventListener("DOMContentLoaded", function () {
  initNavbar();

  // Page-specific initializations based on elements present
  if (document.getElementById("featuredEventsGrid")) {
    renderFeaturedEvents();
  }

  if (document.getElementById("allEventsGrid")) {
    initEventsPage();
  }

  if (document.getElementById("eventDetailsContainer")) {
    renderEventDetailsPage();
  }

  if (document.getElementById("registrationForm")) {
    initRegistrationForm();
  }

  if (document.getElementById("receiptContent")) {
    renderSuccessPage();
  }

  if (document.getElementById("contactForm")) {
    initContactForm();
  }
});

// 3. NAVIGATION & HAMBURGER MENU
function initNavbar() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  // Active page indicator
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-links a");

  links.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// 4. HELPER: CREATE EVENT CARD HTML
function createEventCardHTML(event) {
  const badgeClass = `badge-${event.category.toLowerCase()}`;
  return `
    <div class="event-card">
      <img src="${event.image}" alt="${event.name}" class="event-card-img" />
      <div class="event-card-body">
        <div class="event-meta">
          <span class="badge ${badgeClass}">${event.category}</span>
          <span class="badge badge-open">${event.status}</span>
        </div>
        <h3 class="event-title">${event.name}</h3>
        <div class="event-info-list">
          <div class="event-info-item">📅 <span>${event.date}</span></div>
          <div class="event-info-item">📍 <span>${event.venue}</span></div>
        </div>
        <p class="event-desc">${event.description}</p>
        <div class="event-card-footer">
          <span class="event-fee">${event.fee}</span>
          <a href="event-details.html?id=${event.id}" class="btn btn-secondary" style="padding: 6px 14px; font-size: 0.85rem;">View Details</a>
        </div>
      </div>
    </div>
  `;
}

// 5. HOME PAGE: FEATURED EVENTS
function renderFeaturedEvents() {
  const grid = document.getElementById("featuredEventsGrid");
  if (!grid) return;

  // Show top 3 events on homepage
  const featured = eventsData.slice(0, 3);
  grid.innerHTML = featured.map((event) => createEventCardHTML(event)).join("");
}

// 6. EVENTS PAGE: SEARCH & FILTER
function initEventsPage() {
  const grid = document.getElementById("allEventsGrid");
  const searchInput = document.getElementById("searchInput");
  const filterBtns = document.querySelectorAll(".filter-btn");

  let currentCategory = "All";
  let currentSearchQuery = "";

  function filterAndRender() {
    const filtered = eventsData.filter((evt) => {
      const matchesCategory =
        currentCategory === "All" || evt.category === currentCategory;
      const matchesSearch =
        evt.name.toLowerCase().includes(currentSearchQuery) ||
        evt.description.toLowerCase().includes(currentSearchQuery) ||
        evt.venue.toLowerCase().includes(currentSearchQuery);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #fff; border: 1px solid #cbd5e1; border-radius: 6px;">
          <h3 style="color: #0f2a4a; margin-bottom: 8px;">No events found</h3>
          <p style="color: #64748b;">Try adjusting your search terms or filter selection.</p>
        </div>
      `;
    } else {
      grid.innerHTML = filtered.map((evt) => createEventCardHTML(evt)).join("");
    }
  }

  // Initial render
  filterAndRender();

  // Search input listener
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      filterAndRender();
    });
  }

  // Category buttons listener
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      currentCategory = this.getAttribute("data-category");
      filterAndRender();
    });
  });
}

// 7. EVENT DETAILS PAGE
function renderEventDetailsPage() {
  const container = document.getElementById("eventDetailsContainer");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get("id");

  const event = eventsData.find((evt) => evt.id === eventId);

  if (!event) {
    container.innerHTML = `
      <div class="content-box" style="text-align: center; padding: 50px 20px;">
        <h2 style="color: #0f2a4a; margin-bottom: 10px;">Event Not Found</h2>
        <p style="color: #64748b; margin-bottom: 20px;">The requested event could not be found or has been removed.</p>
        <a href="events.html" class="btn btn-primary">Back to Events List</a>
      </div>
    `;
    return;
  }

  const badgeClass = `badge-${event.category.toLowerCase()}`;
  const rulesHTML = event.rules.map((rule) => `<li>${rule}</li>`).join("");

  container.innerHTML = `
    <div class="details-wrapper">
      <img src="${event.image}" alt="${event.name}" class="details-header-img" />
      <div class="details-content">
        <div style="display: flex; gap: 10px; margin-bottom: 12px;">
          <span class="badge ${badgeClass}">${event.category}</span>
          <span class="badge badge-open">${event.status}</span>
        </div>
        <h1 style="color: #0f2a4a; font-size: 1.8rem; font-weight: 800; margin-bottom: 15px;">${event.name}</h1>
        <p style="font-size: 1rem; color: #334155; line-height: 1.6;">${event.description}</p>
        
        <div class="details-meta-grid">
          <div class="meta-item">
            <span class="meta-label">Date &amp; Time</span>
            <span class="meta-value">${event.date}<br><small style="font-weight:normal; color:#475569;">${event.time}</small></span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Venue</span>
            <span class="meta-value">${event.venue}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Registration Fee</span>
            <span class="meta-value" style="color: #ea580c;">${event.fee}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Organizer</span>
            <span class="meta-value">${event.organizer}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Max Participants</span>
            <span class="meta-value">${event.maxParticipants}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Last Date to Apply</span>
            <span class="meta-value">${event.deadline}</span>
          </div>
        </div>

        <div class="details-body">
          <h3>Eligibility Criteria</h3>
          <p style="color: #334155; font-size: 0.95rem;">${event.eligibility}</p>

          <h3>Event Rules &amp; Guidelines</h3>
          <ul class="rules-list">
            ${rulesHTML}
          </ul>
        </div>

        <div style="margin-top: 30px; display: flex; gap: 15px; flex-wrap: wrap; align-items: center;">
          <a href="register.html?event=${event.id}" class="btn btn-primary" style="padding: 12px 28px; font-size: 1.05rem;">Register Now</a>
          <a href="events.html" class="btn btn-secondary" style="padding: 12px 24px;">Back to Events</a>
        </div>
      </div>
    </div>
  `;
}

// 8. REGISTRATION FORM VALIDATION & LOCALSTORAGE
function initRegistrationForm() {
  const form = document.getElementById("registrationForm");
  const eventSelect = document.getElementById("event");
  if (!form || !eventSelect) return;

  // Populate event select dropdown
  eventSelect.innerHTML = `<option value="">-- Select an Event --</option>`;
  eventsData.forEach((evt) => {
    const opt = document.createElement("option");
    opt.value = evt.id;
    opt.textContent = `${evt.name} (${evt.category})`;
    eventSelect.appendChild(opt);
  });

  // Pre-select event from URL if present
  const urlParams = new URLSearchParams(window.location.search);
  const preSelectedEvent = urlParams.get("event");
  if (preSelectedEvent) {
    eventSelect.value = preSelectedEvent;
  }

  // Form submission validation
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Helper error setter
    function setError(fieldId, errorMsg) {
      const control = document.getElementById(fieldId);
      const errorDiv = document.getElementById(fieldId + "Error");
      if (control) control.classList.add("invalid");
      if (errorDiv) errorDiv.textContent = errorMsg;
      isValid = false;
    }

    function clearError(fieldId) {
      const control = document.getElementById(fieldId);
      const errorDiv = document.getElementById(fieldId + "Error");
      if (control) control.classList.remove("invalid");
      if (errorDiv) errorDiv.textContent = "";
    }

    // 1. Full Name
    const fullName = document.getElementById("fullName").value.trim();
    if (!fullName) {
      setError("fullName", "Please enter your full name.");
    } else if (fullName.length < 3) {
      setError("fullName", "Full name must be at least 3 characters long.");
    } else {
      clearError("fullName");
    }

    // 2. Roll Number
    const rollNo = document.getElementById("rollNo").value.trim();
    if (!rollNo) {
      setError("rollNo", "Please enter your roll number.");
    } else {
      clearError("rollNo");
    }

    // 3. Email ID
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("email", "Please enter your email address.");
    } else if (!emailRegex.test(email)) {
      setError("email", "Please enter a valid email address (e.g. student@pcccs.edu.in).");
    } else {
      clearError("email");
    }

    // 4. Mobile Number (10-digit Indian mobile)
    const mobile = document.getElementById("mobile").value.trim();
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobile) {
      setError("mobile", "Please enter your mobile number.");
    } else if (!mobileRegex.test(mobile)) {
      setError("mobile", "Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.");
    } else {
      clearError("mobile");
    }

    // 5. College Name
    const college = document.getElementById("college").value.trim();
    if (!college) {
      setError("college", "Please enter your college name.");
    } else {
      clearError("college");
    }

    // 6. Department
    const department = document.getElementById("department").value;
    if (!department) {
      setError("department", "Please select your department.");
    } else {
      clearError("department");
    }

    // 7. Year
    const year = document.getElementById("year").value;
    if (!year) {
      setError("year", "Please select your academic year.");
    } else {
      clearError("year");
    }

    // 8. Event Selection
    const selectedEventId = document.getElementById("event").value;
    if (!selectedEventId) {
      setError("event", "Please select an event to register.");
    } else {
      clearError("event");
    }

    // 9. Gender (OPTIONAL - no validation error if empty)
    const gender = document.getElementById("gender").value || "Not Specified";

    if (isValid) {
      // Find selected event name
      const eventObj = eventsData.find((evt) => evt.id === selectedEventId);
      const eventName = eventObj ? eventObj.name : selectedEventId;

      // Generate Registration ID: EVT-2026-XXXX
      const randomId = Math.floor(1000 + Math.random() * 9000);
      const regId = `EVT-2026-${randomId}`;

      const regData = {
        regId: regId,
        fullName: fullName,
        rollNo: rollNo,
        email: email,
        mobile: mobile,
        college: college,
        department: department,
        year: year,
        eventId: selectedEventId,
        eventName: eventName,
        gender: gender,
        regDate: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric"
        })
      };

      // Store in localStorage
      localStorage.setItem("latestRegistration", JSON.stringify(regData));

      // Append to allRegistrations list
      let allRegs = JSON.parse(localStorage.getItem("allRegistrations")) || [];
      allRegs.push(regData);
      localStorage.setItem("allRegistrations", JSON.stringify(allRegs));

      // Redirect to success.html
      window.location.href = "success.html";
    }
  });
}

// 9. REGISTRATION SUCCESS PAGE
function renderSuccessPage() {
  const container = document.getElementById("receiptContent");
  if (!container) return;

  const dataStr = localStorage.getItem("latestRegistration");

  if (!dataStr) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <h2 style="color: #0f2a4a; margin-bottom: 10px;">No Recent Registration Found</h2>
        <p style="color: #64748b; margin-bottom: 20px;">Please complete the registration form first.</p>
        <a href="register.html" class="btn btn-primary">Go to Registration Page</a>
      </div>
    `;
    return;
  }

  const data = JSON.parse(dataStr);

  container.innerHTML = `
    <div class="success-header">
      <div class="success-icon">✓</div>
      <h2 class="success-title">Registration Successful!</h2>
      <p style="color: #64748b; font-size: 0.95rem;">Your event registration for Pratibha College of Commerce and Computer Science has been recorded.</p>
      
      <div class="reg-id-box">
        <span class="reg-id-label">Registration ID</span>
        <span class="reg-id-val">${data.regId}</span>
      </div>
    </div>

    <table class="receipt-table">
      <tr>
        <th>Full Name</th>
        <td>${data.fullName}</td>
      </tr>
      <tr>
        <th>Roll Number</th>
        <td>${data.rollNo}</td>
      </tr>
      <tr>
        <th>Selected Event</th>
        <td>${data.eventName}</td>
      </tr>
      <tr>
        <th>Email Address</th>
        <td>${data.email}</td>
      </tr>
      <tr>
        <th>Mobile Number</th>
        <td>${data.mobile}</td>
      </tr>
      <tr>
        <th>College</th>
        <td>${data.college}</td>
      </tr>
      <tr>
        <th>Department</th>
        <td>${data.department}</td>
      </tr>
      <tr>
        <th>Academic Year</th>
        <td>${data.year}</td>
      </tr>
      <tr>
        <th>Gender</th>
        <td>${data.gender}</td>
      </tr>
      <tr>
        <th>Registration Date</th>
        <td>${data.regDate}</td>
      </tr>
    </table>
  `;

  // Print button listener
  const printBtn = document.getElementById("printBtn");
  if (printBtn) {
    printBtn.addEventListener("click", function () {
      window.print();
    });
  }
}

// 10. CONTACT FORM
function initContactForm() {
  const form = document.getElementById("contactForm");
  const statusMsg = document.getElementById("contactStatusMsg");
  if (!form || !statusMsg) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all contact form fields.");
      return;
    }

    statusMsg.style.display = "block";
    statusMsg.className = "status-alert info";
    statusMsg.textContent = "Thank you for your message, " + name + "! Your inquiry has been sent to Pratibha College of Commerce and Computer Science Event Desk (Demo Form).";

    form.reset();
  });
}
