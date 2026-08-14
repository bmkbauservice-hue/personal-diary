function ProfileCard({ onAngryChange }) {
  return (
    <div className="flex justify-center lg:justify-end">
      <div
        className="group relative h-80 w-80 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl"
        onMouseEnter={() => onAngryChange(true)}
        onMouseLeave={() => onAngryChange(false)}
      >
        {/* Normales Profilbild */}
        <img
          src={`${import.meta.env.BASE_URL}images/profile-normal.png`}
          alt="Muju"
          className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-0"
        />

        {/* Böses Profilbild */}
        <img
          src={`${import.meta.env.BASE_URL}images/profile-angry.png`}
          alt="Böser Muju"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
        />

        {/* Abdunklung unten */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Normaler Text */}
        <div className="absolute bottom-5 left-5 transition-all duration-300 group-hover:translate-y-4 group-hover:opacity-0">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
            Mein Tagebuch
          </p>

          <h3 className="mt-1 text-2xl font-bold text-white">
            Muju
          </h3>
        </div>

        {/* Text beim bösen Muju */}
        <div className="pointer-events-none absolute bottom-5 left-5 right-5 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm font-bold uppercase tracking-widest text-red-400">
            Vorsicht 😈
          </p>

          <h3 className="mt-1 text-xl font-bold text-white">
            Wer bist du ? Neugierig ?
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;