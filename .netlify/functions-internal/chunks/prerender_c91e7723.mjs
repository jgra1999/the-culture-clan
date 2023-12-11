/* empty css                        */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderSlot, b as addAttribute, e as renderComponent, g as createTransitionScope, d as renderHead } from './astro_c3b29a57.mjs';
/* empty css                          */import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { u as useWishlistStore, e as IconHeart, f as IconX, O as OpenEyeIcon, s as supabase, g as IconMenu, h as IconHome, i as IconShirt, j as IconHelpHexagon, k as IconDeviceMobile, l as IconLogin2, m as $$TCCIcon, n as $$ViewTransitions, B as ButtonForm, c as simpleLoginSchema$1, d as InputErrorMessage, o as IconBrandGoogle, p as IconBrandApple, q as SignUpSchema, r as $$Titleh2, t as IconThumbUp, v as IconChevronDown, I as IconChevronLeft, a as IconChevronRight, L as Loader, w as $$GoBackButton, x as ProductsForm, $ as $$AdminLayout } from './pages/_id__c14a8178.mjs';
import { $ as $$Image } from './pages/image-endpoint_9e0dd261.mjs';
import { I as InputEmail, a as InputPassword } from './pages/login_ae40a515.mjs';
import { useState, useEffect, Fragment as Fragment$1 } from 'react';
import { Transition, Dialog, Menu } from '@headlessui/react';
/* empty css                              *//* empty css                        */
const $$Astro$p = createAstro();
const $$HomeSectionContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$HomeSectionContent;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-j4yci562><div class="flex flex-col items-center py-20 gap-y-3" data-astro-cid-j4yci562><h2 data-astro-cid-j4yci562>${renderSlot($$result, $$slots["default"])}</h2><a href="/tienda" class="border-2 border-white py-2 w-36 uppercase text-lg opacity-70 active:opacity-100 lg:hover:opacity-100 text-center" data-astro-cid-j4yci562>
Ver más
</a></div></div>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/home/HomeSectionContent.astro", void 0);

const $$Astro$o = createAstro();
const $$HomeSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$HomeSection;
  const { imageBackground, title } = Astro2.props;
  return renderTemplate`<!-- Desktop section -->${maybeRenderHead()}<section${addAttribute(`${imageBackground} bg-cover h-screen w-full hidden md:flex flex-col gap-y-5 items-center justify-center`, "class")}>${renderComponent($$result, "HomeSectionContent", $$HomeSectionContent, {}, { "default": ($$result2) => renderTemplate`${title} culture` })}</section><!-- Responsive section --><section class="md:hidden"><div${addAttribute(`${imageBackground} w-full h-[400px] bg-cover bg-center`, "class")}></div>${renderComponent($$result, "HomeSectionContent", $$HomeSectionContent, {}, { "default": ($$result2) => renderTemplate`${title} culture` })}</section>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/home/HomeSection.astro", void 0);

const $$Astro$n = createAstro();
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead()}<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1080 427.41" xml-space="preserve" class="h-24 fill-white"><g><g><path d="M493.24,62.61v15.24h-25.75v70.83h-18.1V77.85h-25.87V62.61H493.24z"></path><path d="M503.63,148.68V62.61h17.87v32.82h33.46V62.61h17.87v86.07h-17.87v-38.42h-33.46v38.42L503.63,148.68
			L503.63,148.68z"></path><path d="M652.82,77.85h-44.61v18.28h40.87v14.95h-40.87v22.13h46.71v15.47h-64.29V62.61h62.18L652.82,77.85
			L652.82,77.85z"></path></g><g><path d="M433.54,177.82c6.93-7.08,15.75-10.63,26.46-10.63c14.33,0,24.8,4.75,31.42,14.25
			c3.66,5.33,5.62,10.69,5.89,16.06h-17.98c-1.14-4.13-2.61-7.24-4.4-9.34c-3.2-3.74-7.95-5.61-14.24-5.61
			c-6.41,0-11.46,2.64-15.16,7.91c-3.7,5.28-5.55,12.74-5.55,22.39s1.95,16.88,5.85,21.69s8.86,7.21,14.88,7.21
			c6.17,0,10.87-2.06,14.11-6.19c1.79-2.22,3.27-5.55,4.45-9.98h17.87c-1.54,9.38-5.48,17.01-11.81,22.89
			c-6.34,5.88-14.45,8.82-24.35,8.82c-12.25,0-21.87-3.97-28.88-11.91c-7.01-7.98-10.51-18.92-10.51-32.82
			C421.58,197.54,425.57,185.96,433.54,177.82z"></path><path d="M511.68,168.83h18.28v52.86c0,5.91,0.7,10.23,2.09,12.95c2.17,4.82,6.9,7.23,14.2,7.23
			c7.25,0,11.97-2.41,14.14-7.23c1.4-2.72,2.09-7.04,2.09-12.95v-52.86h18.28v52.9c0,9.15-1.42,16.27-4.26,21.37
			c-5.28,9.34-15.37,14.01-30.25,14.01s-24.99-4.67-30.31-14.01c-2.84-5.1-4.25-12.22-4.25-21.37v-52.9H511.68z"></path><path d="M598.04,168.83h17.98v70.59H659v15.47h-60.96L598.04,168.83L598.04,168.83z"></path><path d="M733.62,168.83v15.24h-25.75v70.83h-18.1v-70.83h-25.87v-15.24H733.62z"></path><path d="M744.14,168.83h18.28v52.86c0,5.91,0.7,10.23,2.09,12.95c2.17,4.82,6.9,7.23,14.2,7.23
			c7.25,0,11.97-2.41,14.14-7.23c1.4-2.72,2.1-7.04,2.1-12.95v-52.86h18.28v52.9c0,9.15-1.42,16.27-4.26,21.37
			c-5.29,9.34-15.37,14.01-30.25,14.01s-24.99-4.67-30.31-14.01c-2.84-5.1-4.26-12.22-4.26-21.37v-52.9H744.14z"></path><path d="M885.65,171.05c3.17,1.36,5.86,3.37,8.06,6.01c1.82,2.18,3.26,4.59,4.33,7.24c1.06,2.65,1.59,5.66,1.59,9.05
			c0,4.09-1.03,8.11-3.09,12.06s-5.47,6.74-10.22,8.38c3.97,1.6,6.78,3.86,8.44,6.8c1.65,2.94,2.48,7.43,2.48,13.46v5.78
			c0,3.93,0.16,6.6,0.47,8c0.47,2.22,1.58,3.85,3.32,4.9v2.16h-19.85c-0.55-1.91-0.93-3.45-1.17-4.61
			c-0.47-2.41-0.72-4.88-0.76-7.42l-0.12-8c-0.07-5.49-1.02-9.15-2.84-10.98s-5.24-2.74-10.25-2.74h-17.56v33.75h-17.57v-86.07
			h41.17C877.96,168.95,882.48,169.69,885.65,171.05z M848.48,183.78v23.12h19.35c3.84,0,6.73-0.47,8.65-1.4
			c3.4-1.63,5.1-4.87,5.1-9.69c0-5.22-1.65-8.72-4.94-10.51c-1.85-1.01-4.62-1.52-8.32-1.52H848.48z"></path><path d="M979.57,184.07h-44.61v18.28h40.87v14.95h-40.87v22.13h46.71v15.47h-64.29v-86.07h62.18L979.57,184.07
			L979.57,184.07z"></path></g><g><path d="M433.54,286.09c6.93-7.08,15.75-10.63,26.46-10.63c14.33,0,24.8,4.75,31.42,14.25
			c3.66,5.33,5.62,10.69,5.89,16.06h-17.98c-1.14-4.13-2.61-7.24-4.4-9.34c-3.2-3.74-7.95-5.61-14.24-5.61
			c-6.41,0-11.46,2.64-15.16,7.91c-3.7,5.28-5.55,12.74-5.55,22.39s1.95,16.89,5.85,21.69c3.9,4.81,8.86,7.21,14.88,7.21
			c6.17,0,10.87-2.06,14.11-6.19c1.79-2.22,3.27-5.55,4.45-9.98h17.87c-1.54,9.38-5.48,17.01-11.81,22.89
			c-6.34,5.88-14.45,8.82-24.35,8.82c-12.25,0-21.87-3.97-28.88-11.91c-7.01-7.98-10.51-18.92-10.51-32.82
			C421.58,305.8,425.57,294.22,433.54,286.09z"></path><path d="M511.68,277.09h17.98v70.59h42.98v15.47h-60.96L511.68,277.09L511.68,277.09z"></path><path d="M609.34,277.09h20.35l30.45,86.07h-19.5l-5.68-17.69h-31.69l-5.83,17.69h-18.81L609.34,277.09z
			 M608.16,330.64h22.04l-10.87-33.87L608.16,330.64z"></path><path d="M670.79,277.09h18.85l34.16,60.01v-60.01h16.76v86.07H722.6l-35.04-61.07v61.07h-16.76V277.09z"></path></g><g><path d="M766.79,365.56c-0.52,0-1.03,0-1.55,0c-0.05-0.01-0.1-0.03-0.16-0.03c-1.96-0.13-3.82-0.64-5.58-1.51
			c-5.15-2.54-7.97-7.61-8.15-12.65c-0.09-2.58,0.5-5.01,1.68-7.3c2.45-4.73,7.48-7.82,12.81-7.86c2.07-0.01,4.07,0.36,5.96,1.21
			c5.05,2.28,7.93,6.22,8.77,11.68c0.05,0.33,0.08,0.67,0.12,1.01c0,0.52,0,1.03,0,1.55c-0.01,0.06-0.03,0.12-0.03,0.18
			c-0.14,2.07-0.68,4.04-1.67,5.87c-2.41,4.46-6.18,6.99-11.17,7.74C767.48,365.49,767.12,365.52,766.79,365.56z M777.71,350.9
			c0.01-6.43-5.25-11.7-11.67-11.71c-6.44-0.01-11.72,5.25-11.72,11.68c-0.01,6.43,5.25,11.7,11.67,11.71
			C772.42,362.59,777.71,357.33,777.71,350.9z"></path><path d="M768.6,351.07c0.84,0.22,1.41,0.77,1.89,1.44c0.3,0.43,0.56,0.88,0.79,1.35c0.69,1.4,1.38,2.8,2.07,4.2
			c0.02,0.04,0.04,0.08,0.07,0.15c-0.09,0-0.16,0.01-0.23,0.01c-1.26,0-2.51,0-3.77,0c-0.16,0-0.24-0.04-0.31-0.19
			c-0.61-1.26-1.23-2.52-1.85-3.78c-0.17-0.34-0.37-0.65-0.59-0.95c-0.42-0.55-0.99-0.83-1.68-0.87c-0.44-0.03-0.88-0.01-1.32-0.02
			c-0.17,0-0.14,0.1-0.14,0.2c0,1.78,0,3.56,0,5.34c0,0.31,0.04,0.27-0.27,0.27c-1.16,0-2.32,0-3.48,0c-0.15,0-0.21-0.03-0.21-0.2
			c0-4.99,0-9.97,0-14.96c0-0.12-0.01-0.2,0.16-0.2c2.28,0.02,4.55-0.04,6.83,0.03c0.82,0.02,1.62,0.16,2.4,0.43
			c1.55,0.54,2.4,1.64,2.51,3.29c0.05,0.82,0,1.63-0.36,2.39c-0.47,1-1.29,1.58-2.3,1.95c-0.06,0.02-0.13,0.05-0.19,0.07
			C768.61,351.03,768.61,351.04,768.6,351.07z M763.54,347.71c0,0.6,0,1.2,0,1.79c0,0.08-0.03,0.18,0.12,0.18
			c0.8-0.02,1.6,0.06,2.4-0.07c0.82-0.13,1.28-0.56,1.42-1.3c0.07-0.36,0.08-0.72,0.02-1.07c-0.12-0.79-0.5-1.21-1.28-1.39
			c-0.12-0.03-0.24-0.05-0.36-0.06c-0.71-0.08-1.42-0.02-2.14-0.04c-0.16-0.01-0.19,0.05-0.19,0.2
			C763.54,346.53,763.54,347.12,763.54,347.71z"></path></g></g><path d="M250.16,56.74c-41.93,0-79.88,16.99-107.36,44.47c-27.47,27.48-44.47,65.44-44.47,107.36
	c0,83.85,67.98,151.83,151.83,151.83h151.83V56.74L250.16,56.74L250.16,56.74z M250.16,346.98c-76.44,0-138.41-61.97-138.41-138.41
	s61.97-138.4,138.41-138.4s138.41,61.96,138.41,138.4S326.6,346.98,250.16,346.98z"></path><g><path d="M132.5,208.47c0.04-55.07,38.09-103.37,91.82-115.51c37.7-8.52,71.93-0.34,102.33,23.64
		c1.24,0.98,1.14,1.43,0.09,2.46c-9.65,9.56-19.27,19.16-28.83,28.82c-1.06,1.07-1.69,1.07-2.88,0.22
		c-27.01-19.19-61.97-18.84-88.48,0.82c-44.8,33.24-37.84,103.67,12.81,127.05c26.34,12.16,51.81,9.52,75.77-6.9
		c1.15-0.79,1.72-0.81,2.73,0.21c9.52,9.61,19.08,19.17,28.7,28.68c1.26,1.24,1.25,1.79-0.14,2.9
		c-18.17,14.56-38.75,23.34-61.93,25.88c-47.71,5.23-93.69-18.44-116.89-60.12C137.63,248.72,132.49,228.91,132.5,208.47z"></path><path d="M251.33,266.6c-34.14,0.13-61.19-29.71-57.67-63.61c2.83-27.22,23.25-48.36,50.38-51.89
		c14.07-1.83,27.12,1.3,39.1,8.93c1.26,0.81,1.29,1.3,0.25,2.31c-4.43,4.34-8.83,8.72-13.16,13.15c-0.92,0.94-1.59,0.9-2.7,0.35
		c-20-9.87-44.17,0.19-50.86,21.5c-4.69,14.96-1.12,28.3,10.61,38.64c11.73,10.33,25.31,11.97,39.67,5.69
		c1.67-0.73,2.59-0.66,3.85,0.65c4.11,4.28,8.34,8.45,12.59,12.6c1.04,1.02,1.01,1.51-0.25,2.31
		C273.42,263.41,262.87,266.65,251.33,266.6z"></path></g></svg>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/icons/Logo.astro", void 0);

const $$Astro$m = createAstro();
const $$MailIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$MailIcon;
  const { styles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(styles, "class")} viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/icons/MailIcon.astro", void 0);

const $$Astro$l = createAstro();
const $$InstagramIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$InstagramIcon;
  const { styles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(styles, "class")} viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M16.5 7.5l0 .01"></path></svg>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/icons/InstagramIcon.astro", void 0);

const $$Astro$k = createAstro();
const $$TiktokIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$TiktokIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="social-icon" viewBox="0 0 24 24" stroke="currentColor" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path></svg>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/icons/TiktokIcon.astro", void 0);

const $$Astro$j = createAstro();
const $$WhatsAppIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$WhatsAppIcon;
  const { styles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(styles, "class")} viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path></svg><!-- TODO: Eliminar luego de comprobar que no se usa -->`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/icons/WhatsAppIcon.astro", void 0);

const $$Astro$i = createAstro();
const $$FooterLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$FooterLink;
  const { url, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li><a${addAttribute(url, "href")} class="opacity-60 hover:opacity-100">${text}</a></li>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/layaout/FooterLink.astro", void 0);

const $$Astro$h = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-col gap-y-10 lg:gap-y-20 bg-darkGray py-20 px-5 xl:px-40"><div class="hidden lg:grid lg:grid-cols-4 mt-auto">${renderComponent($$result, "Logo", $$Logo, {})}<div><h3 class="font-bold mb-2">MENU</h3><ul class="space-y-2 text-sm">${renderComponent($$result, "FooterLink", $$FooterLink, { "url": "/", "text": "Home" })}${renderComponent($$result, "FooterLink", $$FooterLink, { "url": "/tienda", "text": "Colecciones" })}${renderComponent($$result, "FooterLink", $$FooterLink, { "url": "#", "text": "Sobre Nosotros" })}</ul></div><div><h3 class="font-bold mb-2">SOCIAL</h3><ul class="space-y-2 text-sm">${renderComponent($$result, "FooterLink", $$FooterLink, { "url": "https://instagram.com/th3cultureclan?igshid=NGVhN2U2NjQ0Yg==", "text": "Instagram" })}${renderComponent($$result, "FooterLink", $$FooterLink, { "url": "#", "text": "TikTok" })}${renderComponent($$result, "FooterLink", $$FooterLink, { "url": "https://wa.link/phwrwn", "text": "WhatsApp" })}${renderComponent($$result, "FooterLink", $$FooterLink, { "url": "#", "text": "Email" })}</ul></div><div><h3 class="font-bold mb-2">AYUDA</h3><ul class="space-y-2 text-sm">${renderComponent($$result, "FooterLink", $$FooterLink, { "url": "/contacto", "text": "Cont\xE1ctenos" })}${renderComponent($$result, "FooterLink", $$FooterLink, { "url": "politica-de-privacidad", "text": "Pol\xEDtica de Privacidad" })}${renderComponent($$result, "FooterLink", $$FooterLink, { "url": "terminos-y-condiciones", "text": "T\xE9rminos y condiciones" })}</ul></div></div><div class="grid grid-cols-1 lg:hidden gap-y-10">${renderComponent($$result, "Logo", $$Logo, {})}<div class="flex flex-col divide-y-[1px] divide-mediumGray text-lg font-bold text-"><a href="/tienda" class="py-2">COLECCIONES</a><h3 class="py-2">SOCIAL</h3><h3 class="py-2">AYUDA</h3><a href="/contacto" class="py-2">MANTENTE EN CONTACTO</a></div><div class="flex justify-center items-center gap-x-3"><a href="https://instagram.com/th3cultureclan?igshid=NGVhN2U2NjQ0Yg==">${renderComponent($$result, "InstagramIcon", $$InstagramIcon, { "styles": "social-icon" })}</a><a href="https://wa.link/phwrwn">${renderComponent($$result, "WhatsAppIcon", $$WhatsAppIcon, { "styles": "social-icon" })}</a>${renderComponent($$result, "TiktokIcon", $$TiktokIcon, {})}${renderComponent($$result, "MailIcon", $$MailIcon, { "styles": "social-icon" })}</div></div><div class="flex justify-between text-[#484848] pt-4 border-t-2 border-mediumGray"><small> © 2023 The Clan Culture</small><a href="/admin/dashboard" class="hover:text-white">admin</a></div></footer>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/layaout/Footer.astro", void 0);

const $$Astro$g = createAstro();
const $$LoginIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$LoginIcon;
  const { styles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(styles, "class")} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2"></path><path d="M3 12h13l-3 -3"></path><path d="M13 15l3 -3"></path></svg>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/icons/LoginIcon.astro", void 0);

function Wishlist() {
  const [open, setOpen] = useState(false);
  const [currentWishlist, setCurrentWishlist] = useState([]);
  const { wishlist, removeToWishList } = useWishlistStore();
  const getItemsOnWishlist = async () => {
    let items = [];
    wishlist.forEach(async (id) => {
      const { data, error } = await supabase.from("products").select("*").eq("id", id);
      if (data)
        items.push(data[0]);
    });
    setCurrentWishlist(items);
  };
  const handleSendOrder = (currentWishlist2) => {
    const items = currentWishlist2.map((item) => item.name);
    const total = currentWishlist2.reduce(
      (acumulado, item) => acumulado + item.price,
      0
    );
    const WhatsappUrl = `https://wa.me/584244155064?text=Hola!%20Este%20es%20mi%20lista%20de%20deseos:%0A*PEDIDO*:%20${items.join(
      ", "
    )}%0A*TOTAL%20A%20PAGAR:*%20${total}$`;
    window.open(WhatsappUrl);
  };
  useEffect(() => {
    getItemsOnWishlist();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen(true),
        className: "lg:hidden relative",
        children: [
          currentWishlist.length > 0 && /* @__PURE__ */ jsx("span", { className: "absolute inline-flex items-center rounded-full bg-red-600 px-1.5 py-[2px] text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10 ", children: currentWishlist.length }),
          /* @__PURE__ */ jsx(IconHeart, { styles: "w-7 h-7 stroke-white fill-none" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen(true),
        className: "hidden lg:flex items-center gap-x-1 opacity-75 hover:opacity-100 relative",
        children: [
          currentWishlist.length > 0 && /* @__PURE__ */ jsx("span", { className: "absolute inline-flex items-center rounded-full bg-red-600 px-1.5 py-[2px] text-[10px] font-medium text-white ring-1 ring-inset ring-gray-500/10 -right-5 -top-1", children: currentWishlist.length }),
          /* @__PURE__ */ jsx(IconHeart, { styles: "w-5 h-5 stroke-white fill-none" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm", children: "lista de deseos" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Transition.Root, { show: open, as: Fragment$1, children: /* @__PURE__ */ jsxs(Dialog, { as: "div", className: "relative z-10", onClose: setOpen, children: [
      /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment$1,
          enter: "ease-in-out duration-500",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in-out duration-500",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-darkGray bg-opacity-60 transition-opacity" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-y-0 left-2 flex max-w-full pl-10", children: /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment$1,
          enter: "transform transition ease-in-out duration-500 sm:duration-700",
          enterFrom: "translate-x-full",
          enterTo: "translate-x-2",
          leave: "transform transition ease-in-out duration-500 sm:duration-700",
          leaveFrom: "translate-x-0",
          leaveTo: "translate-x-full",
          children: /* @__PURE__ */ jsx(Dialog.Panel, { className: "pointer-events-auto w-screen max-w-md", children: /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col overflow-y-scroll bg-darkGray shadow-xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto px-4 py-6 sm:px-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ jsx(Dialog.Title, { className: "text-lg font-medium text-grayText uppercase", children: "lista de deseos" }),
                /* @__PURE__ */ jsx("div", { className: "ml-3 flex h-7 items-center", children: /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    className: "relative -m-2 p-2 opacity-50 hover:opacity-100 ",
                    onClick: () => setOpen(false),
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "absolute -inset-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close panel" }),
                      /* @__PURE__ */ jsx(IconX, {})
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx("div", { className: "flow-root", children: /* @__PURE__ */ jsxs(
                "ul",
                {
                  role: "list",
                  className: "-my-6 divide-y divide-mediumGray",
                  children: [
                    currentWishlist.length === 0 && /* @__PURE__ */ jsxs("div", { className: "text-center text-lg text-grayText mt-10", children: [
                      "No hay productos en la lista de deseos,",
                      " ",
                      /* @__PURE__ */ jsx("a", { href: "/tienda", className: "text-white", children: "revisa nuestra tienda" })
                    ] }),
                    currentWishlist?.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex py-6", children: [
                      /* @__PURE__ */ jsx("div", { className: "h-24 w-20 flex-shrink-0 overflow-hidden rounded-md", children: /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: item.image_url_2,
                          alt: item.name,
                          className: "h-full w-full object-cover object-center"
                        }
                      ) }),
                      /* @__PURE__ */ jsxs("div", { className: "ml-4 flex flex-1 flex-col", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-base font-medium", children: [
                            /* @__PURE__ */ jsx("h3", { children: /* @__PURE__ */ jsx("a", { href: "#", children: item.name }) }),
                            /* @__PURE__ */ jsxs("p", { className: "ml-4", children: [
                              "$",
                              item.price
                            ] })
                          ] }),
                          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-grayText", children: item.collection })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "flex flex-1 items-end justify-between text-sm", children: /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsxs(
                          "a",
                          {
                            href: `/tienda/${item.slug}`,
                            className: "flex items-center gap-x-1 opacity-70 hover:opacity-100",
                            children: [
                              "overview ",
                              /* @__PURE__ */ jsx(OpenEyeIcon, {})
                            ]
                          }
                        ) }) })
                      ] })
                    ] }, item.id))
                  ]
                }
              ) }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "border-t border-mediumGray px-4 py-6 sm:px-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-base font-medium", children: [
                /* @__PURE__ */ jsx("p", { children: "Subtotal" }),
                /* @__PURE__ */ jsxs("p", { children: [
                  "$",
                  currentWishlist.reduce(
                    (acumulado, item) => acumulado + item.price,
                    0
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-sm text-grayText", children: "Seras enviado al Whatsapp con los productos en tu lista de deseos" }),
              /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => handleSendOrder(currentWishlist),
                  className: "flex items-center justify-center rounded py-3 px-4 text-base border border-white w-full",
                  children: "Realizar Pedido"
                }
              ) })
            ] })
          ] }) })
        }
      ) }) }) })
    ] }) })
  ] });
}

function SideMenuOptions({ children, name, link }) {
  return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: link, className: "flex items-start p-2 text-lg", children: [
    children,
    /* @__PURE__ */ jsx("span", { className: "ml-3", children: name })
  ] }) });
}

function SideMenu() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setOpen(true), children: /* @__PURE__ */ jsx(IconMenu, {}) }),
    /* @__PURE__ */ jsx(Transition.Root, { show: open, as: Fragment$1, children: /* @__PURE__ */ jsxs(Dialog, { as: "div", className: "relative z-10", onClose: setOpen, children: [
      /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment$1,
          enter: "ease-in-out duration-500",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in-out duration-500",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-darkGray bg-opacity-60 transition-opacity" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "pointer-events-none fixed inset-y-0 left-2 flex max-w-full pr-10", children: /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment$1,
          enter: "transform transition ease-in-out duration-500 sm:duration-700",
          enterFrom: "-translate-x-full",
          enterTo: "-translate-x-2",
          leave: "-transform transition ease-in-out duration-500 sm:duration-700",
          leaveFrom: "-translate-x-0",
          leaveTo: "-translate-x-full",
          children: /* @__PURE__ */ jsx(Dialog.Panel, { className: "pointer-events-auto w-screen max-w-md", children: /* @__PURE__ */ jsx("div", { className: "flex h-full flex-col overflow-y-scroll bg-darkGray shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto px-4 py-6 sm:px-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsx(Dialog.Title, { className: "text-lg font-medium text-grayText uppercase", children: "Menu" }),
              /* @__PURE__ */ jsx("div", { className: "ml-3 flex h-7 items-center", children: /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  className: "relative -m-2 p-2 opacity-50 hover:opacity-100 ",
                  onClick: () => setOpen(false),
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "absolute -inset-0.5" }),
                    /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close panel" }),
                    /* @__PURE__ */ jsx(IconX, {})
                  ]
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-16", children: /* @__PURE__ */ jsx("div", { className: "flow-root", children: /* @__PURE__ */ jsxs("ul", { role: "list", className: "-my-6 space-y-2", children: [
              /* @__PURE__ */ jsx(SideMenuOptions, { name: "Home", link: "/", children: /* @__PURE__ */ jsx(IconHome, {}) }),
              /* @__PURE__ */ jsx(SideMenuOptions, { name: "Tienda", link: "/tienda", children: /* @__PURE__ */ jsx(IconShirt, {}) }),
              /* @__PURE__ */ jsx(SideMenuOptions, { name: "FAQ", link: "/", children: /* @__PURE__ */ jsx(IconHelpHexagon, {}) }),
              /* @__PURE__ */ jsx(SideMenuOptions, { name: "Contacto", link: "/contacto", children: /* @__PURE__ */ jsx(IconDeviceMobile, {}) }),
              /* @__PURE__ */ jsx(SideMenuOptions, { name: "Iniciar sesión", link: "/login", children: /* @__PURE__ */ jsx(IconLogin2, {}) })
            ] }) }) })
          ] }) }) })
        }
      ) }) }) })
    ] }) })
  ] });
}

const $$Astro$f = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="absolute top-0 w-full"><div class="p-4 flex justify-between items-center lg:hidden">${renderComponent($$result, "SideMenu", SideMenu, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/layaout/SideMenu", "client:component-export": "default", "data-astro-transition-persist": createTransitionScope($$result, "hxgxn64q") })}<a href="/">${renderComponent($$result, "TCCIcon", $$TCCIcon, {})}</a>${renderComponent($$result, "Wishlist", Wishlist, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/shop/Wishlist", "client:component-export": "default", "data-astro-transition-persist": createTransitionScope($$result, "c4u6m62l") })}</div><!-- Desktop navbar --><div class="hidden lg:flex flex-col relative"><!-- top bar --><div class="bg-black opacity-30 py-5"></div><div class="flex gap-x-8 justify-end items-end absolute top-2.5 right-8"><a href="/sign-in" class="flex items-center gap-x-1 opacity-75 hover:opacity-100">${renderComponent($$result, "LoginIcon", $$LoginIcon, { "styles": "w-5 h-5" })}<span class="text-sm">Iniciar Sesión</span></a>${renderComponent($$result, "Wishlist", Wishlist, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/shop/Wishlist", "client:component-export": "default", "data-astro-transition-persist": createTransitionScope($$result, "3xpxprnf") })}</div><!-- bottom bar --><nav class="bg-transparent flex justify-between items-center px-5"><a href="/">${renderComponent($$result, "Logo", $$Logo, {})}</a><ul class="flex gap-x-[70px] font-medium uppercase"><li><a href="/" class="opacity-70 hover:opacity-100">Home</a></li><li><a href="/tienda" class="opacity-75 hover:opacity-100">Tienda</a></li><li><a href="/faqs" class="opacity-70 hover:opacity-100">FAQ</a></li><li><a href="/contacto" class="opacity-70 hover:opacity-100">Contacto</a></li></ul><form><input type="text" placeholder="Buscar" class="bg-transparent border border-white py-2 px-3 text-xs w-72 opacity-50 focus:opacity-100 outline-none rounded-lg"></form></nav></div></header>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/layaout/Header.astro", "self");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$e = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/icon.svg"><meta name="generator"', ">", '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- favicon --><link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"><link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"><link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/manifest.json"><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"><title>The Culture Clan - ', "</title>", "</head><body>", "", "", '<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"><\/script></body></html>'])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), title, renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/layouts/Layout.astro", void 0);

const $$Astro$d = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main>${renderComponent($$result2, "HomeSection", $$HomeSection, { "imageBackground": "bg-hero4 bg-center", "title": "new" })}${renderComponent($$result2, "HomeSection", $$HomeSection, { "imageBackground": "bg-hero2 bg-top", "title": "pop" })}${renderComponent($$result2, "HomeSection", $$HomeSection, { "imageBackground": "bg-hero1 bg-center", "title": "rap" })}${renderComponent($$result2, "HomeSection", $$HomeSection, { "imageBackground": "bg-hero3 bg-center", "title": "urban" })}</main>` })}`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/index.astro", void 0);

const $$file$b = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/index.astro";
const $$url$b = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$b,
    url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$c = createAstro();
const $$PoliticaDePrivacidad = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$PoliticaDePrivacidad;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Politica de Privacidad" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="pt-32 mb-10"><div class="flex flex-col justify-start gap-y-10 px-10 lg:pt-20"><h2 class="text-3xl md:text-5xl font-bold">Politica de Privacidad</h2><div class="space-y-4 max-w-4xl"><h3 class="text-xl md:text-3xl font-medium">Registro de usuarios</h3><p>
Nuestro sitio web te ofrece la posibilidad de registrarte como usuario con el fin de acceder a funciones que solo 
            tienen los usuarios, como crear tu propio perfil, publicar comentarios, participar en sorteos, recibir ofertas 
            exclusivas y mucho más.
</p><p>
Para registrarte como usuario, solo te pedimos que nos proporciones tu nombre y apellido, tu correo electrónico, 
            tu ciudad y pais de residecia, y finalmente una contraseña.Estos datos son necesarios para identificarte como usuario, para enviarte 
            comunicaciones relacionadas con tu cuenta y para garantizar la seguridad de tu acceso.
</p><p>
Estos datos se almacenan en una base de datos propiedad de The Culture Clan, que cumple con las medidas 
            de seguridad exigidas por la ley. No compartimos estos datos con ningún tercero, salvo que nos des tu 
            consentimiento expreso o que sea requerido por una autoridad competente.
</p><p>
Como usuario registrado, tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales, 
            así como a revocar tu consentimiento en cualquier momento. Para ello, puedes enviar un correo electrónico a info@thecultureclan.com,
             indicando tu nombre, tu correo electrónico y el motivo de tu solicitud.
</p><h3 class="text-xl md:text-3xl font-medium">¿Cómo protegemos tus datos personales?</h3><p>
En The Culture Clan adoptamos las medidas técnicas, organizativas y legales necesarias para proteger tus datos personales 
            y evitar su pérdida, alteración, acceso no autorizado o uso indebido. Algunas de estas medidas son las siguientes:
</p><ul class="list-inside space-y-2"><li class="list-disc">
Encriptamos tus datos personales mediante protocolos seguros, como el SSL (Secure Socket Layer), que garantizan que 
                solo tú y nosotros podemos acceder a ellos.
</li><li class="list-disc">
Limitamos el acceso a tus datos personales solo al personal autorizado y debidamente capacitado, que se 
                compromete a respetar la confidencialidad de los mismos.
</li><li class="list-disc">
Revisamos periódicamente nuestros sistemas y procesos para detectar y corregir posibles vulnerabilidades o brechas de seguridad.
</li><li class="list-disc">
Actualizamos y mejoramos constantemente nuestras medidas de seguridad, de acuerdo con las novedades tecnológicas y legales.
</li></ul><p>
Sin embargo, debes tener en cuenta que ninguna medida de seguridad es infalible, y que existe el riesgo de que tus datos 
            personales puedan ser objeto de ataques informáticos, errores humanos o desastres naturales. Por eso, te recomendamos 
            que también adoptes algunas precauciones, como las siguientes:
</p><ul class="list-inside space-y-2"><li class="list-disc">
No compartas tu contraseña con nadie, ni la anotes en lugares visibles o accesibles.
</li><li class="list-disc">
No abras correos electrónicos o enlaces sospechosos que puedan contener virus o malware.
</li><li class="list-disc">
Mantén tu dispositivo y tu navegador actualizados y con un antivirus instalado.
</li></ul><h3 class="text-xl md:text-3xl font-medium">¿Cómo modificamos nuestra política de privacidad?</h3><p>
Nos reservamos el derecho de modificar nuestra política de privacidad en cualquier momento, para adaptarla 
            a las novedades legales, tecnológicas o comerciales que puedan afectar a nuestro sitio web. Si realizamos 
            algún cambio, te lo comunicaremos mediante un aviso en nuestro sitio web, o mediante un correo electrónico 
            si eres usuario registrado. Te recomendamos que revises periódicamente nuestra política de privacidad, 
            para estar al tanto de cualquier actualización o modificación.
</p><h3 class="text-xl md:text-3xl font-medium">Cookies</h3><p>Las cookies son pequeños archivos que se almacenan en el navegador del usuario cuando visita un sitio web. 
           Las cookies permiten que el sitio web reconozca al usuario y le ofrezca una experiencia personalizada, 
           así como recoger información estadística sobre el uso del sitio web.
</p><p>
En nuestro sitio web, The Culture Clan, utilizamos cookies propias y de terceros con las 
           siguientes finalidades:
</p><ul class="list-inside space-y-2"><li class="list-disc"><strong>Cookies técnicas:</strong>
son necesarias para el correcto funcionamiento del sitio web, como recordar el idioma seleccionado, 
               la sesión iniciada o el carrito de la compra.
</li><li class="list-disc"><strong>Cookies analíticas:</strong>
son las que nos permiten medir y analizar el tráfico y el comportamiento de los usuarios en nuestro sitio web, 
               mediante herramientas como Google Analytics, Facebook Pixel y TikTok Pixel. Estas cookies nos ayudan a mejorar 
               nuestro sitio web y a ofrecer un mejor servicio a nuestros usuarios.
</li><li class="list-disc"><strong>Cookies publicitarias:</strong>
son las que nos permiten mostrar anuncios personalizados a los usuarios en función de sus intereses, preferencias 
               y hábitos de navegación, mediante herramientas como Google Ads, Facebook Ads y TikTok Ads. Estas cookies también
                nos permiten medir la efectividad de nuestras campañas publicitarias.
</li></ul><p>
Puedes configurar tu navegador para bloquear o eliminar las cookies que se almacenan 
           en tu dispositivo. Sin embargo, ten en cuenta que si rechazas o eliminas las cookies, es posible que algunas funcionalidades
            de nuestro sitio web no estén disponibles o no funcionen correctamente.
</p></div></div></main>` })}`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/politica-de-privacidad.astro", void 0);

const $$file$a = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/politica-de-privacidad.astro";
const $$url$a = "/politica-de-privacidad";

const politicaDePrivacidad = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PoliticaDePrivacidad,
    file: $$file$a,
    url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro();
const $$TerminosYCondiciones = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$TerminosYCondiciones;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Politica de Privacidad" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="pt-32 mb-10"><div class="flex flex-col justify-start gap-y-10 px-10 lg:pt-20"><h2 class="text-3xl md:text-5xl font-bold">Términos y Condiciones</h2><div class="space-y-4 max-w-4xl"><p>
Bienvenido a The Culture Clan, la tienda online de una marca de ropa que te ofrece los mejores diseños y la mejor calidad. 
            Al acceder o utilizar nuestro sitio web, aceptas los siguientes términos y condiciones, que regulan la relación entre tú y nosotros. 
            Por favor, lee atentamente estos términos y condiciones antes de usar nuestro sitio web, y si tienes alguna duda, puedes 
            contactarnos a través de los medios que te indicamos al final de este documento.
</p><h3 class="text-xl md:text-3xl font-medium">Identificación</h3><p>
El titular de este sitio web es The Culture Clan, una marca de ropa registrada por sus socios fundadores, 
            con domicilio en el Estado Carabobo, Venezuela, y con correo electrónico de contacto info@thecultureclan.com. 
            En adelante, nos referiremos a nosotros como The Culture Clan, la marca o el titular.
</p><h3 class="text-xl md:text-3xl font-medium">Objeto y alcance</h3><p>
El objeto de este sitio web es ofrecerte una tienda online donde puedas conocer los productos de la marca, consultar 
            sus características, precios y disponibilidad, y realizar una compra si lo deseas. También puedes registrarte
            como usuario para acceder a funciones exclusivas, como crear tu propio perfil, publicar comentarios, participar en 
            sorteos, recibir ofertas especiales y mucho más.
</p><p>
Estos términos y condiciones se aplican a todos los usuarios que visiten o utilicen nuestro sitio web, ya sea como simples 
            visitantes o como usuarios registrados. Al usar nuestro sitio web, aceptas cumplir con estos términos y condiciones, así como
            con nuestra política de privacidad y de cookies, que forman parte integrante de los mismos. Si no estás de acuerdo con estos
            términos y condiciones, debes abstenerse de usar nuestro sitio web.
</p><p>
Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento, para adaptarlos a las novedades legales, 
            tecnológicas o comerciales que puedan afectar a nuestro sitio web. Si realizamos algún cambio, te lo comunicaremos mediante
            un aviso en nuestro sitio web, o mediante un correo electrónico si eres usuario registrado. Te recomendamos que revises 
            periódicamente estos términos y condiciones, para estar al tanto de cualquier actualización o modificación.
</p><h3 class="text-xl md:text-3xl font-medium">Contenido, productos y servicios</h3><p>
En nuestro sitio web, te ofrecemos contenido, productos y servicios relacionados con la marca de ropa The Culture Clan, 
            que se caracteriza por su estilo único, original y de calidad. Todos los contenidos, productos y servicios que se muestran
            en nuestro sitio web son propiedad de la marca o de sus proveedores, y están sujetos a los derechos de propiedad intelectual
            e industrial que les corresponden. No puedes copiar, reproducir, distribuir, modificar, transformar, comunicar públicamente
            o explotar de cualquier otra forma estos contenidos, productos y servicios, sin la autorización previa y por escrito de la marca
            o de sus proveedores.
</p><p>
Los contenidos, productos y servicios que se muestran en nuestro sitio web se presentan de la forma más precisa y 
            actualizada posible, pero pueden contener errores, inexactitudes u omisiones. No garantizamos la exactitud, veracidad, 
            integridad o actualidad de estos contenidos, productos y servicios, ni que los mismos se ajusten a tus expectativas o necesidades
</p><p>
Los precios de los productos que se muestran en nuestro sitio web incluyen el IVA, pero no incluyen los gastos de envío, 
            que se calcularán en función del destino, el peso y el volumen del pedido. Los precios de los productos pueden variar en 
            cualquier momento, sin previo aviso, pero no afectarán a los pedidos ya confirmados. Los productos están sujetos a la 
            disponibilidad de stock, y pueden agotarse o dejar de estar disponibles sin previo aviso. En caso de que no podamos suministrarte 
            un producto que hayas comprado, te lo comunicaremos lo antes posible y te ofreceremos la posibilidad de cambiarlo por otro 
            producto similar, esperar a que se reponga el stock o cancelar el pedido y recibir el reembolso correspondiente.
</p><h3 class="text-xl md:text-3xl font-medium">Condiciones de registro de usuarios</h3><p>
Para registrarte como usuario en nuestro sitio web, debes proporcionarnos tu nombre, tu correo electrónico y una contraseña. 
            Estos datos son necesarios para identificarte como usuario, para enviarte comunicaciones relacionadas con tu cuenta 
            y para garantizar la seguridad de tu acceso. Estos datos se almacenan en una base de datos propiedad de The Culture Clan, 
            que cumple con las medidas de seguridad exigidas por la ley. No compartimos estos datos con ningún tercero, salvo que nos 
            des tu consentimiento expreso o que sea requerido por una autoridad competente.
</p><p>Al registrarte como usuario en nuestro sitio web, aceptas:</p><ul class="list-inside space-y-2"><li class="list-disc">
Proporcionar datos veraces, exactos y completos, y mantenerlos actualizados en todo momento.
</li><li class="list-disc">
Custodiar tu contraseña y no compartirla con nadie, ni permitir que nadie acceda a tu cuenta en tu nombre.
</li><li class="list-disc">
Asumir la responsabilidad de todas las acciones que se realicen desde tu cuenta, y notificarnos inmediatamente 
                cualquier uso no autorizado, fraudulento o indebido de la misma.
</li><li class="list-disc">
Respetar estos términos y condiciones, así como nuestra política de privacidad y de cookies, que forman parte 
                integrante de los mismos.
</li></ul><p>
Nos reservamos el derecho de cancelar tu cuenta de usuario, sin previo aviso, si detectamos o tenemos indicios de que has 
            incumplido estos términos y condiciones, o si lo consideramos necesario por motivos técnicos, de seguridad o de mantenimiento. 
            También nos reservamos el derecho de emprender las acciones legales que correspondan contra ti, si tu conducta supone una 
            infracción o un delito, o si nos causa algún daño o perjuicio.
</p><h3 class="text-xl md:text-3xl font-medium">Limitación de responsabilidad</h3><p>
En The Culture Clan hacemos todo lo posible para ofrecerte un sitio web seguro, funcional y de calidad, así como unos 
            productos y servicios que cumplan con tus expectativas y necesidades. Sin embargo, no podemos garantizar que nuestro sitio web,
            nuestros productos y nuestros servicios estén libres de errores, defectos, interrupciones, retrasos o cualquier otra 
            circunstancia que pueda afectar a su uso o disfrute. Por eso, limitamos nuestra responsabilidad por los posibles daños 
            o perjuicios que puedas sufrir como consecuencia del uso o mal funcionamiento de nuestro sitio web, de nuestra información, 
            de nuestros productos o de nuestros servicios, salvo que se demuestre que hemos actuado con dolo, negligencia grave o 
            incumplimiento de nuestras obligaciones legales.
</p><p>En ningún caso seremos responsables por los daños o perjuicios que se deriven de:</p><ul class="list-inside space-y-2"><li class="list-disc">
El uso ilícito, fraudulento, contrario a estos términos y condiciones o al buen uso de nuestro sitio web, 
                de nuestra información, de nuestros productos o de nuestros servicios por tu parte o por parte de terceros.
</li><li class="list-disc">
La falta de disponibilidad, accesibilidad, continuidad o calidad de nuestro sitio web, de nuestra información, 
                de nuestros productos o de nuestros servicios, por causas ajenas a nuestro control, como fallos en el sistema, 
                en la red, en el servidor, en el proveedor, en el operador o en el servicio de internet, o por causas de fuerza mayor, 
                como huelgas, conflictos bélicos, desastres naturales, etc.
</li><li class="list-disc">
La introducción, difusión o transmisión de virus, malware, spyware o cualquier otro código o programa informático 
                que pueda dañar, alterar o impedir el normal funcionamiento de nuestro sitio web, de tu dispositivo o de los 
                dispositivos de otros usuarios o de terceros.
</li><li class="list-disc">
El acceso, uso o intento de uso de tus datos personales por parte de otros usuarios o de terceros, sin tu 
                consentimiento o autorización, o por causas no imputables a nosotros, como la suplantación de identidad, 
                el robo o la pérdida de tu contraseña, etc.
</li></ul><h3 class="text-xl md:text-3xl font-medium">Contacto</h3><p>
Si tienes alguna pregunta, sugerencia o reclamación sobre estos términos y condiciones, o sobre nuestro sitio web, 
            nuestros productos o nuestros servicios, puedes contactarnos a través de los siguientes medios:
</p><ul class="list-inside space-y-2"><li class="list-disc">
Correo electrónico: info@thecultureclan.com
</li><li class="list-disc">
Redes sociales: instagram @th3cultureclan
</li></ul></div></div></main>` })}`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/terminos-y-condiciones.astro", void 0);

const $$file$9 = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/terminos-y-condiciones.astro";
const $$url$9 = "/terminos-y-condiciones";

const terminosYCondiciones = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$TerminosYCondiciones,
    file: $$file$9,
    url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro();
const $$ActualizarContrasea = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ActualizarContrasea;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Recuperar Contrase\xF1a" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="flex flex-col gap-y-4 items-center justify-center pt-24 text-center h-screen"><!-- <Logo /> --><div class="space-y-2"><h2 class="text-3xl md:text-5xl font-bold">Actualizar Contraseña</h2><p class="text-grayText text-sm">Ingresa tu nueva contraseña</p></div><div class="flex flex-col gap-y-8 justify-center w-3/4 mt-5 divide-y-2 divide-mediumGray min-w-[90%] sm:min-w-0 max-w-[600px] bg-darkGray rounded-lg py-6 px-8"><form class="flex flex-col gap-y-4"><div class="grid grid-cols-1 gap-y-5 gap-x-8"><!-- <InputPassword label="Contraseña" client:visible />
                    <InputPassword label="Asegurate bien" client:visible /> --></div><button class="border-2 border-mediumGray py-3 px-4 text-center rounded-lg w-full opacity-50 hover:opacity-100">Actualizar</button></form></div></main>` })}`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/actualizar-contrase\xF1a.astro", void 0);

const $$file$8 = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/actualizar-contraseña.astro";
const $$url$8 = "/actualizar-contraseña";

const actualizarContrase_a = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ActualizarContrasea,
    file: $$file$8,
    url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

function ResetPassForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(simpleLoginSchema)
  });
  return /* @__PURE__ */ jsxs("form", { className: "flex flex-col gap-y-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-2 text-left relative", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "reset_pass", className: "text-grayText", children: "Correo Electronico" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          className: "bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg",
          type: "email",
          ...register(reset_pass, { required: true })
        }
      ),
      children
    ] }),
    /* @__PURE__ */ jsx(ButtonForm, { text: "Enviar Email" })
  ] });
}

const $$Astro$9 = createAstro();
const $$RecuperarContrasea = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$RecuperarContrasea;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Recuperar Contrase\xF1a" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="flex flex-col gap-y-4 items-center justify-center pt-24 text-center h-screen"><!-- <Logo /> --><div class="space-y-2"><h2 class="text-3xl md:text-5xl font-bold">Recuperar Contraseña</h2><p class="text-grayText text-sm">Ten enviaremos un email para que puedas actualizar tu contraseña</p></div><div class="flex flex-col gap-y-8 justify-center w-3/4 mt-5 divide-y-2 divide-mediumGray min-w-[90%] sm:min-w-0 max-w-[600px] bg-darkGray rounded-lg py-6 px-8">${renderComponent($$result2, "ResetPassForm", ResetPassForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/form/ResetPassForm", "client:component-export": "default" })}</div></main>` })}`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/recuperar-contrase\xF1a.astro", void 0);

const $$file$7 = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/recuperar-contraseña.astro";
const $$url$7 = "/recuperar-contraseña";

const recuperarContrase_a = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$RecuperarContrasea,
    file: $$file$7,
    url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro();
const $$LocationIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$LocationIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="w-5 h-5 md:w-6 md:h-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5.5"></path><path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"></path><path d="M19 18v.01"></path></svg>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/icons/LocationIcon.astro", void 0);

const $$Astro$7 = createAstro();
const $$PhoneIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$PhoneIcon;
  const { styles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`flex-shrink-0 ${styles}`, "class")} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z"></path><path d="M11 4h2"></path><path d="M12 17v.01"></path></svg>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/icons/PhoneIcon.astro", void 0);

const QrInstagram = {"src":"/_astro/Qr-Instagram.972a7e7a.png","width":1080,"height":1350,"format":"png"};

const QrWhatsapp = {"src":"/_astro/Qr-whatsapp.645b1379.png","width":1080,"height":1350,"format":"png"};

const $$Astro$6 = createAstro();
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="pt-36 grid grid-cols-1 lg:grid-cols-2 gap-y-10"><div class="flex flex-col justify-start gap-y-5 px-8 lg:pt-20"><h2 class="text-3xl md:text-5xl font-bold">Mantente en Contacto</h2><p class="font-medium md:text-lg xl:max-w-[90%] text-grayText">
Tu opinión es muy importante, por eso te invitamos a que nos escribas siempre que quieras. 
                Puedes enviarnos un correo electrónico, escribirnos por teléfono o seguirnos en redes sociales. Estaremos encantados 
                de responder a tus consultas, escuchar tus sugerencias, leer tus comentarios o recibir tus 
                felicitaciones.
</p><ul class="space-y-3"><li class="flex gap-x-1 text-grayText text-sm md:text-base font-medium items-center">${renderComponent($$result2, "LocationIcon", $$LocationIcon, {})}
Venezuela | Colombia
</li><li class="flex gap-x-1 text-grayText text-sm md:text-base font-medium items-center">${renderComponent($$result2, "PhoneIcon", $$PhoneIcon, { "styles": "w-5 h-5 md:w-6 md:h-6" })}
+58 424-4155064
</li><li class="flex gap-x-1 text-grayText text-sm md:text-base font-medium items-center">${renderComponent($$result2, "InstagramIcon", $$InstagramIcon, { "styles": "w-5 h-5 md:w-6 md:h-6" })}
th3cultureclan
</li><li class="flex gap-x-1 text-grayText text-sm md:text-base font-medium items-center">${renderComponent($$result2, "MailIcon", $$MailIcon, { "styles": "w-5 h-5 md:w-6 md:h-6" })}
adm.thecultureclan@gmail.com
</li></ul></div><div class="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-5 lg:gap-10 bg-darkGray w-full h-screen lg:pt-20">${renderComponent($$result2, "Image", $$Image, { "src": QrInstagram, "alt": "Instagram QR imagen", "width": 294, "height": 350, "quality": 100 })}${renderComponent($$result2, "Image", $$Image, { "src": QrWhatsapp, "width": 294, "alt": "WhatsApp QR imagen", "height": 350 })}</div></main>` })}`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/contacto.astro", void 0);

const $$file$6 = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/contacto.astro";
const $$url$6 = "/contacto";

const contacto = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacto,
    file: $$file$6,
    url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

function SignInForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(simpleLoginSchema$1)
  });
  const handleSignInUser = async ({ email, password }) => {
    await supabase.auth.signInWithPassword({
      email,
      password
    });
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit(handleSignInUser),
      className: "flex flex-col justify-center gap-y-8",
      children: [
        /* @__PURE__ */ jsx(InputEmail, { register, required: true, children: errors.email && /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.email?.message }) }),
        /* @__PURE__ */ jsx(InputPassword, { register, required: true, children: errors.password && /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.password?.message }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-2", children: [
          /* @__PURE__ */ jsx("a", { href: "/sign-up", className: "text-sm opacity-50 hover:opacity-100", children: "Crear Cuenta" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/recuperar-contraseña",
              className: "text-sm opacity-50 hover:opacity-100",
              children: "¿Olvidaste tu Contraseña?"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(ButtonForm, { text: "Iniciar Sesión" })
      ]
    }
  );
}

function GmailAuthButton() {
  const handleAuthButton = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent"
        }
      }
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: handleAuthButton,
      className: "flex items-start justify-center gap-x-1 border-2 border-mediumGray py-3 px-4 text-center rounded-lg mt-8 w-full opacity-50 hover:opacity-100",
      children: [
        /* @__PURE__ */ jsx(IconBrandGoogle, {}),
        /* @__PURE__ */ jsx("span", { children: "Gmail" })
      ]
    }
  ) });
}

function AppleAuthButton() {
  const handleAuthButton = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent"
        }
      }
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: handleAuthButton,
      className: "flex items-start justify-center gap-x-1 border-2 border-mediumGray py-3 px-4 text-center rounded-lg mt-8 w-full opacity-50 hover:opacity-100",
      children: [
        /* @__PURE__ */ jsx(IconBrandApple, {}),
        /* @__PURE__ */ jsx("span", { children: "Apple" })
      ]
    }
  ) });
}

const $$Astro$5 = createAstro();
const $$SignIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SignIn;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Iniciar Sesi\xF3n" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="flex flex-col gap-y-4 items-center justify-center pt-44 text-center h-screen mb-10"><!-- <Logo /> --><h2 class="text-3xl md:text-5xl font-bold">Iniciar Sesión</h2><div class="flex flex-col gap-y-8 justify-center w-3/4 mt-5 divide-y-2 divide-mediumGray min-w-[90%] sm:min-w-0 max-w-[550px] bg-darkGray rounded-lg py-6 px-8">${renderComponent($$result2, "SignInForm", SignInForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/form/SignIn", "client:component-export": "default" })}<div class="grid grid-cols-1 md:grid-cols-2 gap-5">${renderComponent($$result2, "GmailAuthButton", GmailAuthButton, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/form/GmailAuthButton", "client:component-export": "default" })}${renderComponent($$result2, "AppleAuthButton", AppleAuthButton, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/form/AppleAuthButton", "client:component-export": "default" })}</div></div><div class="px-3"><p class="text-grayText text-sm">Al crear una cuenta estas aceptando nuestros términos y condiciones, puedes revisarlos <a href="/terminos-y-condiciones" class="text-white">aqui</a></p></div></main>` })}`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/sign-in.astro", void 0);

const $$file$5 = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/sign-in.astro";
const $$url$5 = "/sign-in";

const signIn = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$SignIn,
    file: $$file$5,
    url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

function InputForm({
  label,
  type,
  name,
  required,
  register,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-2 text-left relative", children: [
    /* @__PURE__ */ jsx("label", { htmlFor: name, className: "text-grayText", children: label }),
    /* @__PURE__ */ jsx(
      "input",
      {
        className: "bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg",
        type,
        ...register(name, { required })
      }
    ),
    children
  ] });
}

function signUpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(SignUpSchema)
  });
  const handleSignUpUser = async ({
    name,
    last_name,
    email,
    password,
    country,
    city
  }) => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: `${name} ${last_name}`,
          email,
          country,
          city
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit(handleSignUpUser),
      className: "flex flex-col justify-center gap-y-10",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8", children: [
          /* @__PURE__ */ jsx(
            InputForm,
            {
              label: "Nombre",
              type: "text",
              register,
              name: "name",
              required: true,
              children: errors.name && /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.name?.message })
            }
          ),
          /* @__PURE__ */ jsx(
            InputForm,
            {
              label: "Apellido",
              type: "text",
              register,
              name: "last_name",
              required: true,
              children: errors.last_name && /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.last_name?.message })
            }
          ),
          /* @__PURE__ */ jsx(
            InputForm,
            {
              label: "País",
              type: "text",
              register,
              name: "country",
              required: true,
              children: errors.country && /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.country?.message })
            }
          ),
          /* @__PURE__ */ jsx(
            InputForm,
            {
              label: "Ciudad",
              type: "text",
              register,
              name: "city",
              required: true,
              children: errors.city && /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.city?.message })
            }
          ),
          /* @__PURE__ */ jsx(
            InputForm,
            {
              label: "Correo Electrónico",
              type: "email",
              register,
              name: "email",
              required: true,
              children: errors.email && /* @__PURE__ */ jsx(
                InputErrorMessage,
                {
                  message: errors.email?.message,
                  styles: "truncate overflow-hidden text-ellipsis w-64"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            InputForm,
            {
              label: "Contraseña",
              type: "password",
              register,
              name: "password",
              required: true,
              children: errors.password && /* @__PURE__ */ jsx(
                InputErrorMessage,
                {
                  message: errors.password?.message,
                  styles: "truncate overflow-hidden text-ellipsis w-64"
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ jsx(ButtonForm, { text: "Registrarse" })
      ]
    }
  );
}

const $$Astro$4 = createAstro();
const $$SignUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SignUp;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Crear Cuenta" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="flex flex-col gap-y-4 items-center justify-center pt-40 mb-10 text-center"><div>${renderComponent($$result2, "Titleh2", $$Titleh2, { "title": "Crear Cuenta" })}</div><div class="w-3/4 mt-5 min-w-[90%] sm:min-w-0 max-w-[600px] bg-darkGray rounded-lg py-6 px-8">${renderComponent($$result2, "SignUpForm", signUpForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/form/SignUpForm", "client:component-export": "default" })}</div><div class="px-3"><p class="text-grayText text-sm">Al crear una cuenta estas aceptando nuestros términos y condiciones, puedes revisarlos <a href="/terminos-y-condiciones" class="text-white">aqui</a></p></div></main>` })}`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/sign-up.astro", void 0);

const $$file$4 = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/sign-up.astro";
const $$url$4 = "/sign-up";

const signUp = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$SignUp,
    file: $$file$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

function ItemCard({
  id,
  image_url_2,
  name,
  price,
  likes,
  slug
}) {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: `/tienda/${slug}`,
      className: "flex flex-col gap-y-4 hover:scale-105 transition-all",
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: image_url_2,
            alt: `Franela - ${name}`,
            className: "aspect-[384/576] h-full w-full rounded-lg",
            style: { viewTransitionName: `book-${id}` }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between font-medium", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-[#5e5e5e] text-xl font-bold", children: name }),
            /* @__PURE__ */ jsxs("span", { className: "text-xl", children: [
              "$",
              price,
              ".00"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-x-1 items-start", children: [
            /* @__PURE__ */ jsx(IconThumbUp, { fill: "none" }),
            likes
          ] })
        ] })
      ]
    }
  );
}

function CollectionDropDown({
  setCollection
}) {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Menu, { as: "div", className: "relative inline-block", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Menu.Button, { className: "inline-flex w-full text-xs md:text-base items-center font-medium", children: [
      "Colecciones",
      /* @__PURE__ */ jsx(IconChevronDown, {})
    ] }) }),
    /* @__PURE__ */ jsx(
      Transition,
      {
        as: Fragment$1,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: /* @__PURE__ */ jsxs(Menu.Items, { className: "flex flex-col items-start absolute right-0 mt-2 w-56 bg-darkGray focus:outline-none z-10", children: [
          /* @__PURE__ */ jsx(Menu.Item, { children: /* @__PURE__ */ jsx(
            "button",
            {
              className: "opacity-70 hover:opacity-100 px-4 py-2",
              onClick: setCollection,
              value: "",
              children: "Todas"
            }
          ) }),
          /* @__PURE__ */ jsx(Menu.Item, { children: /* @__PURE__ */ jsx(
            "button",
            {
              className: "opacity-70 hover:opacity-100 px-4 py-2",
              onClick: setCollection,
              value: "New Culture",
              children: "New Culture"
            }
          ) }),
          /* @__PURE__ */ jsx(Menu.Item, { children: /* @__PURE__ */ jsx(
            "button",
            {
              className: "opacity-70 hover:opacity-100 px-4 py-2",
              onClick: setCollection,
              value: "Rap Culture",
              children: "Rap Culture"
            }
          ) }),
          /* @__PURE__ */ jsx(Menu.Item, { children: /* @__PURE__ */ jsx(
            "button",
            {
              className: "opacity-70 hover:opacity-100 px-4 py-2",
              onClick: setCollection,
              value: "Pop New Culture",
              children: "Pop Culture"
            }
          ) }),
          /* @__PURE__ */ jsx(Menu.Item, { children: /* @__PURE__ */ jsx(
            "button",
            {
              className: "opacity-70 hover:opacity-100 px-4 py-2",
              onClick: setCollection,
              value: "Urban Culture",
              children: "Urban Culture"
            }
          ) })
        ] })
      }
    )
  ] }) });
}

function ItemsList() {
  const [items, setItems] = useState();
  const [loading, setLoading] = useState(false);
  const [collection, setCollection] = useState("");
  const [orderBy, setOrderBy] = useState("created_at");
  const [page, setPage] = useState(1);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(7);
  const ITEMS_PER_PAGE = 7;
  const fetchItems = async () => {
    try {
      setLoading(true);
      let query = supabase.from("products").select("*").range(from, to);
      if (collection)
        query = query.eq("collection", collection);
      const { data, error } = await query.order(orderBy, { ascending: false });
      setItems(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
  const handleCollectionFilter = (e) => {
    setCollection(e.target.value);
  };
  const handleNextButton = () => {
    let from2 = page * ITEMS_PER_PAGE;
    let to2 = from2 + ITEMS_PER_PAGE;
    if (page > 0) {
      from2 += 1;
      to2 += 1;
    }
    setFrom(from2);
    setTo(to2);
    setPage(page + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const handlePrevButton = () => {
    let oldFrom = from - ITEMS_PER_PAGE;
    let oldTo = to - ITEMS_PER_PAGE;
    if (page === 2) {
      oldFrom -= 2;
      oldTo -= 1;
    }
    setFrom(oldFrom);
    setTo(oldTo);
    setPage(page - 1);
  };
  useEffect(() => {
    fetchItems();
  }, [collection, from, orderBy]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-5 ", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-lightGray flex justify-between sm:justify-normal items-center w-full text-sm font-medium gap-x-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setOrderBy("created_at"),
            className: `text-xs md:text-base ${orderBy === "created_at" ? "opacity-100" : "opacity-50"}`,
            children: "Más Recientes"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setOrderBy("likes"),
            className: `text-xs md:text-base ${orderBy === "likes" ? "opacity-100" : "opacity-50"}`,
            children: "Más Populares"
          }
        ),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(CollectionDropDown, { setCollection: handleCollectionFilter }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex justify-between gap-x-5", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handlePrevButton,
            className: `p-1.5 flex items-center justify-center border-2 border-white rounded opacity-50 ${page === 1 ? "" : "hover:opacity-100"}`,
            disabled: page === 1,
            children: /* @__PURE__ */ jsx(IconChevronLeft, { styles: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleNextButton,
            className: `p-1.5 flex items-center justify-center border-2 border-white rounded opacity-50 ${items && items.length <= 7 ? "" : "hover:opacity-100"}`,
            disabled: items ? items.length <= 7 : false,
            children: /* @__PURE__ */ jsx(IconChevronRight, { styles: "w-6 h-6" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mt-10 md:mt-20 mb-10 relative", children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10", children: items?.map((item) => /* @__PURE__ */ jsx(
        ItemCard,
        {
          id: item.id,
          name: item.name,
          image_url_2: item.image_url_2,
          price: item.price,
          likes: item.likes,
          slug: item.slug
        },
        item.id
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-10 lg:hidden", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handlePrevButton,
            className: "px-2 py-[7px] flex items-center justify-center border-2 border-white rounded opacity-50 active:opacity-100",
            disabled: page === 1,
            children: /* @__PURE__ */ jsx(IconChevronLeft, { styles: "w-8 h-8" })
          }
        ),
        items && items.length > 7 ? /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleNextButton,
            className: "px-2 py-[7px] flex items-center justify-center border-2 border-white rounded opacity-50 active:opacity-100",
            disabled: items ? items.length <= 7 : false,
            children: /* @__PURE__ */ jsx(IconChevronRight, { styles: "w-8 h-8" })
          }
        ) : ""
      ] }),
      loading && /* @__PURE__ */ jsx(Loader, {})
    ] })
  ] });
}

const $$Astro$3 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tienda" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="pt-28 min-h-[1000px] lg:pt-52 px-14 xl:container xl:mx-auto"><div class="flex flex-col pb-10 lg:gap-y-32 items-center border-b-2 border-mediumGray"><h2 class="text-2xl lg:text-5xl font-bold uppercase tracking-wider text-center">
Todos los Productos
</h2></div>${renderComponent($$result2, "ItemsList", ItemsList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/shop/ItemsList", "client:component-export": "default", "data-astro-transition-persist": createTransitionScope($$result2, "hvnfo36q") })}</main>` })}`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/tienda/index.astro", "self");

const $$file$3 = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/tienda/index.astro";
const $$url$3 = "/tienda";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$NuevoProducto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NuevoProducto;
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Nuevo Producto" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "GoBackButton", $$GoBackButton, {})}${maybeRenderHead()}<div class="flex flex-col items-center">${renderComponent($$result2, "Titleh2", $$Titleh2, { "title": "Crear Nuevo Producto" })}<div class="flex flex-col gap-y-8 justify-center my-5 divide-mediumGray w-[90%] sm:min-w-0 max-w-[600px] bg-darkGray rounded-lg py-6 px-8">${renderComponent($$result2, "ProductsForm", ProductsForm, { "client:visible": true, "edit": false, "client:component-hydration": "visible", "client:component-path": "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/admin/forms/ProductsForm", "client:component-export": "default" })}</div></div>` })}`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/admin/productos/nuevo-producto.astro", void 0);

const $$file$2 = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/admin/productos/nuevo-producto.astro";
const $$url$2 = "/admin/productos/nuevo-producto";

const nuevoProducto = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$NuevoProducto,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const mockupSizes = {"src":"/_astro/imagen-medida-franela.2a380615.png","width":851,"height":1080,"format":"png"};

const $$Astro$1 = createAstro();
const $$Faqs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Faqs;
  const table = {
    thead: ["MEDIDA (cent\xEDmetro)", "S", "M", "L", "XL"],
    hombros: ["57", , "59", "60", "66"],
    ancho: ["54", , "55", "60", "63"],
    mangas: ["23", , "24", "26", "28"],
    largo: ["69", , "72", "74", "76"]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "FAQs" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="h-screen pt-44 mb-20 px-10"><h2 class="text-3xl md:text-5xl font-bold">Preguntas frecuentes</h2><section class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10"><div class="space-y-4"><details class="bg-darkGray p-4 space-y-2 rounded-md border border-mediumGray"><summary class="text-xl">¿Qué tipo de tela usan las franelas?</summary><p class="text-grayText">
Las franelas son de 100% algodón, hay dos tipos de franelas: una es franela de tela de algodón suavizado de 150 grms y 
                        cuello redondo; la otra franela es tela pesada de algodón, de 200grms, esta tiene cuello rib. Ambas franelas son de 
                        manga 3/4 y tienen un diseño moderno y cómodo.
</p></details><details class="bg-darkGray p-4 space-y-2 rounded-md border border-mediumGray"><summary class="text-xl">¿Cuál es la gama de colores?</summary><p class="text-grayText">
A parte de los clásicos colores blanco y negro, tenemos otros colores para nuestras franelas básicas, a continuación 
                        te compartiremos nuestra gamas de colores, si deseas ver un ejemplo del color y las franles, haz click
                        sobre el nombre de los colores.
</p><div class="bg-white w-full rounded-md p-4"><ul class="flex justify-between flex-wrap gap-y-2"><div class="space-y-2"><li class="flex items-center gap-x-1"><div class="bg-[#000031] w-5 h-3 rounded"></div><a href="#" class="text-grayText hover:text-darkGray font-bold">Azul Navy</a></li><li class="flex items-center gap-x-1"><div class="bg-[#680519] w-5 h-3 rounded"></div><a href="#" class="text-grayText hover:text-darkGray font-bold">Vinotinto</a></li><li class="flex items-center gap-x-1"><div class="bg-[#fefbb8] w-5 h-3 rounded"></div><a href="#" class="text-grayText hover:text-darkGray font-bold">Amarillo Pastel</a></li></div><div class="space-y-2"><li class="flex items-center gap-x-1"><div class="bg-[#fe6601] w-5 h-3 rounded"></div><a href="#" class="text-grayText hover:text-darkGray font-bold">Naranja</a></li><li class="flex items-center gap-x-1"><div class="bg-[#333520] w-5 h-3 rounded"></div><a href="#" class="text-grayText hover:text-darkGray font-bold">Verde Militar</a></li><li class="flex items-center gap-x-1"><div class="bg-[#eb2326] w-5 h-3 rounded"></div><a href="#" class="text-grayText hover:text-darkGray font-bold">Rojo</a></li></div><div class="space-y-2"><li class="flex items-center gap-x-1"><div class="bg-[#05503b] w-5 h-3 rounded"></div><a href="#" class="text-grayText hover:text-darkGray font-bold">Verde Botella</a></li><li class="flex items-center gap-x-1"><div class="bg-[#ba0b10] w-5 h-3 rounded"></div><a href="#" class="text-grayText hover:text-darkGray font-bold">Rojo Malboro</a></li><li class="flex items-center gap-x-1"><div class="bg-[#6e8d6d] w-5 h-3 rounded"></div><a href="#" class="text-grayText hover:text-darkGray font-bold">Verde Invierno</a></li></div><div class="space-y-2"><li class="flex items-center gap-x-1"><div class="bg-[#dbbe94] w-5 h-3 rounded"></div><a href="#" class="text-grayText hover:text-darkGray font-bold">Habano</a></li><li class="flex items-center gap-x-1"><div class="bg-[#969593] w-5 h-3 rounded"></div><a href="#" class="text-grayText hover:text-darkGray font-bold">Gris Jaspe</a></li><li class="flex items-center gap-x-1"><div class="bg-[#c6c7c1] w-5 h-3 rounded"></div><a href="#" class="text-grayText hover:text-darkGray font-bold">Gris Jaspe Claro</a></li></div></ul></div></details><details class="bg-darkGray p-4 space-y-2 rounded-md border border-mediumGray"><summary class="text-xl">¿Cómo puedo comprar las franelas?</summary><p class="text-grayText">
Para elegir las franelas que te gustan, puedes revisar la tienda de nuestra página web y ver los diferentes modelos, 
                        colores y tallas que tenemos disponibles. Si te interesa alguno, puedes comunicarte con nuestro vendedor por WhatsApp 
                        y hacer tu pedido. También puedes llenar una lista de deseos con todos los modelos que te llamen la atención y 
                        enviárnosla tambien por WhatsApp. Otra opción es contactarnos a través de nuestras redes sociales, donde podrás 
                        ver más fotos y videos de las franelas y hacer tus consultas.
</p></details><details class="bg-darkGray p-4 space-y-2 rounded-md border border-mediumGray"><summary class="text-xl">¿Las franelas se pueden comprar desde Colombia?</summary><p class="text-grayText">
Sí, las franelas se pueden comprar desde Colombia, ya que nuestra producción se realiza en Medellin. Puedes hacer tu 
                        pedido por nuestra página web o por WhatsApp y te enviaremos las franelas por correo certificado. Los precios 
                        están expresados en pesos colombianos y puedes consultar nuestros métodos de pago por nuestro contacto de WhatsApp.
</p></details></div><div class="space-y-4"><details class="bg-darkGray p-4 space-y-2 rounded-md border border-mediumGray"><summary class="text-xl">¿Cuáles son las medidas de las franelas?</summary><p class="text-grayText">
A continuación tienes una tabla con las medidas en centímetros dependiendo de la talla de la franela:
</p><div class="flex flex-wrap justify-center lg:justify-between items-center"><div class="relative overflow-x-auto shadow-md sm:rounded-lg lg:max-w-[50%] xl:max-w-[55%] 2xl:max-w-[60%]"><table class="w-full text-sm text-left rtl:text-right text-lightGray"><thead class="text-xs  uppercase  text-grayText"><tr class="text-center">${table.thead.map((text) => renderTemplate`<td scope="col" class="px-6 py-3 ">${text}</td>`)}</tr></thead><tbody><tr class="border-b border-lightGray"><th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
Hombros
</th>${table.hombros.map((text) => renderTemplate`<td scope="col" class="px-6 py-3 ">${text}</td>`)}</tr><tr class="border-b border-lightGray"><th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
Ancho
</th>${table.ancho.map((text) => renderTemplate`<td scope="col" class="px-6 py-3 ">${text}</td>`)}</tr><tr class="border-b border-lightGray"><th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
Mangas
</th>${table.mangas.map((text) => renderTemplate`<td scope="col" class="px-6 py-3 ">${text}</td>`)}</tr><tr><th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
Largo
</th>${table.largo.map((text) => renderTemplate`<td scope="col" class="px-6 py-3 ">${text}</td>`)}</tr></tbody></table></div><div>${renderComponent($$result2, "Image", $$Image, { "src": mockupSizes, "width": 851, "height": 1080, "class": "w-80 lg:max-w-[220px]", "alt": "Ejemplo de medidas imagen" })}</div></div></details><details class="bg-darkGray p-4 space-y-2 rounded-md border border-mediumGray"><summary class="text-xl">¿De dónde provienen las franelas?</summary><p class="text-grayText">
Las franelas son producidas y fabricadas en Colombia, por empresas que se dedican a la confección de ropa de 
                        calidad y con responsabilidad social y ambiental. Las franelas son enviadas a Venezuela para su venta, cumpliendo 
                        con todos los requisitos legales y aduaneros.
</p></details><details class="bg-darkGray p-4 space-y-2 rounded-md border border-mediumGray"><summary class="text-xl">¿Cuánto tiempo tarda el envío de las franelas?</summary><p class="text-grayText">
El envío de las franelas a Venezuela tarda entre 10 a 12 días, ya que se realiza por una empresa de transporte 
                        internacional que garantiza la seguridad y la calidad del servicio. Por lo tanto, se pueden realizar encargos de 
                        modelos de franelas en caso de no estar disponibles, pero teniendo en cuenta el tiempo que se tome el envío.
</p></details></div></section></main>` })}`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/faqs.astro", void 0);

const $$file$1 = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/faqs.astro";
const $$url$1 = "/faqs";

const faqs = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Faqs,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const astronaut = {"src":"/_astro/astronaut.96469352.png","width":900,"height":960,"format":"png"};

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pagina no encontrada" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="bg-space404 grid grid-cols-1 md:grid-cols-2 items-center bg-cover bg-center w-full h-screen"><div class="flex flex-col items-center w-full"><div><span class="text-gray-400 font-bold">Error 404</span><h2 class="text-3xl sm:text-5xl md:text-6xl font-bold">Pagina No Encontrada</h2><p class="font-medium xl:max-w-[90%] mt-4 text-left">
Lo siento, no pudimos encontrar la página que buscas.
</p><a href="/" class="border-2 border-white py-2 w-36 text-sm opacity-50 active:opacity-100 lg:hover:opacity-100 text-center block mt-5">
Regresar al Home
</a></div></div><div class="hidden md:flex justify-center w-full"><img${addAttribute(astronaut.src, "src")} alt="" class="aspect-[422/450] h-[450px] animate-bounce animate-infinite animate-duration-[5000ms] animate-ease-in-out animate-normal"></div></main>` })}`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/404.astro", void 0);

const $$file = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _404 as _, actualizarContrase_a as a, signUp as b, contacto as c, index as d, faqs as f, index$1 as i, nuevoProducto as n, politicaDePrivacidad as p, recuperarContrase_a as r, signIn as s, terminosYCondiciones as t };
