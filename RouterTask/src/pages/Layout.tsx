import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition ${
    isActive
      ? "bg-slate-100 text-slate-950"
      : "text-slate-100 hover:bg-slate-800/80 hover:text-white"
  }`;

const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-2xl px-4 py-3 text-sm font-medium transition ${
    isActive
      ? "bg-slate-800 text-slate-100"
      : "text-slate-100 hover:bg-slate-800/80"
  }`;

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-slate-950 text-slate-100 shadow-xl shadow-slate-900/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 text-xl font-bold text-slate-950 shadow-lg shadow-cyan-500/30">
              R
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">
                React Router Shop
              </h1>
              <p className="text-sm text-slate-400">
                Tailwind powered navigation
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 text-slate-200 transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 md:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          <nav className="hidden items-center gap-3 md:flex">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/products" className={navLinkClass}>
              Products
            </NavLink>
            <NavLink to="/add" className={navLinkClass}>
              Add Product
            </NavLink>
            <NavLink to="/product/1" className={navLinkClass}>
              Sample Item
            </NavLink>
          </nav>
        </div>

        <div
          className={`${isMenuOpen ? "block" : "hidden"} border-t border-slate-800 bg-slate-950/95 md:hidden`}
        >
          <div className="flex flex-col px-4 py-3 space-y-2">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={mobileNavLinkClass}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className={mobileNavLinkClass}
            >
              Products
            </NavLink>
            <NavLink
              to="/add"
              onClick={() => setIsMenuOpen(false)}
              className={mobileNavLinkClass}
            >
              Add Product
            </NavLink>
            <NavLink
              to="/product/1"
              onClick={() => setIsMenuOpen(false)}
              className={mobileNavLinkClass}
            >
              Sample Item
            </NavLink>
          </div>
        </div>
      </header>

      <main className="min-h-[calc(100vh-72px)] bg-slate-50/50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-12">
          {/* Photo panel */}
          <aside className="relative col-span-12 overflow-hidden rounded-3xl lg:col-span-5">
            <div className="relative h-64 sm:h-96 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1400&q=80"
                alt="Showcase"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div className="absolute left-6 bottom-6 right-6 rounded-2xl bg-white/70 p-4 backdrop-blur-sm sm:left-8 sm:bottom-8">
                <h2 className="text-lg font-semibold text-slate-900">
                  Featured Collection
                </h2>
                <p className="mt-1 text-sm text-slate-700">
                  Handpicked products with premium quality and design.
                </p>
              </div>
            </div>
          </aside>

          {/* Content panel */}
          <section className="col-span-12 lg:col-span-7 flex items-start">
            <div className="w-full rounded-3xl border border-slate-200/10 bg-white/95 p-6 shadow-2xl shadow-slate-900/5">
              <Outlet />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
