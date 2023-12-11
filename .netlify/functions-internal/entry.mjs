import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_9a7c4ada.mjs';
import 'react';
import 'react-dom/server';
import 'ansi-regex';
import './chunks/astro_c3b29a57.mjs';
import './chunks/pages/image-endpoint_9e0dd261.mjs';

const _page0  = () => import('./chunks/image-endpoint_87aa389e.mjs');
const _page1  = () => import('./chunks/index_a6c30028.mjs');
const _page2  = () => import('./chunks/politica-de-privacidad_ed1806d4.mjs');
const _page3  = () => import('./chunks/terminos-y-condiciones_dc751ea8.mjs');
const _page4  = () => import('./chunks/actualizar-contraseña_ec8913fc.mjs');
const _page5  = () => import('./chunks/recuperar-contraseña_0a44aca0.mjs');
const _page6  = () => import('./chunks/contacto_8945b56d.mjs');
const _page7  = () => import('./chunks/sign-in_4e86b4a0.mjs');
const _page8  = () => import('./chunks/sign-up_2031a380.mjs');
const _page9  = () => import('./chunks/index_bc983448.mjs');
const _page10  = () => import('./chunks/_id__5a2326e5.mjs');
const _page11  = () => import('./chunks/dashboard_d4c37ccd.mjs');
const _page12  = () => import('./chunks/index_69d289f2.mjs');
const _page13  = () => import('./chunks/_id__be31f5fb.mjs');
const _page14  = () => import('./chunks/nuevo-producto_538e523d.mjs');
const _page15  = () => import('./chunks/_id__4d1561e0.mjs');
const _page16  = () => import('./chunks/usuarios_3ca53f63.mjs');
const _page17  = () => import('./chunks/fondos_8f0dd8c9.mjs');
const _page18  = () => import('./chunks/gastos_b1d51ad9.mjs');
const _page19  = () => import('./chunks/ventas_ddcd692b.mjs');
const _page20  = () => import('./chunks/login_6c074389.mjs');
const _page21  = () => import('./chunks/faqs_4d29fb7a.mjs');
const _page22  = () => import('./chunks/404_f7d12409.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.0.12/node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/politica-de-privacidad.astro", _page2],["src/pages/terminos-y-condiciones.astro", _page3],["src/pages/actualizar-contraseña.astro", _page4],["src/pages/recuperar-contraseña.astro", _page5],["src/pages/contacto.astro", _page6],["src/pages/sign-in.astro", _page7],["src/pages/sign-up.astro", _page8],["src/pages/tienda/index.astro", _page9],["src/pages/tienda/[id].astro", _page10],["src/pages/admin/dashboard.astro", _page11],["src/pages/admin/productos/index.astro", _page12],["src/pages/admin/productos/editar-producto/[id].astro", _page13],["src/pages/admin/productos/nuevo-producto.astro", _page14],["src/pages/admin/productos/ver-producto/[id].astro", _page15],["src/pages/admin/usuarios.astro", _page16],["src/pages/admin/fondos.astro", _page17],["src/pages/admin/gastos.astro", _page18],["src/pages/admin/ventas.astro", _page19],["src/pages/admin/login.astro", _page20],["src/pages/faqs.astro", _page21],["src/pages/404.astro", _page22]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
