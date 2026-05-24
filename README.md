# UBAC · Un mundo digital

> Salido de una cabeza pensante, que una vez pensó que podria vivir sin tierra, en un mundo tan basto extendido al horizonte, la mente pensante se materializa en una simple idea, la idea de conquistar sin cadenas, la idea de no tratar como esclavo, la libertad de una persona no depende de su amo.

UBAC es un pais digital que no lleva una frontera consigo, no la necesita, alfinal, pronto se acabaran, y que tal si una mente pensante a imaginado un mundo sin una frontera de agua, de tierra, de terrreno, tecnicamente es posible basandote en una sola cosa: "Union"

## Sobre UBAC

UBAC es una plataforma de identidad digital verificable.  
Hash propio (VUB-25), registro único, periódico descentralizado.

- **Código** abierto (MIT License)
- **Identidad** sin vigilancia
- **Datos** del ciudadano, no de la plataforma

## Estructura

- `/data/path.json` → rutas y configuración
- `/api/index.js` → API y helper `UBAC.get()`
- `/assets/css/` → estilos UPrise
- `/auth/` → registro y login
- `/app/` → panel de identidad
- `/public/` → periódico y propuestas

## Uso rápido

```javascript
// Obtener datos del periódico
const periodico = await UBAC.get('periodico');

// Verificar un hash
const resultado = await UBAC.get('verificar', { hash: '000000G5861U' });