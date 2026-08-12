function Header({ onAddEntry }) {
  return (
    <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
            Personal Diary
          </p>

          <h1 className="mt-1 text-3xl font-bold text-white">
            MyStory
          </h1>
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={onAddEntry}
            className="
              rounded-xl
              bg-violet-600
              px-6 py-3
              font-semibold text-white
              transition duration-300
              hover:bg-violet-500
              hover:shadow-lg
              hover:shadow-violet-600/30
            "
          >
            + Eintrag hinzufügen
          </button>

          {/* Profilbild */}
          <div className="profile-container group relative">
            {/* Tooltip */}
            <div
              className="
                pointer-events-none
                absolute
                right-0 top-[82px]
                z-50
                w-max
                rounded-xl
                border border-red-500/30
                bg-red-950
                px-4 py-2
                text-sm font-semibold
                text-red-200
                opacity-0
                shadow-xl
                transition-all duration-300
                group-hover:translate-y-1
                group-hover:opacity-100
              "
            >
              Hey! Was machst du an meinem Tagebuch? 😈
            </div>

            {/* Avatar */}
            <div
              className="
                relative
                h-16 w-16
                cursor-pointer
                overflow-hidden
                rounded-full
                border-2 border-violet-500
                bg-slate-800
                transition-all duration-300
                group-hover:border-red-500
                group-hover:shadow-[0_0_30px_rgba(239,68,68,0.8)]
              "
            >
              {/* Normales Gesicht */}
              <div
                className="
                  absolute inset-0
                  flex items-center justify-center
                  text-3xl
                  transition-all duration-300
                  group-hover:scale-125
                  group-hover:opacity-0
                "
              >
                😎
              </div>

              {/* Böses Gesicht */}
              <div
                className="
                  absolute inset-0
                  flex scale-75
                  items-center justify-center
                  bg-red-950
                  text-3xl
                  opacity-0
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:opacity-100
                  group-hover:animate-angry
                "
              >
                😈
              </div>

              {/* roter Glow */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-red-500/0
                  transition duration-300
                  group-hover:bg-red-500/10
                "
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;