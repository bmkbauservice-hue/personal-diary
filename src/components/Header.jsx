import { Link } from "react-router";

function Header({ onAddEntry }) {
  return (
    <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
            Persönliches Tagebuch
          </p>

          <h1 className="mt-1 text-3xl font-bold text-white">
            Meine Geschichte 
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            Tagebuch
          </Link>

          <Link
            to="/about"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            Über das Projekt
          </Link>

          {onAddEntry && (
            <button
              onClick={onAddEntry}
              className="btn btn-primary rounded-xl px-6"
            >
              + Eintrag hinzufügen
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;