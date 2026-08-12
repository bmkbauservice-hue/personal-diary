function ProfileCard() {
  return (
    <div className="group relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-violet-500/30 bg-slate-900/70 p-6 shadow-2xl shadow-violet-950/30 transition duration-500 hover:-translate-y-2 hover:border-red-500/60 hover:shadow-red-950/50">
      <div className="absolute inset-0 bg-linear-to-br from-violet-500/10 via-transparent to-transparent transition duration-500 group-hover:opacity-0" />

      <div className="absolute inset-0 bg-linear-to-br from-red-500/20 via-transparent to-red-950/30 opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative h-[430px] overflow-hidden rounded-2xl bg-slate-950/70">
        <img
          src="/images/profile-normal.png"
          alt="Profil"
          className="absolute inset-0 h-full w-full object-contain transition duration-500 group-hover:scale-105 group-hover:opacity-0"
        />

        <img
          src="/images/profile-angry.png"
          alt="Wütendes Profil"
          className="absolute inset-0 h-full w-full object-contain opacity-0 transition duration-500 group-hover:scale-110 group-hover:opacity-100"
        />
      </div>

      <div className="relative mt-5 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-400 transition duration-300 group-hover:text-red-400">
          Der Besitzer
        </p>

        <h3 className="mt-2 text-2xl font-bold text-white">
          Mein Tagebuch
        </h3>

        <p className="mt-3 min-h-7 text-slate-400">
          <span className="group-hover:hidden">
            Persönliche Erinnerungen und Gedanken.
          </span>

          <span className="hidden font-bold text-red-400 group-hover:inline">
            Hey! Was machst du an meinem Tagebuch?
          </span>
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;