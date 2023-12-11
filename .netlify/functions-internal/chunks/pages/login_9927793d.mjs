/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderHead, e as renderComponent } from '../astro_c3b29a57.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { O as OpenEyeIcon, b as IconEyeOff, c as InputErrorMessage, B as ButtonForm, s as supabase, E as ErrorToast, S as SuccessToast } from './_id__bf1ae4b7.mjs';
import { useForm } from 'react-hook-form';
import '@hookform/resolvers/zod';
import { useState } from 'react';
import { Toaster, toast } from 'sonner';
/* empty css                           */
function InputEmail({ required, register, children }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-2 text-left relative", children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "text-grayText", children: "Correo Electrónico" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        className: "bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg",
        type: "email",
        ...register("email", { required })
      }
    ),
    children
  ] });
}

function InputPassword({ register, required, children }) {
  const [type, setType] = useState("password");
  const handleShowPassword = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-2", children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "flex flex-col text-left text-grayText", children: "Contraseña" }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center w-full relative", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type,
          className: "bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg w-full",
          ...register("password", { required })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute right-3 text-grayText", onClick: handleShowPassword, children: type === "password" ? /* @__PURE__ */ jsx(OpenEyeIcon, {}) : /* @__PURE__ */ jsx(IconEyeOff, {}) }),
      children
    ] })
  ] });
}

function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    // resolver: zodResolver(simpleLoginSchema)
  });
  const setAdminCookie = () => {
    var now = /* @__PURE__ */ new Date();
    var time = now.getTime();
    var expireTime = time + 19 * 24 * 60 * 60 * 1e3;
    now.setTime(expireTime);
    document.cookie = "admin=true; expires=" + now.toUTCString() + "; path=/";
  };
  const handleLoginAdmin = async ({ email, password }) => {
    if (email === "jgra11.2010@gmail.com" || email === "jeremyruanliang@gmail.com") {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (error) {
        toast.error(/* @__PURE__ */ jsx(ErrorToast, { message: "Contraseña incorrecta" }));
      } else {
        setAdminCookie();
        toast.success(/* @__PURE__ */ jsx(SuccessToast, { message: "Sesión iniciada con éxito " }));
        setTimeout(() => {
          location.reload();
        }, 2e3);
      }
    } else {
      toast(/* @__PURE__ */ jsx(ErrorToast, { message: "No tienes permisos para ingresar" }));
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit(handleLoginAdmin),
        className: "min-w-[350px] w-3/4 sm:min-w-0 max-w-[500px] bg-darkGray rounded-lg py-6 px-8 space-y-8",
        children: [
          /* @__PURE__ */ jsx(InputEmail, { register, required: true, children: errors.email && /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.email?.message }) }),
          /* @__PURE__ */ jsx(InputPassword, { register, required: true, children: errors.password && /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.password?.message }) }),
          /* @__PURE__ */ jsx(ButtonForm, { text: "Iniciar Sesión" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Toaster, { theme: "dark", position: "top-right" })
  ] });
}

const $$Astro = createAstro();
const prerender = false;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const cookie = Astro2.request.headers.get("cookie");
  if (cookie === "admin=true") {
    return Astro2.redirect("/admin/dashboard");
  }
  return renderTemplate`<html lang="es" data-astro-cid-rf56lckb><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/icon.svg"><title>The Culture Clan Admin - Login</title>${renderHead()}</head><body data-astro-cid-rf56lckb><div class="flex flex-col gap-y-4 items-center justify-center text-center h-screen mb-10" data-astro-cid-rf56lckb><img src="/favicon.png" class="w-32" data-astro-cid-rf56lckb>${renderComponent($$result, "LoginForm", LoginForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/admin/LoginForm", "client:component-export": "default", "data-astro-cid-rf56lckb": true })}</div></body></html>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/admin/login.astro", void 0);

const $$file = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/admin/login.astro";
const $$url = "/admin/login";

const login = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Login,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { InputEmail as I, InputPassword as a, login as l };
