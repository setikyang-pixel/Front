import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../utils/type";
import { Axios } from "../utils/api";

export default function Products() {
  let [users, setUsers] = useState<Product[]>([]);
  useEffect(() => {
    Axios.get<Product[]>("/products").then((res) => setUsers(res.data));
  }, []);

  return (
    <section className="w-full">
      <div className="mb-8 space-y-6 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-200/50 bg-violet-50/50 px-4 py-2 backdrop-blur-sm">
          <div className="h-2 w-2 rounded-full bg-violet-500" />
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-700">
            Premium Selection
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Curated Products
        </h1>
        <p className="mx-auto max-w-2xl text-base text-slate-600 sm:mx-0">
          Discover our handpicked collection of premium electronics and
          accessories. Quality assured, fast shipping, and competitive pricing.
        </p>

        <div className="mx-auto flex max-w-md flex-col gap-4 rounded-[32px] border border-slate-200/80 bg-white/90 p-5 shadow-lg shadow-slate-900/5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Customer Rating
            </p>
            <p className="mt-1 text-3xl font-bold text-slate-950">4.9</p>
          </div>
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-6 w-6 text-amber-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.049 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
              </svg>
            ))}
            <span className="text-sm font-medium text-slate-500">
              (1.4k reviews)
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-violet-300/60 hover:shadow-2xl hover:shadow-violet-500/10"
          >
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
              <img
                src={product.photo}
                alt={product.name}
                className="aspect-square w-full object-cover transition duration-500 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute top-4 right-4 rounded-2xl bg-emerald-500/90 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
                In Stock
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="space-y-2">
                <p className="line-clamp-2 text-base font-bold text-slate-950 transition duration-300 group-hover:text-violet-600">
                  {product.name}
                </p>
                <div className="flex items-center gap-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-3.5 w-3.5 ${i < 4 ? "fill-amber-400" : "fill-slate-300"}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 ml-1">
                    (42 reviews)
                  </span>
                </div>
              </div>

              <div className="mt-auto space-y-3 border-t border-slate-100 pt-4">
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Price</p>
                    <p className="text-2xl font-bold text-slate-950">
                      ${product.price?.toFixed(2)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="line-through text-xs text-slate-400">
                      ${(Number(product.price) * 1.2).toFixed(2)}
                    </p>
                    <p className="text-sm font-bold text-emerald-600">
                      Save 17%
                    </p>
                  </div>
                </div>
                <Link
                  className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-violet-700 py-3 text-sm font-bold text-white shadow-lg shadow-violet-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-600/50 active:scale-95 flex items-center justify-center gap-2"
                  to={`/product/${product.id}`}
                >
                  <span>View Details</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {users.length === 0 && (
        <div className="rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50/50 py-16 text-center backdrop-blur-sm">
          <svg
            className="mx-auto h-12 w-12 text-slate-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M20 7l-8-4-8 4m0 0l8 4m-8-4v10l8 4m0-10l8 4m-8-4v10"
            />
          </svg>
          <p className="text-base font-semibold text-slate-900 mb-1">
            No Products Available
          </p>
          <p className="text-sm text-slate-600">
            Check back soon for our latest collection
          </p>
        </div>
      )}
    </section>
  );
}
