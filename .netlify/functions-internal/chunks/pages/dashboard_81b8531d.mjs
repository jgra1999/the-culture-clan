/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderComponent } from '../astro_c3b29a57.mjs';
import { $ as $$AdminLayout } from './_id__bf1ae4b7.mjs';
import 'react/jsx-runtime';
import 'react';
import '@headlessui/react';
import 'react-hot-toast';
import 'zustand';
import 'zustand/middleware';
import 'sonner';
/* empty css                          */import 'zod';
import 'react-hook-form';
import '@hookform/resolvers/zod';
import '@supabase/supabase-js';
/* empty css                               *//* empty css                               */
const $$Astro$1 = createAstro();
const $$StatsCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StatsCard;
  const { name, growth = 0, tableUrl, stats } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-darkGray p-4 rounded-lg space-y-4"><div class="flex justify-between items-center"><h5 class="text-grayText">${name}</h5>${growth !== 0 ? renderTemplate`<span${addAttribute(`font-medium ${growth > 0 ? "text-green-600" : "text-red-600"}`, "class")}>${growth > 0 ? `+${growth}%` : `${growth}%`}</span>` : ""}</div><div class="flex flex-col gap-y-5"><span class="text-5xl">${stats}</span><a class="text-white text-sm opacity-50 hover:opacity-100"${addAttribute(tableUrl, "href")}>
Ver tabla
</a></div></div>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/admin/StatsCard.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const cookie = Astro2.request.headers.get("cookie");
  if (cookie !== "admin=true") {
    return Astro2.redirect("/admin/login");
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Dashboard" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div><p class="font-medium">Ultimos 7 dias</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">${renderComponent($$result2, "StatsCard", $$StatsCard, { "name": "Fondos", "growth": 20.18, "stats": `$${245988.54}`, "tableUrl": "/admin/fondos" })}${renderComponent($$result2, "StatsCard", $$StatsCard, { "name": "Ventas", "growth": 4.18, "stats": `$${988.33}`, "tableUrl": "/admin/ventas" })}${renderComponent($$result2, "StatsCard", $$StatsCard, { "name": "Gastos", "growth": -4.18, "stats": `$${87.74}`, "tableUrl": "/admin/gastos" })}${renderComponent($$result2, "StatsCard", $$StatsCard, { "name": "Usuarios", "stats": `${127}`, "tableUrl": "/admin/usuarios" })}${renderComponent($$result2, "StatsCard", $$StatsCard, { "name": "Productos", "stats": `${24}`, "tableUrl": "/admin/productos" })}</div>` })}`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/admin/dashboard.astro", void 0);

const $$file = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/admin/dashboard.astro";
const $$url = "/admin/dashboard";

export { $$Dashboard as default, $$file as file, prerender, $$url as url };
