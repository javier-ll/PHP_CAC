// Iniciar sesion
// Obtener elementos del DOM
var loginModal = document.getElementById("login-modal");
var signupModal = document.getElementById("signup-modal");
var showLoginButton = document.getElementById("show-login");
var showSignUpButton = document.getElementById("show-signup");
var closeLoginButton = document.getElementById("close-login");
var closeSignUpButton = document.getElementById("close-signup");
var signupButton = document.getElementById("signup-button");

// Mostrar modal de inicio de sesión al hacer clic en "Iniciar sesión"
showLoginButton.addEventListener("click", function() {
    loginModal.style.display = "block";
});

// Ocultar modal de inicio de sesión al hacer clic en el botón de cerrar
closeLoginButton.addEventListener("click", function() {
    loginModal.style.display = "none";
});

// Ocultar modal de inicio de sesión al hacer clic fuera del modal
window.addEventListener("click", function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
});

// Mostrar modal de registro al hacer clic en el botón "Registrarse"
signupButton.addEventListener("click", function() {
    loginModal.style.display = "none"; // Oculta el modal de inicio de sesión
    signupModal.style.display = "block"; // Muestra el modal de registro
});
// Registrarse
// Mostrar modal de registro al hacer clic en "Registrarse"
showSignUpButton.addEventListener("click", function() {
    signupModal.style.display = "block";
});
// Ocultar modal de registro al hacer clic en el botón de cerrar
closeSignUpButton.addEventListener("click", function() {
    signupModal.style.display = "none";
});

// Ocultar modal de registro al hacer clic fuera del modal
window.addEventListener("click", function(event) {
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
});

// Negocios
function mostrarModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  
  // Cuando el usuario haga clic fuera de la ventana modal, esta se cerrará
  window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  function cerrarModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
  }