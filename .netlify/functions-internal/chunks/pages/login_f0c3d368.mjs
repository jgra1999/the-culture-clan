/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderHead } from '../astro_c3b29a57.mjs';
/* empty css                           */
const $$Astro = createAstro();
const prerender = false;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const cookie = Astro2.request.headers.get("cookie");
  if (cookie === "admin=true") {
    return Astro2.redirect("/admin/dashboard");
  }
  return renderTemplate`<html lang="es" data-astro-cid-rf56lckb><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/icon.svg"><title>The Culture Clan Admin - Login</title>${renderHead()}</head><body data-astro-cid-rf56lckb><div class="flex flex-col gap-y-4 items-center justify-center text-center h-screen mb-10" data-astro-cid-rf56lckb><img src="/favicon.png" class="w-32" data-astro-cid-rf56lckb><!-- <LoginForm client:visible /> --></div></body></html>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/admin/login.astro", void 0);

const $$file = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/admin/login.astro";
const $$url = "/admin/login";

export { $$Login as default, $$file as file, prerender, $$url as url };
