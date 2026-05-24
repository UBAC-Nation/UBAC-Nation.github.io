function VUBPack(datos, clave) {
  const texto = JSON.stringify(datos);
  let resultado = '';
  for (let i = 0; i < texto.length; i++) {
    const charCode = texto.charCodeAt(i) ^ clave.charCodeAt(i % clave.length);
    resultado += String.fromCharCode(charCode);
  }
  return btoa(resultado);
}

function VUBUnpack(codigo, clave) {
  try {
    const texto = atob(codigo);
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
      const charCode = texto.charCodeAt(i) ^ clave.charCodeAt(i % clave.length);
      resultado += String.fromCharCode(charCode);
    }
    return JSON.parse(resultado);
  } catch (e) {
    return null;
  }
}

if (typeof window !== 'undefined') {
  window.VUBPack = VUBPack;
  window.VUBUnpack = VUBUnpack;
}
if (typeof module !== 'undefined') {
  module.exports = { VUBPack, VUBUnpack };
}