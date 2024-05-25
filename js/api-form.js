// Uso de API SheetDBio
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('sheetdb-form');
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true; // Deshabilitar el botón de envío

    await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    }).then(response => response.json())
      .then(() => {
        // Mostrar mensaje de éxito
        alert('Listo! Gracias por comunicarte con nosotros.');
        location.reload(); // Recargar la página
      });

    submitButton.disabled = false; // Habilitar el botón de envío nuevamente
  });
});

// Método GET
document.addEventListener('DOMContentLoaded', () => {
  fetch('https://sheetdb.io/api/v1/7ojzs763c0lud')
  .then(response => response.json())
  .then(data => {
      const registrosBody = document.getElementById('registros-body');
      data.forEach(registro => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${registro.empresa}</td>
              <td>${registro.representante}</td>
              <td>${registro.email}</td>
              <td>${registro.ciudad}</td>
              <td>${registro.telefono}</td>
              <td>${registro.consulta}</td>
          `;
          registrosBody.appendChild(row);
      });
  })
  .catch(error => console.error('Error al obtener los registros:', error));
});
