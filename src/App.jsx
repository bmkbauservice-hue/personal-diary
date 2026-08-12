import { useEffect, useState } from "react";
import { loadEntries, saveEntries } from "./utils/storage";

import Header from "./components/Header";
import EntryList from "./components/EntryList";
import ViewEntryModal from "./components/ViewEntryModal";
import AddEntryModal from "./components/AddEntryModal";

function App() {
  const [entries, setEntries] = useState(() => {
    const savedEntries = loadEntries();

        if (savedEntries) {
          return savedEntries;
}

    return [
      {
        id: 1,
        title: "Mein erster Tagebucheintrag",
        date: "2026-08-10",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        content:
          "Heute beginnt mein persönliches Tagebuch. Hier möchte ich besondere Momente, Gedanken und Erinnerungen festhalten.",
      },
      {
        id: 2,
        title: "Ein entspannter Sommertag",
        date: "2026-08-09",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        content:
          "Ein ruhiger Tag mit Sonne, guter Musik und Zeit zum Abschalten.",
      },
      {
        id: 3,
        title: "Neue Ideen",
        date: "2026-08-08",
        image:
          "https://images.unsplash.com/photo-1456324504439-367cee3b3c32",
        content:
          "Heute sind mir einige neue Ideen für meine Projekte eingefallen. Manche davon könnten richtig spannend werden.",
      },
    ];
  });

  const [selectedEntry, setSelectedEntry] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
  saveEntries(entries);
}, [entries]);


  function handleEntryClick(entry) {
    setSelectedEntry(entry);
  }

  function handleCloseViewModal() {
    setSelectedEntry(null);
  }

  function handleAddEntry(newEntry) {
    setEntries((currentEntries) =>
      [newEntry, ...currentEntries].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      )
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header onAddEntry={() => setShowAddModal(true)} />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <section>
          <p className="text-violet-400">
            Mein persönliches Tagebuch
          </p>

          <h2 className="mt-2 text-5xl font-bold">
            Meine Erinnerungen.
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-slate-400">
            Ein Ort für besondere Momente, Gedanken und Geschichten,
            die ich nicht vergessen möchte.
          </p>
        </section>

        <section className="mt-14">
          <div className="mb-7 flex items-center justify-between">
            <h3 className="text-2xl font-semibold">
              Meine Einträge
            </h3>

            <span className="text-sm text-slate-500">
              {entries.length} Einträge
            </span>
          </div>

          <EntryList
            entries={entries}
            onEntryClick={handleEntryClick}
          />
        </section>
      </main>

      <ViewEntryModal
        entry={selectedEntry}
        onClose={handleCloseViewModal}
      />

      <AddEntryModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAddEntry={handleAddEntry}
        entries={entries}
      />
    </div>
  );
}

export default App;