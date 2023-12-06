import Swal from 'sweetalert2'; // Asegúrate de tener SweetAlert2 instalado

// Función para validar campos de entrada
export function validarCampo(input) {
  const valor = input.value.trim();
  if (valor === '') {
      input.classList.add('invalid');
  } else {
      input.classList.remove('invalid');
  }
}

// Función para validar una dirección de correo electrónico
export function validarEmail() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailInput = document.getElementById("registroEmailInput");
  const resultadoEmail = document.getElementById("resultadoEmail");
  
  if (!emailRegex.test(emailInput.value)) {
      resultadoEmail.textContent = "La dirección de correo electrónico no es válida.";
      return false;
  }
  
  resultadoEmail.textContent = "";
  return true;
}

export function validarTelefono(telefono) {
  const phoneRegex = /^\d{10}$/; // Se asume que el número debe contener exactamente 10 dígitos

  if (!phoneRegex.test(telefono.replace(/\D/g, ''))) {
    return "El número de teléfono no es válido. Debe contener 10 dígitos.";
  }

  return "";
}


// Función para validar contraseñas
// Función para validar una contraseña
export function validarContrasena(contrasena) {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{10,}$/;

  if (!passwordRegex.test(contrasena)) {
    return "La contraseña no es válida. Debe contener al menos un carácter en mayúscula, al menos un dígito y tener al menos 10 caracteres.";
  }
  return "";
}

// Función para verificar que las contraseñas coincidan
export function verificarContrasenas(contrasena, confirmarContrasena) {
  if (contrasena !== confirmarContrasena) {
    return "Las contraseñas no coinciden.";
  } else {
    return "";
  }
}




// Configuración base para Toast
const Toast = Swal.mixin({
  toast: true,
  position: 'top-start',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});


// Función para mostrar un Toast de error
export function alertaCredencialesIncorrectas() {
  Toast.fire({
    icon: 'error',
    title: 'Credenciales incorrectas. Por favor, intenta de nuevo.'
  });
}

// Función para mostrar un Toast informativo
export function alertaIniciandoSesion() {
  Toast.fire({
    icon: 'info',
    title: 'Iniciando sesión'
  });
}

// Función para mostrar un Toast de éxito y redirigir
export function alertaRegistroExitoso() {
  Toast.fire({
    icon: 'success',
    title: 'Registro exitoso'
  }).then(() => {
    window.location.href = '/login'; // Asegúrate de ajustar la URL según tus rutas
  });
}


export function validarTexto(valor) {
  const regex = /[^a-zA-Z\s]/g;
  if (regex.test(valor)) {
    return "Solo se permiten letras.";
  }
  return "";
}




   // Validación de una cédula personalizada
   export function validarCedula(cedulaPersonalizada) {

    
    if (cedulaPersonalizada.length !== 10) {
      return "La cédula debe tener 10 dígitos.";
    }
  
    if (!/^[0-9]+$/.test(cedulaPersonalizada)) {
      return "La cédula debe contener solo números.";
  
    }
  
    const provincia = Number(cedulaPersonalizada.substring(0, 2));
    if (provincia < 1 || provincia > 24) {
      return "El primer número de la cédula debe estar entre 1 y 24.";
      
    }
  
    const coeficientesCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    const digitoVerificadorCedula = Number(cedulaPersonalizada[9]);
  
    let sumaCedula = 0;
    for (let i = 0; i < 9; i++) {
      let valorCedula = Number(cedulaPersonalizada[i]) * coeficientesCedula[i];
      if (valorCedula > 9) {
        valorCedula -= 9;
      }
      sumaCedula += valorCedula;
    }
  
    const totalCedula = (Math.ceil(sumaCedula / 10) * 10);
    const digitoVerificadorCalculadoCedula = totalCedula - sumaCedula;
  
    if (digitoVerificadorCalculadoCedula === 10) {
      if (digitoVerificadorCedula !== 0) {
        return "La cédula es inválida.";
       
      }
    } else {
      if (digitoVerificadorCedula !== digitoVerificadorCalculadoCedula) {
        return "La cédula es inválida.";
      }
    }
  
      return "";
  }