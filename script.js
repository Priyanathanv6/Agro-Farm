// Slideshow functionality
let slideIndex = 0;

// Remove the inline height from the slideshow container
document.querySelector('.slideshow-container').style.height = "";

showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.height = ""; // remove inline height from slides too, if needed
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 1800);
}
setTimeout(() => {
  const container = document.querySelector('.slideshow-container');
  if (container) container.style.height = "";
}, 100); // Adjust delay if necessary

// Toggle Menu
const toggleButton = document.getElementById('menu-toggle');
const navbarLinks = document.getElementById('navbar-links');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// Toggle between login and signup forms without affecting layout
function toggleForms() {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  
  // Hide the login form and show the signup form
  if (loginForm.style.display === 'none') {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  } else {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  }
}

// Phone number input to accept country code and 10-digit number
const phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", function() {
  if (!this.value.startsWith("+")) {
    this.value = "+" + this.value.replace(/[^0-9]/g, '');
  }
  // Ensure the phone number is at most 15 characters
  if (this.value.length > 15) {
    this.value = this.value.slice(0, 15);
  }
});

// CAPTCHA generation
// let captchaText = '';
// const captchaElement = document.getElementById('captcha-text');
// const captchaInput = document.getElementById('captcha-input');

// function generateCaptcha() {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   captchaText = '';
//   for (let i = 0; i < 6; i++) {
//     captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   captchaElement.textContent = captchaText;
// }

// document.getElementById('login-form').addEventListener('submit', function(event) {
//   if (captchaInput.value !== captchaText) {
//     event.preventDefault();  // Stop form submission
//     alert('Incorrect CAPTCHA. Please try again.');
//   }
// });

// // Generate CAPTCHA on page load
// generateCaptcha();

function matchSlideshowHeight() {
  const loginContainer = document.querySelector(".login-container");
  const slideshowContainer = document.querySelector(".slideshow-container");

  if (loginContainer && slideshowContainer) {
    const loginHeight = loginContainer.offsetHeight;
    slideshowContainer.style.height = `${loginHeight}px`;
  }
}

// Run on load
window.addEventListener("load", matchSlideshowHeight);

// Run on resize (optional for responsiveness)
window.addEventListener("resize", matchSlideshowHeight);




// Toast popup function
function showToast(message) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = message;
  document.body.appendChild(toast);
  
  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

// Handle login form submit
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  showToast("Login Successful ✅");
  // Add your login logic here
});

// Handle signup form submit
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  showToast("Signup Successful 🎉");
  // Add your signup logic here
});

// Forgot password
function forgotPassword() {
  const username = prompt("Enter your username to recover password:");
  if (username) {
    showToast(`Recovery link sent to your email for user: ${username}`);
  } else {
    showToast("Username is required for password recovery.");
  }
}





  const roleSelect = document.getElementById("role");

  roleSelect.addEventListener("change", function () {
    this.classList.remove("green", "green");

    if (this.value === "farmer") {
      this.classList.add("green");
    } else if (this.value === "buyer") {
      this.classList.add("green");
    }
  });
