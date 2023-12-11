/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_c3b29a57.mjs';
import { $ as $$AdminLayout } from './_id__c14a8178.mjs';
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
const $$Astro = createAstro();
const prerender = false;
const $$Fondos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Fondos;
  const cookie = Astro2.request.headers.get("cookie");
  if (cookie !== "admin=true") {
    return Astro2.redirect("/admin/login");
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Fondos" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h2>Fondos</h2>` })}`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/admin/fondos.astro", void 0);

const $$file = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/admin/fondos.astro";
const $$url = "/admin/fondos";

export { $$Fondos as default, $$file as file, prerender, $$url as url };
