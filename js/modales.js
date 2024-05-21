// Obtener elementos del DOM
var loginModal = document.getElementById("login-modal");
var signupModal = document.getElementById("signup-modal");
var showLoginButton = document.getElementById("show-login");
var showSignUpButton = document.getElementById("show-signup");
var closeLoginButton = document.getElementById("close-login");
var closeSignUpButton = document.getElementById("close-signup");
var loginButton = document.getElementById("login-button");
var signupButton = document.getElementById("signup-button");
var crearButton = document.getElementById("crear-button");

var loginEmail = document.getElementById("login-email");
var loginPassword = document.getElementById("login-password");
var signupUsername = document.getElementById("signup-username");
var signupEmail = document.getElementById("signup-email");
var signupPassword = document.getElementById("signup-password");

var loginEmailWarning = document.getElementById("login-email-warning");
var loginPasswordWarning = document.getElementById("login-password-warning");
var signupUsernameWarning = document.getElementById("signup-username-warning");
var signupEmailWarning = document.getElementById("signup-email-warning");
var signupPasswordWarning = document.getElementById("signup-password-warning");

// Mostrar modal de inicio de sesión al hacer clic en "Iniciar sesión"
showLoginButton.addEventListener("click", function() {
    loginModal.style.display = "block";
});

// Ocultar modal de inicio de sesión al hacer clic en el botón de cerrar
closeLoginButton.addEventListener("click", function() {
    loginModal.style.display = "none";
    resetLoginForm();
});

// Ocultar modal de inicio de sesión al hacer clic fuera del modal
window.addEventListener("click", function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
        resetLoginForm();
    }
});

// Mostrar modal de registro al hacer clic en "Registrarse"
showSignUpButton.addEventListener("click", function() {
    signupModal.style.display = "block";
});

// Ocultar modal de registro al hacer clic en el botón de cerrar
closeSignUpButton.addEventListener("click", function() {
    signupModal.style.display = "none";
    resetSignupForm();
});

// Ocultar modal de registro al hacer clic fuera del modal
window.addEventListener("click", function(event) {
    if (event.target == signupModal) {
        signupModal.style.display = "none";
        resetSignupForm();
    }
});

// Función para mostrar advertencias de validación
function showWarning(input, warning) {
    if (!input.value.trim() || (input.type === 'text' && input.placeholder.includes('email') && !isValidEmail(input.value))) {
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
    }
}

// Función para validar el correo electrónico
function isValidEmail(email) {
    // Verifica que el email contenga "@" y tenga caracteres después del "@"
    return email.includes('@') && email.split('@')[1].length > 0;
}

// Función para resetear el formulario de inicio de sesión
function resetLoginForm() {
    loginEmail.value = '';
    loginPassword.value = '';
    loginEmailWarning.style.display = 'none';
    loginPasswordWarning.style.display = 'none';
}

// Función para resetear el formulario de registro
function resetSignupForm() {
    signupUsername.value = '';
    signupEmail.value = '';
    signupPassword.value = '';
    signupUsernameWarning.style.display = 'none';
    signupEmailWarning.style.display = 'none';
    signupPasswordWarning.style.display = 'none';
}

// Validación de inicio de sesión
loginButton.addEventListener("click", function() {
    showWarning(loginEmail, loginEmailWarning);
    showWarning(loginPassword, loginPasswordWarning);

    if (loginEmail.value.trim() && loginPassword.value.trim() && isValidEmail(loginEmail.value)) {
        // Aquí puedes añadir la lógica para enviar el formulario
        loginModal.style.display = "none";
        resetLoginForm();
    }
});

// Validación de registro
crearButton.addEventListener("click", function() {
    showWarning(signupUsername, signupUsernameWarning);
    showWarning(signupEmail, signupEmailWarning);
    showWarning(signupPassword, signupPasswordWarning);

    if (signupUsername.value.trim() && signupEmail.value.trim() && signupPassword.value.trim() && isValidEmail(signupEmail.value)) {
        // Aquí puedes añadir la lógica para enviar el formulario
        signupModal.style.display = "none";
        resetSignupForm();
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