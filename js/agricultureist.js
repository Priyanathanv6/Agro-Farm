document.addEventListener('DOMContentLoaded', function () {
  const appointmentBtns = document.querySelectorAll('.appointment-btn');
  const toast = document.getElementById('toast');
  const questionForm = document.getElementById('questionForm');
  const questionList = document.getElementById('questionList');
  const questionSelect = document.getElementById('questionSelect');
  const replyForm = document.getElementById('replyForm');
  const farmerSignupForm = document.getElementById('farmerSignupForm');
  
  // Get the feedback form and close button elements
  const feedbackForm = document.getElementById('feedback-form');
  const openFeedbackButton = document.getElementById('open-feedback');
  const closeFeedbackButton = document.querySelector('.close-btn');
  const feedbackMessage = document.getElementById('feedbackMessage'); // Success message container
  
  // Handle appointment requests
  appointmentBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const agriculturistName = btn.dataset.name;
      alert(`Appointment requested with ${agriculturistName}`);
      showToast('Appointment confirmed successfully!');
    });
  });

  // Submit a farmer question
  questionForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const farmerName = document.getElementById('farmerName').value.trim();
    const questionText = document.getElementById('questionText').value.trim();
    const date = new Date().toLocaleString();

    if (farmerName && questionText) {
      const questionItem = document.createElement('div');
      questionItem.classList.add('question-item');
      questionItem.innerHTML = `
        <p><strong>${farmerName}</strong>: ${questionText}</p>
        <p><small>Asked on: ${date}</small></p>
        <button class="reply-btn">Reply</button>
      `;
      questionList.appendChild(questionItem);

      const option = document.createElement('option');
      option.value = farmerName + ": " + questionText;
      option.textContent = `${farmerName} asked: ${questionText}`;
      questionSelect.appendChild(option);

      document.getElementById('farmerName').value = '';
      document.getElementById('questionText').value = '';
    }
  });

  // Handle agriculturist reply
  replyForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const selectedValue = questionSelect.value;
    const replyText = document.getElementById('replyText').value.trim();

    if (selectedValue && replyText) {
      const questionItem = Array.from(questionList.children).find(item =>
        item.textContent.includes(selectedValue.split(':')[1].trim())
      );
      if (questionItem) {
        const reply = document.createElement('div');
        reply.classList.add('reply');
        reply.innerHTML = `<strong>Agriculturist:</strong> ${replyText}`;
        questionItem.appendChild(reply);
      }

      document.getElementById('replyText').value = '';
      closeModal('replyModal');
      showToast('Reply sent successfully!');
    }
  });

  // Farmer signup (if present)
  if (farmerSignupForm) {
    farmerSignupForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const farmerName = document.getElementById('farmerNameSignup').value.trim();
      const farmerEmail = document.getElementById('farmerEmailSignup').value.trim();
      const farmerDetails = document.getElementById('farmerDetails').value.trim();

      if (farmerName && farmerEmail && farmerDetails) {
        alert(`New Farmer Registered: ${farmerName}, ${farmerEmail}`);
        showToast('Farmer registered successfully!');

        document.getElementById('farmerNameSignup').value = '';
        document.getElementById('farmerEmailSignup').value = '';
        document.getElementById('farmerDetails').value = '';
      }
    });
  }

  // Toast Notification Function
  function showToast(message) {
    toast.textContent = message;
    toast.className = 'toast show';
    setTimeout(() => {
      toast.className = 'toast';
    }, 3000);
  }

  // Mobile navbar toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navbarLinks = document.getElementById('navbar-links');
  if (menuToggle && navbarLinks) {
    menuToggle.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });
  }

  // Feedback form open/close functionality
  openFeedbackButton.addEventListener('click', function() {
    feedbackForm.style.display = 'block'; // Show feedback form
  });

  closeFeedbackButton.addEventListener('click', function() {
    feedbackForm.style.display = 'none'; // Hide feedback form
  });

  // Close the feedback modal if the user clicks outside the modal
  window.addEventListener('click', function(event) {
    if (event.target === feedbackForm) {
      feedbackForm.style.display = 'none';
    }
  });

  // Handle feedback submission
  const feedbackSubmitButton = document.getElementById('feedbackSubmitButton');
  feedbackSubmitButton.addEventListener('click', function() {
    // Assuming there's a feedback message field
    const feedbackText = document.getElementById('feedbackText').value.trim();
    if (feedbackText) {
      // Simulate feedback submission
      feedbackForm.style.display = 'none'; // Hide form

      // Show success message
      feedbackMessage.textContent = 'Feedback submitted successfully!';
      feedbackMessage.style.display = 'block'; // Display the success message

      // Hide the success message after a few seconds
      setTimeout(function() {
        feedbackMessage.style.display = 'none';
      }, 3000);

      // Clear feedback text after submission
      document.getElementById('feedbackText').value = '';
    }
  });

});

// Modal utility functions
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Optional: Close modals when clicking outside them
window.onclick = function (event) {
  const replyModal = document.getElementById('replyModal');
  if (event.target === replyModal) {
    replyModal.style.display = 'none';
  }
};



// Feedback Form Handling
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the form data (if needed for further processing)
  const agriculturistName = document.getElementById('feedbackAgriculturistName').value;
  const feedbackText = document.querySelector('#feedbackForm textarea').value;

  // Here you can send the data to a server if required

  // After successful submission, show the success message
  const feedbackMessage = document.getElementById('feedbackMessage');
  feedbackMessage.style.display = 'block';  // Show the success message

  // Optionally, clear the form
  document.getElementById('feedbackForm').reset();

  // Hide the success message after a few seconds (optional)
  setTimeout(() => {
    feedbackMessage.style.display = 'none';  // Hide the success message after 3 seconds
  }, 3000);
});

// Open/Close Feedback Modal
const openFeedbackBtn = document.getElementById('open-feedback');
const closeFeedbackBtn = document.querySelector('.close-btn');
const feedbackModal = document.getElementById('feedback-form');

openFeedbackBtn.addEventListener('click', () => {
  feedbackModal.classList.remove('hidden');
});

closeFeedbackBtn.addEventListener('click', () => {
  feedbackModal.classList.add('hidden');
});
