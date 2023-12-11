/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_c3b29a57.mjs';
import { O as OpenEyeIcon, P as PencilIcon, T as TrashIcon, I as IconChevronLeft, a as IconChevronRight, s as supabase, E as ErrorToast, S as SuccessToast, $ as $$AdminLayout } from './_id__c14a8178.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import '@headlessui/react';
import 'react-hot-toast';
import 'zustand';
import 'zustand/middleware';
/* empty css                          */import 'zod';
import 'react-hook-form';
import '@hookform/resolvers/zod';
import '@supabase/supabase-js';
/* empty css                               *//* empty css                               */
function DataTable({ headers }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(4);
  const ITEMS_PER_PAGE = 4;
  const fetchData = async () => {
    const { data, error } = await supabase.from("products").select("id, name, collection, image_url_1, price, likes, slug").range(from, to);
    setProducts(data);
  };
  const deleteProduct = async (id) => {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) {
      toast(/* @__PURE__ */ jsx(ErrorToast, { message: "No se pudo eliminar el producto" }));
    } else {
      toast(/* @__PURE__ */ jsx(SuccessToast, { message: "Producto eliminado correctamente" }));
    }
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
    fetchData();
  }, [from, to]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("table", { className: "w-full text-sm text-left text-grayText", children: [
      /* @__PURE__ */ jsx("thead", { className: "text-xs text-grayText uppercase bg-darkGray", children: /* @__PURE__ */ jsxs("tr", { children: [
        headers.map((header, index) => /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: header }, index)),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3", children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Acciones" }) })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: products.map(
        (product) => /* @__PURE__ */ jsxs(
          "tr",
          {
            className: "border-b border-mediumGray bg-[#131313]",
            children: [
              /* @__PURE__ */ jsxs(
                "th",
                {
                  scope: "row",
                  className: "px-6 py-4 font-medium whitespace-nowrap text-white flex gap-x-2 items-center",
                  children: [
                    /* @__PURE__ */ jsx("img", { src: product.image_url_1, className: "w-10 h-14", alt: "" }),
                    /* @__PURE__ */ jsx("span", { children: product.name })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: product.collection }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: product.likes }),
              /* @__PURE__ */ jsxs("td", { className: "px-6 py-4", children: [
                "$",
                product.price
              ] }),
              /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-x-1 justify-end", children: [
                /* @__PURE__ */ jsx("a", { href: `/admin/productos/ver-producto/${product.id}`, children: /* @__PURE__ */ jsx(OpenEyeIcon, { styles: "opacity-70 hover:opacity-100" }) }),
                /* @__PURE__ */ jsx("a", { href: `/admin/productos/editar-producto/${product.id}`, children: /* @__PURE__ */ jsx(PencilIcon, {}) }),
                /* @__PURE__ */ jsx("button", { onClick: () => deleteProduct(product.id), children: /* @__PURE__ */ jsx(TrashIcon, {}) })
              ] }) })
            ]
          },
          product.id
        )
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-5", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handlePrevButton,
          className: "flex p-4 opacity-50 hover:opacity-100",
          disabled: page === 1,
          children: [
            /* @__PURE__ */ jsx(IconChevronLeft, {}),
            "Anterior"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleNextButton,
          className: "flex p-4 opacity-50 hover:opacity-100",
          disabled: products.length < 5,
          children: [
            "Siguiente",
            /* @__PURE__ */ jsx(IconChevronRight, {})
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Toaster, { theme: "dark", position: "top-right" })
  ] });
}

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const cookie = Astro2.request.headers.get("cookie");
  if (cookie !== "admin=true") {
    return Astro2.redirect("/admin/login");
  }
  const headers = ["Productos", "Colecci\xF3n", "Likes", "Precio"];
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Productos" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 items-center"><a href="/admin/productos/nuevo-producto" class="border border-white py-2 w-36 opacity-50 active:opacity-100 text-sm lg:hover:opacity-100 text-center rounded-lg">
Nuevo Producto
</a><div><input type="text" placeholder="Buscar" class="bg-transparent w-full border border-white py-2 px-3 text-sm opacity-50 focus:opacity-100 outline-none rounded-lg"></div></div><div class="relative overflow-x-auto shadow-md sm:rounded-lg my-8">${renderComponent($$result2, "DataTable", DataTable, { "headers": headers, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/components/admin/DataTable", "client:component-export": "default" })}</div>` })}`;
}, "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/admin/productos/index.astro", void 0);

const $$file = "C:/Users/Jose Gabriel RojaS/Documents/programacion/personal-projects/the-culture-clan/src/pages/admin/productos/index.astro";
const $$url = "/admin/productos";

export { $$Index as default, $$file as file, prerender, $$url as url };
