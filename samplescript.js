const buttonname = document.getElementById('changeName');
const studentname = document.getElementById('studentName');

buttonname.addEventListener("click", function () {
  studentname.textContent = "Maria Santos";
});

const changeBgBtn = document.getElementById('changeBackground');
const profileCard = document.getElementById('profile');

changeBgBtn.addEventListener('click', function () {
  if (profileCard.style.backgroundColor === 'rgb(209, 251, 244)' || profileCard.style.backgroundColor === '#d1fbf4') {
    profileCard.style.backgroundColor = '#ffffff'; 
  } else {
    profileCard.style.backgroundColor = '#d1fbf4';
  }
});

const toggleDetailsBtn = document.getElementById('toggleDetails');
const detailsText = document.getElementById('details');

toggleDetailsBtn.addEventListener('click', function () {
  detailsText.classList.toggle('hidden');

  if (detailsText.classList.contains('hidden')) {
    toggleDetailsBtn.textContent = 'Show Details';
  } else {
    toggleDetailsBtn.textContent = 'Hide Details';
  }
});