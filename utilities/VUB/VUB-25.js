function VUB25(texto) {
    let semilla = 0;
    for (let i = 0; i < texto.length; i++) semilla += texto.charCodeAt(i) * (i + 1);
    const rand = (function(seed) {
        let a = seed;
        return () => ((a = (a * 9301 + 49297) % 233280) / 233280);
    })(semilla);
    const tile = Array(6).fill().map(() => Array(6).fill(' '));
    for (let i = 0; i < 36; i++) {
        const f = Math.floor(i / 6), c = i % 6;
        tile[f][c] = texto[i % texto.length];
    }
    const mov = (texto.length % 5) + 1;
    for (let x = 0; x < mov; x++) {
        for (let f = 0; f < 6; f++) {
            const p = Math.floor(rand() * 6);
            [tile[f][p], tile[f][(p + 1) % 6]] = [tile[f][(p + 1) % 6], tile[f][p]];
        }
        for (let c = 0; c < 6; c++) {
            const p = Math.floor(rand() * 6);
            [tile[p][c], tile[(p + 1) % 6][c]] = [tile[(p + 1) % 6][c], tile[p][c]];
        }
    }
    const rev = Math.floor(semilla % 3) + 1;
    for (let f = 0; f < 6; f++) {
        for (let c = 0; c < 6; c++) {
            if ((f + c) % rev === 0) tile[f][c] = String.fromCharCode((tile[f].join('').length % 26) + 65);
        }
    }
    let hash = tile.map(r => r.join('')).join('');
    let final = 0;
    for (let i = 0; i < hash.length; i++) final = (final * 31 + hash.charCodeAt(i)) % 0xFFFFFFFF;
    return final.toString(36).padStart(12, '0').slice(-12).toUpperCase();
}

if (typeof window !== 'undefined') window.VUB25 = VUB25;
if (typeof module !== 'undefined') module.exports = VUB25;