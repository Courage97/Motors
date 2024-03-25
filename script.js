// Navbar js
document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {
    
      // close all inner dropdowns when parent is closed
      document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
        everydropdown.addEventListener('hidden.bs.dropdown', function () {
          // after dropdown is hidden, then find all submenus
            this.querySelectorAll('.submenu').forEach(function(everysubmenu){
              // hide every submenu as well
              everysubmenu.style.display = 'none';
            });
        })
      });
    
      document.querySelectorAll('.dropdown-menu a').forEach(function(element){
        element.addEventListener('click', function (e) {
            let nextEl = this.nextElementSibling;
            if(nextEl && nextEl.classList.contains('submenu')) {	
              // prevent opening link if link needs to open dropdown
              e.preventDefault();
              if(nextEl.style.display == 'block'){
                nextEl.style.display = 'none';
              } else {
                nextEl.style.display = 'block';
              }
    
            }
        });
      })
    }
    // end if innerWidth
    }); 
    // DOMContentLoaded  end

    // end of Navbar js

    // project section
    document.querySelectorAll('.carousel .carousel-item').forEach(function (item) {
        var minPerSlide = 4;
        var next = item.nextElementSibling;
        if (!next) {
            next = item.parentNode.firstElementChild;
        }
        item.appendChild(next.firstElementChild.cloneNode(true));
    
        for (var i = 0; i < minPerSlide; i++) {
            next = next.nextElementSibling;
            if (!next) {
                next = item.parentNode.firstElementChild;
            }
            item.appendChild(next.firstElementChild.cloneNode(true));
        }
    });
    
    // end of project session

    // chart session
    // Sample data for charts
    const onlineReviewData = {
        labels: ['Positive', 'Negative', 'Comments'],
        datasets: [{
          label: 'Online Review',
          data: [25, 10, 15],
          backgroundColor: ['#36a2eb', '#ff6384', '#ffce56']
        }]
      };
  
      const interviewData = {
        labels: ['Passed', 'Failed'],
        datasets: [{
          label: 'Interview',
          data: [20, 5],
          backgroundColor: ['#4caf50', '#f44336']
        }]
      };
  
      const publicData = {
        labels: ['Data A', 'Data B', 'Data C'],
        datasets: [{
          label: 'Public Data',
          data: [30, 20, 25],
          backgroundColor: ['#ffc107', '#2196f3', '#9c27b0']
        }]
      };
  
      const healthData = {
        labels: ['Healthy', 'Sick'],
        datasets: [{
          label: 'Health',
          data: [50, 15],
          backgroundColor: ['#8bc34a', '#ff9800']
        }]
      };
  
      // Initialize charts
      const onlineReviewChart = new Chart(document.getElementById('online-review-chart'), {
        type: 'bar',
        data: onlineReviewData,
      });
  
      const interviewChart = new Chart(document.getElementById('interview-chart'), {
        type: 'pie',
        data: interviewData,
      });
  
      const publicDataChart = new Chart(document.getElementById('public-data-chart'), {
        type: 'doughnut',
        data: publicData,
      });
  
      const healthChart = new Chart(document.getElementById('health-chart'), {
        type: 'bar',
        data: healthData,
      });
  
    // end of chart session
    
// PRD Sesction
function downloadDocument() {
  var documentUrl = "https://docs.google.com/document/d/1-Ow-XYwrCEfGq9q48WCAnMdzmRfyQW4s/edit?usp=sharing&ouid=112023860143333336077&rtpof=true&sd=true";
  // Open the document URL in a new tab for download
  window.open(documentUrl, '_blank');
}
// end PRD section

// hardware slider

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
// end of hardware slider

// contact form
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});


// FAQ

document.addEventListener('DOMContentLoaded', function() {
  const toggles = document.querySelectorAll('.faq-toggle');

  toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
          toggle.parentNode.classList.toggle('active');
      });
  });

  // SOCIAL PANEL JS
  const floating_btn = document.querySelector('.floating-btn');
  const close_btn = document.querySelector('.close-btn');
  const social_panel_container = document.querySelector('.social-panel-container');

  floating_btn.addEventListener('click', () => {
      social_panel_container.classList.toggle('visible')
  });

  close_btn.addEventListener('click', () => {
      social_panel_container.classList.remove('visible')
  });
});

ScrollReveal({ reset: true,
  distance:'80px',
  duration:2000,
  delay:200
 });

 ScrollReveal().reveal(".internal, .manufacture, hardware, .chart-display, .external, .project",{origin: "top"});
 ScrollReveal().reveal(".internal, .manufacture, hardware, .chart-display, .external, .project",{origin: "bottom"});
 ScrollReveal().reveal(".internal, .manufacture, hardware, .chart-display, .external, .project",{origin: "left"});
 ScrollReveal().reveal(".internal, .manufacture, hardware, .chart-display, .external, .project",{origin: "right"});
// END OF FAQ