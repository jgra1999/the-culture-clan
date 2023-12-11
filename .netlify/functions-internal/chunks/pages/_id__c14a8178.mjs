/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, d as renderHead, e as renderComponent, f as renderSlot, g as createTransitionScope } from '../astro_c3b29a57.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, Fragment as Fragment$1, useEffect } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import toast, { Toaster } from 'react-hot-toast';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { Toaster as Toaster$1, toast as toast$1 } from 'sonner';
/* empty css                          */import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createClient } from '@supabase/supabase-js';
/* empty css                               *//* empty css                               */
const $$Astro$j = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/node_modules/.pnpm/astro@3.0.12/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$i = createAstro();
const $$TCCIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$TCCIcon;
  const { styles = "w-14 h-14" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg version="1.1" id="Capa_1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1080 1080" style="enable-background:new 0 0 1080 1080;" xml:space="preserve"${addAttribute(styles, "class")}><style type="text/css">
	.st0{fill:#FFFFFF;}
	.st1{fill:none;}
</style><g><circle class="st0" cx="549.22" cy="527.51" r="312.44"></circle><circle class="st0" cx="549.22" cy="527.51" r="312.44"></circle><g><path d="M283.61,527.28c0.09-124.32,85.99-233.34,207.28-260.76c85.09-19.23,162.38-0.77,231.01,53.37
			c2.79,2.21,2.58,3.22,0.2,5.56c-21.79,21.59-43.51,43.26-65.09,65.05c-2.4,2.42-3.81,2.42-6.51,0.49
			c-60.97-43.32-139.89-42.55-199.74,1.85c-101.12,75.02-85.41,234.02,28.92,286.8c59.46,27.45,116.95,21.48,171.04-15.57
			c2.59-1.78,3.87-1.82,6.16,0.48c21.48,21.69,43.07,43.29,64.8,64.73c2.84,2.81,2.81,4.05-0.31,6.54
			c-41.02,32.88-87.49,52.69-139.8,58.42c-107.69,11.8-211.49-41.63-263.87-135.73C295.18,618.15,283.58,573.42,283.61,527.28z"></path><path d="M551.85,658.51c-77.07,0.29-138.14-67.07-130.18-143.59c6.39-61.44,52.49-109.18,113.72-117.14
			c31.76-4.13,61.22,2.93,88.25,20.16c2.85,1.82,2.9,2.93,0.57,5.21c-10,9.8-19.93,19.68-29.71,29.68c-2.07,2.11-3.6,2.04-6.08,0.8
			c-45.15-22.28-99.7,0.44-114.81,48.54c-10.6,33.77-2.52,63.88,23.96,87.22s57.13,27.03,89.56,12.84c3.76-1.64,5.84-1.48,8.67,1.47
			c9.29,9.66,18.83,19.08,28.41,28.44c2.36,2.3,2.27,3.42-0.55,5.21C601.73,651.29,577.89,658.61,551.85,658.51z"></path></g><path id="SVGID_x5F_1_x5F_" class="st1" d="M549.22,857.16c-185.74,0-336.31-150.57-336.31-336.31s150.57-336.31,336.31-336.31
		s336.31,150.57,336.31,336.31S734.96,857.16,549.22,857.16z"></path><path id="SVGID_x5F_2_x5F_" class="st1" d="M549.22,935.47c228.98,0,414.62-185.62,414.62-414.62S778.21,106.23,549.22,106.23
		S134.59,291.85,134.59,520.85S320.23,935.47,549.22,935.47z"></path></g></svg>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/icons/TCCIcon.astro", void 0);

const OpenEyeIcon = ({ styles }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    className: `w-6 h-6 ${styles}`,
    viewBox: "0 0 24 24",
    strokeWidth: "2",
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" }),
      /* @__PURE__ */ jsx("path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" })
    ]
  }
);
const IconEyeOff = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    className: "opacity-70 hover:opacity-100 w-6 h-6",
    viewBox: "0 0 24 24",
    strokeWidth: "2",
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828" }),
      /* @__PURE__ */ jsx("path", { d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" }),
      /* @__PURE__ */ jsx("path", { d: "M3 3l18 18" })
    ]
  }
);
const PencilIcon = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "opacity-70 hover:opacity-100 w-6 h-6",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" }),
      /* @__PURE__ */ jsx("path", { d: "M13.5 6.5l4 4" })
    ]
  }
);
const TrashIcon = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "opacity-70 hover:opacity-100 w-6 h-6",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M4 7l16 0" }),
      /* @__PURE__ */ jsx("path", { d: "M10 11l0 6" }),
      /* @__PURE__ */ jsx("path", { d: "M14 11l0 6" }),
      /* @__PURE__ */ jsx("path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" }),
      /* @__PURE__ */ jsx("path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" })
    ]
  }
);
const IconLogout = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "flex-shrink w-6 h-6",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    strokeWidth: "2",
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" }),
      /* @__PURE__ */ jsx("path", { d: "M15 12h-12l3 -3" }),
      /* @__PURE__ */ jsx("path", { d: "M6 15l-3 -3" })
    ]
  }
);
const IconCircleX = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "stroke-red-700 w-5 h-5",
    viewBox: "0 0 24 24",
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }),
      /* @__PURE__ */ jsx("path", { d: "M10 10l4 4m0 -4l-4 4" })
    ]
  }
);
const IconCircleCheck = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "stroke-green-600 w-5 h-5",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" }),
      /* @__PURE__ */ jsx("path", { d: "M9 12l2 2l4 -4" })
    ]
  }
);
const IconBrandApple = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    className: "w-5 h-5",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z" }),
      /* @__PURE__ */ jsx("path", { d: "M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" })
    ]
  }
);
const IconBrandGoogle = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    className: "w-5 h-5",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z" }),
      /* @__PURE__ */ jsx("path", { d: "M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" }),
      /* @__PURE__ */ jsx("path", { d: "M16 4l-4 4l-4 -4" }),
      /* @__PURE__ */ jsx("path", { d: "M4 6.5l8 7.5l8 -7.5" })
    ]
  }
);
const IconThumbUp = ({ fill }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-7 h-7",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    fill,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      " ",
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" })
    ]
  }
);
const IconThumbDown = ({ fill }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-7 h-7",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    fill,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" })
    ]
  }
);
const IconBrandWhatsapp = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-6 h-6",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" }),
      /* @__PURE__ */ jsx("path", { d: "M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" })
    ]
  }
);
const IconChevronDown = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-5 h-5",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M6 9l6 6l6 -6" })
    ]
  }
);
const IconChevronRight = ({ styles = "w-6 h-6" }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: styles,
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M9 6l6 6l-6 6" })
    ]
  }
);
const IconChevronLeft = ({ styles = "w-6 h-6" }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: styles,
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M15 6l-6 6l6 6" })
    ]
  }
);
const IconHeart = ({ styles }) => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: styles,
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" })
    ]
  }
);
const IconX = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-6 h-6",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M18 6l-12 12" }),
      /* @__PURE__ */ jsx("path", { d: "M6 6l12 12" })
    ]
  }
);
const IconMenu = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    className: "w-8 h-8",
    viewBox: "0 0 24 24",
    strokeWidth: "2",
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M4 6l16 0" }),
      /* @__PURE__ */ jsx("path", { d: "M4 12l16 0" }),
      /* @__PURE__ */ jsx("path", { d: "M4 18l16 0" })
    ]
  }
);
const IconHome = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "flex-shrink-0 w-6 h-6",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M5 12l-2 0l9 -9l9 9l-2 0" }),
      /* @__PURE__ */ jsx("path", { d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" }),
      /* @__PURE__ */ jsx("path", { d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" })
    ]
  }
);
const IconShirt = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "flex-shrink-0 w-6 h-6",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" })
    ]
  }
);
const IconHelpHexagon = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "flex-shrink-0 w-6 h-6",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" }),
      /* @__PURE__ */ jsx("path", { d: "M12 16v.01" }),
      /* @__PURE__ */ jsx("path", { d: "M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" })
    ]
  }
);
const IconDeviceMobile = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "flex-shrink-0 w-6 h-6",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" }),
      /* @__PURE__ */ jsx("path", { d: "M11 4h2" }),
      /* @__PURE__ */ jsx("path", { d: "M12 17v.01" })
    ]
  }
);
const IconLogin2 = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    className: "flex-shrink-0 w-6 h-6",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ jsx("path", { d: "M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" }),
      /* @__PURE__ */ jsx("path", { d: "M3 12h13l-3 -3" }),
      /* @__PURE__ */ jsx("path", { d: "M13 15l3 -3" })
    ]
  }
);

const supabaseUrl = "https://txmkaopmnnwdbovizlbe.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4bWthb3Btbm53ZGJvdml6bGJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4NjQ1NzksImV4cCI6MjAwOTQ0MDU3OX0.BXteZBPNh_sLQjxtttrUE8sExzKamyiPupb0AMHuVeM";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const useWishlistStore = create()(
  devtools(
    persist(
      (set, get) => ({
        wishlist: [],
        addToWishList: (item) => set((state) => ({
          wishlist: [...state.wishlist, item]
        })),
        removeToWishList: (item) => set((state) => ({
          wishlist: state.wishlist.filter((i) => i !== item)
        }))
      }),
      { name: "wishlistStore" }
    )
  )
);

function ButtonForm({ text }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "submit",
      className: "border-2 border-mediumGray py-3 px-4 text-center rounded-lg w-full opacity-50 hover:opacity-100",
      children: text
    }
  );
}

const simpleLoginSchema = z.object({
  email: z.string().min(1, { message: "El email es requerido" }).email({ message: "Ingresa un correo electrónico serio (ponte@serio.com)" }),
  password: z.string().min(6, { message: "La contraseña debe contener al menos 6 caracteres" })
});
const SignUpSchema = z.object({
  name: z.string().min(2, { message: "El nombre es requerido" }),
  last_name: z.string().min(2, { message: "El apellido es requerido" }),
  country: z.string().min(2, { message: "El país es requerido" }),
  city: z.string().min(2, { message: "La ciudad es requerida" }),
  email: z.string().min(1, { message: "El email es requerido" }).email({ message: "Ingresa un correo electrónico serio (ponte@serio.com)" }),
  password: z.string().min(6, { message: "La contraseña debe contener al menos 6 caracteres" })
});
const ProductsSchema = z.object({
  image_url_1: z.string().min(2, { message: "La url de la imagen es requerida" }).url({ message: "Ingresa una url válida" }),
  image_url_2: z.string().min(2, { message: "La url de la imagen es requerida" }).url({ message: "Ingresa una url válida" }),
  name: z.string().min(2, { message: "El nombre es requerido" }),
  collection: z.string().min(2, { message: "La colección es requerido" }),
  price: z.string().min(1, { message: "El precio es requerido" }),
  description: z.string().min(2, { message: "la descripción es requerido" })
});

function InputErrorMessage({ message, styles }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: `text-red-700 text-xs absolute left-0 bottom-[-25px] ${styles}`,
      title: message,
      children: message
    }
  );
}

const $$Astro$h = createAstro();
const $$Titleh2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Titleh2;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="text-3xl sm:text-5xl md:text-6xl font-bold">${title}</h2>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/layaout/Titleh2.astro", void 0);

function Loader() {
  return /* @__PURE__ */ jsx("div", { className: "absolute top-36 left-1/2 transform -translate-x-1/2", children: /* @__PURE__ */ jsx("div", { className: "w-10 h-10 lg:w-14 lg:h-14 border-4 border-white border-b-4 border-b-mediumGray animate-spin z-50 rounded-full" }) });
}

function QRModal() {
  let [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsOpen(true),
        className: "hidden lg:flex items-center justify-center gap-x-1 border-2 border-white py-3 px-4 rounded text-sm md:text-base opacity-50 hover:opacity-100 min-w-[50%]",
        children: [
          /* @__PURE__ */ jsx(IconBrandWhatsapp, {}),
          "Consultar Disponibilidad"
        ]
      }
    ),
    /* @__PURE__ */ jsx(Transition, { appear: true, show: isOpen, as: Fragment$1, children: /* @__PURE__ */ jsxs(Dialog, { as: "div", className: "relative z-10", onClose: () => setIsOpen(false), children: [
      /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment$1,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/25" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "flex min-h-full items-center justify-center p-4 text-center", children: /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment$1,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0 scale-95",
          enterTo: "opacity-100 scale-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-95",
          children: /* @__PURE__ */ jsxs(Dialog.Panel, { className: "flex items-center first-letter:w-full max-w-md transform overflow-hidden rounded-2xl bg-darkGray p-6 align-middle shadow-xl transition-all relative", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "absolute top-5 right-5 opacity-50 hover:opacity-100",
                onClick: () => setIsOpen(false),
                type: "button",
                "aria-label": "Close",
                children: /* @__PURE__ */ jsx(IconX, {})
              }
            ),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://res.cloudinary.com/df8nnzf8t/image/upload/v1699730824/codigo%20qr%20imagenes/Qr-whatsapp_l79fwq.png",
                alt: "WhatsApp QR imagen",
                className: "h-96"
              }
            ) })
          ] })
        }
      ) }) })
    ] }) })
  ] });
}

function SizeOption({ size }) {
  return /* @__PURE__ */ jsx("button", { className: "border-2 border-white py-2 px-4 rounded text-sm md:text-base opacity-70 hover:opacity-100", children: size });
}

function LikeButton({ currentLikes, id }) {
  const [disabledLikeButton, setDisabledLikeButton] = useState(false);
  const [likes, setLikes] = useState(currentLikes);
  const handleLikesButton = async () => {
    if (likes) {
      try {
        const { data, error } = await supabase.from("products").update({ likes: likes + 1 }).eq("id", id).select();
        if (error)
          console.log(error);
        if (data)
          console.log(data);
      } catch (error) {
      } finally {
        setLikes(likes + 1);
        setDisabledLikeButton(true);
      }
    }
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: handleLikesButton,
      className: `flex gap-x-1 items-center hover:opacity-100 ${disabledLikeButton ? "cursor-default opacity-100" : "cursor-pointer opacity-50"}`,
      disabled: disabledLikeButton,
      children: [
        /* @__PURE__ */ jsx(IconThumbUp, { fill: disabledLikeButton ? "white" : "" }),
        likes
      ]
    }
  );
}

function DisLikeButton({ currentDislikes, id }) {
  const [disabledDisLikeButton, setDisabledDisLikeButton] = useState(false);
  const handleDisLikesButton = async () => {
    if (currentDislikes) {
      const { data, error } = await supabase.from("products").update({ dislikes: currentDislikes + 1 }).eq("id", id);
      if (error)
        console.log(error);
      setDisabledDisLikeButton(true);
    }
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleDisLikesButton,
      disabled: disabledDisLikeButton,
      className: `hover:opacity-100 ${disabledDisLikeButton ? "cursor-default opacity-100" : "cursor-pointer opacity-50"}`,
      children: /* @__PURE__ */ jsx(IconThumbDown, { fill: disabledDisLikeButton ? "white" : "" })
    }
  );
}

function AddWishListButton({ id }) {
  const { wishlist, addToWishList, removeToWishList } = useWishlistStore();
  const handleWishList = (item) => {
    if (!wishlist.includes(id)) {
      addToWishList(item);
      toast.success("Agregado a la lista de deseos");
    } else {
      removeToWishList(item);
      toast.success("Eliminado de la lista de deseos");
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { onClick: () => handleWishList(id), children: /* @__PURE__ */ jsx(
      IconHeart,
      {
        styles: `w-7 h-7 ${wishlist.includes(id) ? "stroke-red-500 fill-red-500" : "stroke-white fill-none"}`
      }
    ) }),
    /* @__PURE__ */ jsx(
      Toaster,
      {
        position: "top-right",
        reverseOrder: false,
        toastOptions: {
          style: {
            background: "#181818",
            color: "#fff"
          }
        }
      }
    )
  ] });
}

function ItemOverview({ slug }) {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(false);
  const getItem = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from("products").select("*").eq("slug", slug);
      if (data) {
        setItem(data[0]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const [itemImage, setItemImage] = useState("");
  useEffect(() => {
    getItem();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-y-5 md:gap-x-10 relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-4", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: itemImage ? itemImage : item?.image_url_2,
            alt: `Franela-${item?.name}`,
            className: "aspect-auto w-full rounded-lg",
            style: { viewTransitionName: `book-${item?.id}` }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center xl:hidden gap-x-5", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => setItemImage(item?.image_url_1), children: /* @__PURE__ */ jsx(
            "img",
            {
              src: item?.image_url_1,
              alt: `Franela-${item?.name}`,
              className: "aspect-[445/668] w-36 rounded-lg"
            }
          ) }),
          /* @__PURE__ */ jsx("button", { onClick: () => setItemImage(item?.image_url_2), children: /* @__PURE__ */ jsx(
            "img",
            {
              src: item?.image_url_2,
              alt: `Franela-${item?.name}`,
              className: "aspect-[445/668] w-36 rounded-lg"
            }
          ) })
        ] })
      ] }),
      loading ? "" : /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-10 md:gap-y-10 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl lg:text-4xl xl:text-5xl font-medium", children: item?.name }),
          /* @__PURE__ */ jsxs("p", { className: "text-xl lg:text-4xl xl:text-5xl", children: [
            "$",
            item?.price
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-grayText text-sm sm:text-base font-medium", children: item?.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-lg", children: "Tallas Disponibles" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-x-5", children: [
            /* @__PURE__ */ jsx(SizeOption, { size: "XS" }),
            /* @__PURE__ */ jsx(SizeOption, { size: "S" }),
            /* @__PURE__ */ jsx(SizeOption, { size: "M" }),
            /* @__PURE__ */ jsx(SizeOption, { size: "L" }),
            /* @__PURE__ */ jsx(SizeOption, { size: "XL" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-5", children: [
          /* @__PURE__ */ jsx(QRModal, {}),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `https://wa.me/+584244155064/?text=Hola!%20me%20interesa%20la%20franela%20de%20${item?.name}`,
              target: "_blank",
              className: "flex items-center justify-center gap-x-1 border-2 border-white py-3 px-4 rounded text-sm md:text-base opacity-50 hover:opacity-100 max-w-[300px] lg:hidden",
              children: [
                /* @__PURE__ */ jsx(IconBrandWhatsapp, {}),
                "Consultar Disponibilidad"
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-x-4 divide-mediumGray", children: [
            /* @__PURE__ */ jsx(AddWishListButton, { id: item ? item.id : "" }),
            /* @__PURE__ */ jsx(LikeButton, { currentLikes: item?.likes, id: item ? item.id : "" }),
            /* @__PURE__ */ jsx(
              DisLikeButton,
              {
                currentDislikes: item?.dislikes,
                id: item ? item?.id : ""
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-lg", children: "Fabricación" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc text-grayText text-sm sm:text-base font-medium pl-4 mt-2 space-y-1", children: [
              /* @__PURE__ */ jsx("li", { children: "Producción en Colombia" }),
              /* @__PURE__ */ jsx("li", { children: "100% Algodón" }),
              /* @__PURE__ */ jsx("li", { children: "Diseños impresos con DTF" }),
              /* @__PURE__ */ jsx("li", { children: "Hecho con amor" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-lg", children: "Cuidado" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc text-grayText text-sm sm:text-base font-medium pl-4 mt-2 space-y-1", children: [
              /* @__PURE__ */ jsx("li", { children: "Utiliza un detergente suave" }),
              /* @__PURE__ */ jsx("li", { children: "Lava las franelas del revés" }),
              /* @__PURE__ */ jsx("li", { children: "Opta por el secado al aire" }),
              /* @__PURE__ */ jsx("li", { children: "Lávalo con amor" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden xl:flex items-center gap-x-5", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => setItemImage(item?.image_url_1), children: /* @__PURE__ */ jsx(
            "img",
            {
              src: item?.image_url_1,
              alt: `Franela-${item?.name}`,
              className: "aspect-[445/668] w-36 rounded-lg"
            }
          ) }),
          /* @__PURE__ */ jsx("button", { onClick: () => setItemImage(item?.image_url_2), children: /* @__PURE__ */ jsx(
            "img",
            {
              src: item?.image_url_2,
              alt: `Franela-${item?.name}`,
              className: "aspect-[445/668] w-36 rounded-lg"
            }
          ) })
        ] })
      ] }),
      loading && /* @__PURE__ */ jsx(Loader, {})
    ] }),
    /* @__PURE__ */ jsx(Toaster$1, { position: "top-right", theme: "dark" })
  ] });
}

const $$Astro$g = createAstro();
const $$LeftArrowIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$LeftArrowIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="w-10 md:w-12 h-10 md:h-12 opacity-70 hover:opacity-100" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M5 12l6 6"></path><path d="M5 12l6 -6"></path></svg>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/icons/LeftArrowIcon.astro", void 0);

const $$Astro$f = createAstro();
const prerender$2 = false;
const $$id$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$id$2;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`<html lang="es"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/icon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- <ViewTransitions /> --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"><title>The Culture Clan</title>${renderHead()}</head><body><main class="py-24 min-h-[1000px] px-10 md:px-20 relative xl:container xl:mx-auto"><!-- <QRModal /> --><div class="absolute top-10 "><!-- este boton siempre lleva al ultimo link antes de cambiar de pagina --><!-- <button onclick="history.back()">
                    <LeftArrowIcon />
                </button> --><a href="/tienda">${renderComponent($$result, "LeftArrowIcon", $$LeftArrowIcon, {})}</a></div>${renderComponent($$result, "ItemOverview", ItemOverview, { "slug": id, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/shop/ItemOverview", "client:component-export": "default" })}</main></body></html>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/tienda/[id].astro", void 0);

const $$file$2 = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/tienda/[id].astro";
const $$url$2 = "/tienda/[id]";

const _id_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id$2,
	file: $$file$2,
	prerender: prerender$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$e = createAstro();
const $$SideMenuOptions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$SideMenuOptions;
  const { link, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="flex items-center p-2 text-lg" data-drawer-hide="drawer-navigation">${renderSlot($$result, $$slots["default"])}<span class="ml-3">${name}</span></a>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/layaout/SideMenuOptions.astro", void 0);

const $$Astro$d = createAstro();
const $$HomeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$HomeIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="flex-shrink-0 w-6 h-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l-2 0l9 -9l9 9l-2 0"></path><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path></svg>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/icons/HomeIcon.astro", void 0);

const $$Astro$c = createAstro();
const $$IconArrowBackUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$IconArrowBackUp;
  return renderTemplate`${maybeRenderHead()}<svg class="w-6 h-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 14l-4 -4l4 -4"></path><path d="M5 10h11a4 4 0 1 1 0 8h-1"></path></svg>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/icons/IconArrowBackUp.astro", void 0);

const $$Astro$b = createAstro();
const $$MenuIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$MenuIcon;
  const { styles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`w-8 h-8 ${styles}`, "class")} viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/icons/MenuIcon.astro", void 0);

const $$Astro$a = createAstro();
const $$ShirtIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ShirtIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="flex-shrink-0 w-6 h-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0"></path></svg>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/icons/ShirtIcon.astro", void 0);

const $$Astro$9 = createAstro();
const $$SalesIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SalesIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="flex-shrink w-6 h-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path><path d="M9 17v-5"></path><path d="M12 17v-1"></path><path d="M15 17v-3"></path></svg>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/icons/SalesIcon.astro", void 0);

const $$Astro$8 = createAstro();
const $$BillIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BillIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="flex-shrink w-6 h-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"></path><path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5"></path></svg>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/icons/BillIcon.astro", void 0);

const $$Astro$7 = createAstro();
const $$UsersIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$UsersIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="flex-shrink w-6 h-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path></svg>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/icons/UsersIcon.astro", void 0);

const $$Astro$6 = createAstro();
const $$WalletIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$WalletIcon;
  return renderTemplate`${maybeRenderHead()}<svg class="flex-shrink w-6 h-6" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"></path><path d="M20 12v4h-4a2 2 0 0 1 0 -4h4"></path></svg>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/icons/WalletIcon.astro", void 0);

function SignOutButton() {
  const deleteAdminCookie = () => {
    document.cookie = "admin=true; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };
  const handleSignOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(
        "🚀 ~ file: SignOutButton.tsx:8 ~ handleSignOutUser ~ error:",
        error
      );
    } else {
      deleteAdminCookie();
      location.reload();
    }
  };
  return /* @__PURE__ */ jsxs("button", { onClick: handleSignOutUser, className: "flex gap-x-3 items-center", children: [
    /* @__PURE__ */ jsx(IconLogout, {}),
    "Cerrar Sesión"
  ] });
}

const $$Astro$5 = createAstro();
const $$AdminSideMenu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AdminSideMenu;
  return renderTemplate`${maybeRenderHead()}<button class="text-white" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation"${addAttribute(createTransitionScope($$result, "jcrtrvja"), "data-astro-transition-persist")}>${renderComponent($$result, "MenuIcon", $$MenuIcon, {})}</button><!-- drawer component --><div id="drawer-navigation" class="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-darkGray" tabindex="-1" aria-labelledby="drawer-navigation-label"${addAttribute(createTransitionScope($$result, "ydxfmf75"), "data-astro-transition-persist")}><div class="absolute top-2.5 left-[17px]">${renderComponent($$result, "TCCIcon", $$TCCIcon, { "styles": "w-10 h-10" })}</div><button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-grayText bg-transparent p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"><svg aria-hidden="true" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">Close menu</span></button><div class=" mt-10 py-5 overflow-y-auto flex flex-col justify-between"><ul class="space-y-2"><li>${renderComponent($$result, "SideMenuOptions", $$SideMenuOptions, { "link": "/admin/dashboard", "name": "Dashboard" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HomeIcon", $$HomeIcon, {})}` })}</li><li>${renderComponent($$result, "SideMenuOptions", $$SideMenuOptions, { "link": "/admin/fondos", "name": "Fondo" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "WalletIcon", $$WalletIcon, {})}` })}</li><li>${renderComponent($$result, "SideMenuOptions", $$SideMenuOptions, { "link": "/admin/productos", "name": "Productos" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ShirtIcon", $$ShirtIcon, {})}` })}</li><li>${renderComponent($$result, "SideMenuOptions", $$SideMenuOptions, { "link": "/admin/ventas", "name": "Ventas" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "SalesIcon", $$SalesIcon, {})}` })}</li><li>${renderComponent($$result, "SideMenuOptions", $$SideMenuOptions, { "link": "/admin/gastos", "name": "Gastos" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "BillIcon", $$BillIcon, {})}` })}</li><li>${renderComponent($$result, "SideMenuOptions", $$SideMenuOptions, { "link": "/admin/usuarios", "name": "Usuarios" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "UsersIcon", $$UsersIcon, {})}` })}</li></ul><div class="flex flex-col gap-y-4 absolute left-4 bottom-14"><a href="/" class="flex gap-x-3 items-center">${renderComponent($$result, "IconArrowBackUp", $$IconArrowBackUp, {})}
Home
</a>${renderComponent($$result, "SignOutButton", SignOutButton, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/admin/SignOutButton", "client:component-export": "default" })}</div></div></div>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/admin/AdminSideMenu.astro", "self");

const $$Astro$4 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navigation;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="flex py-4 px-5 justify-between items-center border-b-[1px] border-mediumGray"><div class="flex gap-x-1 items-center">${renderComponent($$result, "AdminSideMenu", $$AdminSideMenu, {})}<span class="text-xl font-medium">${title}</span></div><div class="flex items-center gap-x-2"><span class="text-grayText">Jose Rojas</span><img class="w-10 h-10 p-1 rounded-full ring-1 ring-mediumGray" src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1221" alt="Bordered avatar"></div></nav>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/admin/Navigation.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro();
const $$AdminLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/icon.svg"><meta name="generator"', ">", '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"><title>The Culture Clan Admin - ', "</title>", "</head><body>", '<main class="container mx-auto w-11/12 sm:w-3/4 grid grid-cols-1 mt-20 relative">', '</main><script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"><\/script></body></html>'])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), title, renderHead(), renderComponent($$result, "Navigation", $$Navigation, { "title": title }), renderSlot($$result, $$slots["default"]));
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/layouts/AdminLayout.astro", void 0);

function SuccessToast({ message }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsx(IconCircleCheck, {}),
    /* @__PURE__ */ jsx("span", { children: message })
  ] });
}

function ErrorToast({ message }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsx(IconCircleX, {}),
    /* @__PURE__ */ jsx("span", { children: message })
  ] });
}

const $$Astro$2 = createAstro();
const $$GoBackButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GoBackButton;
  return renderTemplate`${maybeRenderHead()}<div class="absolute top-[-40px] md:top-0 md:left-[-50px]"><button onclick="history.back()">${renderComponent($$result, "LeftArrowIcon", $$LeftArrowIcon, {})}</button></div>`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/GoBackButton.astro", void 0);

const slugify = (text) => {
  return text.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
};

function ProductsForm({ edit, id }) {
  const [product, setProduct] = useState();
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(ProductsSchema)
  });
  if (edit) {
    const getProductData = async () => {
      const { data, error } = await supabase.from("products").select("*").eq("id", id);
      if (error)
        console.log(error);
      if (data)
        setProduct(data[0]);
    };
    useEffect(() => {
      getProductData();
    }, []);
  }
  const handleFormSubmit = async ({
    name,
    collection,
    price,
    image_url_1,
    image_url_2,
    description
  }) => {
    if (edit) {
      const { data, error } = await supabase.from("products").update({
        collection,
        name,
        price: +price,
        image_url_1,
        image_url_2,
        description,
        slug: slugify(name)
      }).eq("id", id);
      if (error)
        toast$1(/* @__PURE__ */ jsx(ErrorToast, { message: error?.message }));
      toast$1(/* @__PURE__ */ jsx(SuccessToast, { message: "Producto editado" }));
    } else {
      const { data, error } = await supabase.from("products").insert({
        collection,
        name,
        price: +price,
        image_url_1,
        image_url_2,
        description,
        slug: slugify(name)
      });
      if (error) {
        toast$1(/* @__PURE__ */ jsx(ErrorToast, { message: error.message }));
      } else {
        toast$1(/* @__PURE__ */ jsx(SuccessToast, { message: "Producto agregado" }));
        reset();
      }
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    edit && /* @__PURE__ */ jsx(
      "button",
      {
        className: "text-grayText hover:text-white",
        onClick: () => {
          setValue("image_url_1", product?.image_url_1);
          setValue("image_url_2", product?.image_url_2);
          setValue("name", product?.name);
          setValue("collection", product?.collection);
          setValue("price", product?.price.toString());
          setValue("description", product?.description);
        },
        children: "Insertar valores actuales"
      }
    ),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit(handleFormSubmit),
        className: "flex flex-col gap-y-8",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 ", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-2 text-left relative", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: watch("image_url_1") ? watch("image_url_1") : "",
                  alt: "",
                  className: "rounded w-54"
                }
              ),
              /* @__PURE__ */ jsx("label", { htmlFor: "image_url_1", className: "text-grayText", children: "Imagen Frontal" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: product ? product.image_url_1 : "",
                  className: "bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg",
                  ...register("image_url_1")
                }
              ),
              errors.image_url_1 && /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.image_url_1?.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col  gap-y-2 text-left relative", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: watch("image_url_2") ? watch("image_url_2") : "",
                  alt: "",
                  className: "rounded w-54"
                }
              ),
              /* @__PURE__ */ jsx("label", { htmlFor: "image_url_2", className: "text-grayText", children: "Imagen Trasera" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: product ? product.image_url_2 : "",
                  className: "bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg",
                  ...register("image_url_2")
                }
              ),
              errors.image_url_2 && /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.image_url_2?.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-2 text-left relative", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "text-grayText", children: "Nombre" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: product ? product.name : "",
                  className: "bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg",
                  ...register("name")
                }
              ),
              errors.name && /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.name?.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-2 text-left relative", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "collection", className: "text-grayText", children: "Colección" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  id: "collection",
                  className: "bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2.5 px-3 rounded-lg",
                  ...register("collection"),
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Seleccionar" }),
                    /* @__PURE__ */ jsx("option", { value: "New Culture", children: "New Culture" }),
                    /* @__PURE__ */ jsx("option", { value: "Rap Culture", children: "Rap Culture" }),
                    /* @__PURE__ */ jsx("option", { value: "Pop Culture", children: "Pop Culture" }),
                    /* @__PURE__ */ jsx("option", { value: "Urban Culture", children: "Urban Culture" })
                  ]
                }
              ),
              errors.collection && /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.collection?.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-2 text-left relative", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "price", className: "text-grayText", children: "Precio" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: product ? product.price.toString() : "",
                  className: "bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg",
                  ...register("price")
                }
              ),
              errors.price && /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.price?.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-2 text-left relative", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "slug", className: "text-grayText", children: "slug" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  placeholder: product ? product.slug : "",
                  value: watch("name") ? slugify(watch("name")) : "",
                  readOnly: true,
                  className: "bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col text-left gap-y-2 md:col-span-2 relative", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "description", className: "text-grayText", children: "Descripción" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  rows: 5,
                  placeholder: product ? product.description : "",
                  className: "bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg resize-none",
                  ...register("description")
                }
              ),
              errors.description && /* @__PURE__ */ jsx(InputErrorMessage, { message: errors.description?.message })
            ] })
          ] }),
          /* @__PURE__ */ jsx(ButtonForm, { text: edit ? "Editar Producto" : "Agregar Producto" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Toaster$1, { theme: "dark", position: "top-right" })
  ] });
}

const $$Astro$1 = createAstro();
const prerender$1 = false;
const $$id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$id$1;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Nuevo Producto" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "GoBackButton", $$GoBackButton, {})}${maybeRenderHead()}<div class="flex flex-col items-center">${renderComponent($$result2, "Titleh2", $$Titleh2, { "title": "Editar Producto" })}<div class="flex flex-col gap-y-8 justify-center my-5 divide-mediumGray w-[90%] sm:min-w-0 max-w-[600px] bg-darkGray rounded-lg py-6 px-8">${renderComponent($$result2, "ProductsForm", ProductsForm, { "client:load": true, "edit": true, "id": id ? id : "", "client:component-hydration": "load", "client:component-path": "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/admin/forms/ProductsForm", "client:component-export": "default" })}</div></div>` })}`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/admin/productos/editar-producto/[id].astro", void 0);

const $$file$1 = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/admin/productos/editar-producto/[id].astro";
const $$url$1 = "/admin/productos/editar-producto/[id]";

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id$1,
	file: $$file$1,
	prerender: prerender$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

function ProductDesc({ id }) {
  const [product, setProduct] = useState();
  const getProduct = async () => {
    let { data, error } = await supabase.from("products").select("*").eq("id", id);
    if (data)
      setProduct(data[0]);
  };
  useEffect(() => {
    getProduct();
  });
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "px-4 sm:px-0", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold leading-7", children: product?.name }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 max-w-2xl text-sm leading-6 text-grayText", children: product?.collection })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 border-t border-mediumGray", children: /* @__PURE__ */ jsxs("dl", { className: "divide-y divide-mediumGray", children: [
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm font-medium leading-6 ", children: "Imagen Frontal" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0", children: /* @__PURE__ */ jsx("img", { src: product?.image_url_1, alt: "", className: "h-20" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm font-medium leading-6 ", children: "Imagen Trasera" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0", children: /* @__PURE__ */ jsx("img", { src: product?.image_url_2, alt: "", className: "h-20" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm font-medium leading-6", children: "Precio" }),
        /* @__PURE__ */ jsxs("dd", { className: "mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0", children: [
          "$",
          product?.price
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm font-medium leading-6", children: "Likes | Dislikes" }),
        /* @__PURE__ */ jsxs("dd", { className: "mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0", children: [
          product?.likes,
          " | ",
          product?.dislikes
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-b-2 border-mediumGray", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-sm font-medium leading-6", children: "Descripción" }),
        /* @__PURE__ */ jsx("dd", { className: "mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0", children: product?.description })
      ] })
    ] }) })
  ] });
}

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Ver producto" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "GoBackButton", $$GoBackButton, {})}${maybeRenderHead()}<div class="mx-auto my-5 w-[90%] sm:min-w-0 max-w-[800px] bg-darkGray rounded-lg py-6 px-8">${renderComponent($$result2, "ProductDesc", ProductDesc, { "id": id, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/admin/desc/ProductDesc", "client:component-export": "default" })}</div>` })}`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/admin/productos/ver-producto/[id].astro", void 0);

const $$file = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/admin/productos/ver-producto/[id].astro";
const $$url = "/admin/productos/ver-producto/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$AdminLayout as $, ButtonForm as B, ErrorToast as E, IconChevronLeft as I, Loader as L, OpenEyeIcon as O, PencilIcon as P, SuccessToast as S, TrashIcon as T, _id_$2 as _, IconChevronRight as a, IconEyeOff as b, simpleLoginSchema as c, InputErrorMessage as d, IconHeart as e, IconX as f, IconMenu as g, IconHome as h, IconShirt as i, IconHelpHexagon as j, IconDeviceMobile as k, IconLogin2 as l, $$TCCIcon as m, $$ViewTransitions as n, IconBrandGoogle as o, IconBrandApple as p, SignUpSchema as q, $$Titleh2 as r, supabase as s, IconThumbUp as t, useWishlistStore as u, IconChevronDown as v, $$GoBackButton as w, ProductsForm as x, _id_$1 as y, _id_ as z };
