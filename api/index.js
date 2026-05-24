// api/index.js

function getParams(url) {
  const params = {};
  new URL(url).searchParams.forEach((v, k) => { params[k] = v; });
  return params;
}

async function handleRequest(req) {
  const url = new URL(req.url);
  const endpoint = url.searchParams.get('endpoint');
  const params = getParams(req.url);
  
  let data = null;
  
  switch (endpoint) {
    case 'periodico':
      const res1 = await fetch('/data/periodico.json');
      data = await res1.json();
      break;
      
    case 'propuestas':
      const res2 = await fetch('/data/propuestas.json');
      data = await res2.json();
      break;
      
    case 'ciudadanos':
      const res3 = await fetch('/data/ciudadanos.json');
      data = await res3.json();
      break;
      
    case 'identidad':
      const res4 = await fetch('/data/ciudadanos.json');
      const lista = await res4.json();
      if (params.id) {
        data = lista.find(c => c.id === params.id) || { error: 'no encontrado' };
      } else {
        data = lista;
      }
      break;
      
    case 'hash':
      data = { hash: params.hash, valido: true, timestamp: Date.now() };
      break;
      
    case 'verificar':
      const res5 = await fetch('/data/ciudadanos.json');
      const ciudadanos = await res5.json();
      const existe = ciudadanos.some(c => c.hash === params.hash);
      data = { hash: params.hash, valido: existe, timestamp: Date.now() };
      break;
      
    default:
      return new Response(JSON.stringify({ error: 'endpoint no existe' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
  }
  
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

if (typeof window !== 'undefined') {
  window.UBAC = {
    get: async (endpoint, params = {}) => {
      const q = new URLSearchParams({ endpoint, ...params }).toString();
      const res = await fetch(`/api/?${q}`);
      return res.json();
    }
  };
}

if (typeof module !== 'undefined') {
  module.exports = { handleRequest };
}// api/index.js

function getParams(url) {
  const params = {};
  new URL(url).searchParams.forEach((v, k) => { params[k] = v; });
  return params;
}

async function handleRequest(req) {
  const url = new URL(req.url);
  const endpoint = url.searchParams.get('endpoint');
  const params = getParams(req.url);
  
  let data = null;
  
  switch (endpoint) {
    case 'periodico':
      const res1 = await fetch('/data/periodico.json');
      data = await res1.json();
      break;
      
    case 'propuestas':
      const res2 = await fetch('/data/propuestas.json');
      data = await res2.json();
      break;
      
    case 'ciudadanos':
      const res3 = await fetch('/data/ciudadanos.json');
      data = await res3.json();
      break;
      
    case 'identidad':
      const res4 = await fetch('/data/ciudadanos.json');
      const lista = await res4.json();
      if (params.id) {
        data = lista.find(c => c.id === params.id) || { error: 'no encontrado' };
      } else {
        data = lista;
      }
      break;
      
    case 'hash':
      data = { hash: params.hash, valido: true, timestamp: Date.now() };
      break;
      
    case 'verificar':
      const res5 = await fetch('/data/ciudadanos.json');
      const ciudadanos = await res5.json();
      const existe = ciudadanos.some(c => c.hash === params.hash);
      data = { hash: params.hash, valido: existe, timestamp: Date.now() };
      break;
      
    default:
      return new Response(JSON.stringify({ error: 'endpoint no existe' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
  }
  
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

if (typeof window !== 'undefined') {
  window.UBAC = {
    get: async (endpoint, params = {}) => {
      const q = new URLSearchParams({ endpoint, ...params }).toString();
      const res = await fetch(`/api/?${q}`);
      return res.json();
    }
  };
}

if (typeof module !== 'undefined') {
  module.exports = { handleRequest };
}// api/index.js

function getParams(url) {
  const params = {};
  new URL(url).searchParams.forEach((v, k) => { params[k] = v; });
  return params;
}

async function handleRequest(req) {
  const url = new URL(req.url);
  const endpoint = url.searchParams.get('endpoint');
  const params = getParams(req.url);
  
  let data = null;
  
  switch (endpoint) {
    case 'periodico':
      const res1 = await fetch('/data/periodico.json');
      data = await res1.json();
      break;
      
    case 'propuestas':
      const res2 = await fetch('/data/propuestas.json');
      data = await res2.json();
      break;
      
    case 'ciudadanos':
      const res3 = await fetch('/data/ciudadanos.json');
      data = await res3.json();
      break;
      
    case 'identidad':
      const res4 = await fetch('/data/ciudadanos.json');
      const lista = await res4.json();
      if (params.id) {
        data = lista.find(c => c.id === params.id) || { error: 'no encontrado' };
      } else {
        data = lista;
      }
      break;
      
    case 'hash':
      data = { hash: params.hash, valido: true, timestamp: Date.now() };
      break;
      
    case 'verificar':
      const res5 = await fetch('/data/ciudadanos.json');
      const ciudadanos = await res5.json();
      const existe = ciudadanos.some(c => c.hash === params.hash);
      data = { hash: params.hash, valido: existe, timestamp: Date.now() };
      break;
      
    default:
      return new Response(JSON.stringify({ error: 'endpoint no existe' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
  }
  
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

if (typeof window !== 'undefined') {
  window.UBAC = {
    get: async (endpoint, params = {}) => {
      const q = new URLSearchParams({ endpoint, ...params }).toString();
      const res = await fetch(`/api/?${q}`);
      return res.json();
    }
  };
}

if (typeof module !== 'undefined') {
  module.exports = { handleRequest };
}