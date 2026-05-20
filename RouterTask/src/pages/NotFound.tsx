import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-72px)] items-center justify-center px-4 py-12">
      <section className="w-full max-w-2xl rounded-3xl border border-slate-200/60 bg-gradient-to-br from-slate-50/90 via-white to-slate-50/90 p-8 text-center shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:p-12">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-violet-500/20 via-cyan-500/20 to-violet-500/20 blur-2xl" />
            <div className="relative text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-cyan-500 to-violet-600 sm:text-[10rem]">
              404
            </div>
          </div>
        </div>
        <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/10 to-cyan-500/10 ring-2 ring-violet-200/50 animate-bounce">
          <svg
            className="h-10 w-10 text-violet-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-slate-600">
          Oops! The page you're looking for seems to have taken a wrong turn. It
          might have been moved, deleted, or never existed in the first place.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className="rounded-2xl bg-gradient-to-r from-violet-600 to-violet-700 px-8 py-4 text-base font-bold text-white shadow-lg shadow-violet-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-600/50 hover:-translate-y-1 active:scale-95"
          >
            ← Back to Home
          </Link>
        </div>
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
      </section>
    </div>
  );
}
