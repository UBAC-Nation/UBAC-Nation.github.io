// main.js
async function cargarPeriodico() {
  try {
    const respuesta = await fetch('../../api/periodico.json');
    const datos = await respuesta.json();
    
    // Fecha
    const fechaDiv = document.getElementById('fecha');
    const hoy = new Date();
    fechaDiv.textContent = `Edición ${datos.edicion || 0} • ${hoy.toLocaleDateString('es-ES')}`;
    
    // Artículos
    const contenedor = document.getElementById('articulos');
    contenedor.innerHTML = '';
    
    datos.periodico.forEach(articulo => {
      const articleDiv = document.createElement('div');
      articleDiv.className = 'article';
      articleDiv.innerHTML = `
        <div class="article-title">${articulo.title}</div>
        <div class="article-text">${articulo.text}</div>
        <div class="article-author">— ${articulo.autors}</div>
      `;
      contenedor.appendChild(articleDiv);
    });
    
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('articulos').innerHTML = '<p style="text-align:center; color:#999;">Cargando periódico...</p>';
  }
}

cargarPeriodico();
