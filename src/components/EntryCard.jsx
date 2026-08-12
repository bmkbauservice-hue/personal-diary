function EntryCard({ entry, onClick }) {
  return (
    <article
      onClick={() => onClick(entry)}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-950/40"
    >
      <div className="overflow-hidden">
        <img
          src={entry.image}
          alt={entry.title}
          className="h-56 w-full object-cover blur-[5px] opacity-70 transition duration-500 group-hover:scale-110 group-hover:blur-[3px] group-hover:opacity-80"
        />
      </div>

      <div className="p-6">
        <p className="text-sm font-medium text-violet-400">
          {new Date(entry.date).toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

        <h3 className="mt-2 text-xl font-bold text-white">
          {entry.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-slate-400">
          {entry.content}
        </p>

        <p className="mt-5 text-sm font-semibold text-violet-400">
          Eintrag öffnen →
        </p>
      </div>
    </article>
  );
}

export default EntryCard;