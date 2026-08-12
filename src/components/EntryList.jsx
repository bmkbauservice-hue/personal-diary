import EntryCard from "./EntryCard";

function EntryList({ entries, onEntryClick }) {
  if (entries.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-12 text-center">
        <p className="text-xl font-semibold text-white">
          Noch keine Erinnerungen gespeichert.
        </p>

        <p className="mt-2 text-slate-400">
          Dein erster Tagebucheintrag wartet auf dich.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry) => (
        <EntryCard
          key={entry.id}
          entry={entry}
          onClick={onEntryClick}
        />
      ))}
    </div>
  );
}

export default EntryList;