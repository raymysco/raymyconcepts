/* ------------------- js/script.js ------------------- */

// ------------------ Service Modal ------------------
const modal = document.getElementById('serviceModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

function openService(title, description) {
  modalTitle.textContent = title;
  modalBody.textContent = description;
  modal.style.display = 'flex';
}

// Close modal when clicking the close button
closeBtn.onclick = () => {
  modal.style.display = 'none';
};

// Close modal when clicking outside the modal content
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};

// ------------------ Mobile Menu Toggle ------------------
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.onclick = () => {
  navLinks.classList.toggle('active');
};

// ------------------ Back-to-Top Button ------------------
const backToTop = document.getElementById('backToTop');

window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
};

backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ------------------ PWA Service Worker ------------------
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('Service Worker Registered'))
    .catch((err) => console.error('SW Registration Failed:', err));
}

// ------------------ Firebase Blog Placeholder ------------------
/*
  // Uncomment and replace with your Firebase config
  firebase.initializeApp({
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID"
  });

  const db = firebase.firestore();

  db.collection('blog').orderBy('date', 'desc').onSnapshot(snapshot => {
    let postsHTML = '';
    snapshot.forEach(doc => {
      postsHTML += `
        <div class='blog-post'>
          <h4>${doc.data().title}</h4>
          <p>${doc.data().content}</p>
        </div>
      `;
    });
    document.getElementById('posts').innerHTML = postsHTML;
  });
*/
