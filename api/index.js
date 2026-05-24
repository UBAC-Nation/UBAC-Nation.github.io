// api/index.js
(function() {
  window.UBAC = {
    async get(endpoint, params = {}) {
      let url = `/data/${endpoint}.json`;
      
      if (endpoint === 'identidad' && params.id) {
        const res = await fetch('/data/ciudadanos.json');
        const lista = await res.json();
        return lista.find(c => c.id === params.id) || { error: 'no encontrado' };
      }
      
      if (endpoint === 'verificar' && params.hash) {
        const res = await fetch('/data/ciudadanos.json');
        const ciudadanos = await res.json();
        const existe = ciudadanos.some(c => c.hash === params.hash);
        return { hash: params.hash, valido: existe, timestamp: Date.now() };
      }
      
      const res = await fetch(url);
      return res.json();
    }
  };
})();