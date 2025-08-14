export default function Page() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-slate-900/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-white">Rain</span>
            <span className="text-brand-accent">bet</span>
          </div>
          <nav className="space-x-4 text-sm">
            <a className="px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-700" href="#">Casino</a>
            <a className="px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-700" href="#">Sports</a>
            <a className="px-3 py-1 rounded-xl bg-brand-soft hover:bg-brand">Register</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Experience Betting Without <span className="text-brand-accent">Boundaries</span>
        </h1>
        <p className="mt-4 text-slate-300 max-w-2xl">
          This is a clean, production-safe baseline. If your previous deploy rendered all-white, it
          usually means the CSS bundle wasn't loaded. This starter imports global CSS in the root
          layout and ships a working Tailwind config, so styling shows up on Vercel.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 font-semibold">
            Register
          </button>
          <button className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700">
            Or sign in
          </button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-800/50 p-6">
              <div className="h-36 rounded-xl bg-gradient-to-br from-brand/40 to-brand-accent/30" />
              <div className="mt-4 font-semibold">Game #{i + 1}</div>
              <div className="text-sm text-slate-400">Demo card</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
