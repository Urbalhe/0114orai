// main.js

// Lekérjük az űrlapot és a siker üzenet div-et
const form = document.querySelector('#registrationForm')
const successDiv = document.querySelector('#successMessage')

// Figyeljük a submit eseményt
form.addEventListener('submit', function(event) {
  event.preventDefault() // Alapértelmezett elküldés megakadályozása

  // Töröljük az űrlap tartalmát
  form.style.display = 'none' 

  
  successDiv.textContent = 'Sikeres regisztráció'
  successDiv.classList.add('alert', 'alert-success')
})


document.title = 'Regisztrációs oldal'
