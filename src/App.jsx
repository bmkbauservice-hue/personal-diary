import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import ProfileCard from "./components/ProfileCard";
import Header from "./components/Header";
import EntryList from "./components/EntryList";
import ViewEntryModal from "./components/ViewEntryModal";
import AddEntryModal from "./components/AddEntryModal";

import { loadEntries, saveEntries } from "./utils/storage";

function DiaryPage() {
  const defaultEntries = [
    {
      
  id: 1,
  title: "Die wahre Geschichte",
  date: "2026-08-10",
  image: "/images/wahre-geschichte-collage.png",
  content:
    "Mein Leben war nie geradlinig. Es gab Sport, Ehre, Ehrgeiz, Freiheit, Rückschläge, falsche Entscheidungen, Gefängnis, Luxus, schnelle Autos, Drogen, Alkohol, harte Arbeit, große Pläne und immer wieder einen Neuanfang.\n\nVom DDR-Fußball und der Leichtathletik mit Speerwerfen über das Nachtleben bis hin zu Jahren, in denen Luxus, Exzess und ein Leben am Limit eine große Rolle gespielt haben – jede dieser Stationen gehört zu meiner Geschichte. Später habe ich mit MK Solar, BMK Bauservice und BKP Immobilien eigene Unternehmen aufgebaut, Verantwortung übernommen, Erfolge erlebt und auch erfahren, wie schnell sich im Leben wieder alles verändern kann.\n\nHeute beginnt wieder ein völlig neues Kapitel: Programmieren, React, Webentwicklung und künstliche Intelligenz. Noch einmal etwas komplett Neues zu lernen und mich neu zu erfinden, gehört inzwischen genauso zu meinem Leben wie alles, was davor war.\n\nDieses Bild zeigt deshalb nicht nur Erinnerungen. Es zeigt Erfolge und Fehler, gute und schlechte Entscheidungen, Höhen und Tiefen – und vor allem eines: Egal wie oft das Leben mich zurückgeworfen hat, ich bin immer wieder aufgestanden.",
  secret: true,
},
    {
      id: 2,
      title: "Der Tag, an dem ich nichts gemacht habe",
      date: "2026-08-09",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      content:
        "Ich hatte einen vollen Plan für den Tag. Dann habe ich mich hingesetzt. Das war offenbar mein erster Fehler. Danach war plötzlich Abend.",
    },
    {
      id: 3,
      title: "Große Pläne. Umsetzung: morgen.",
      date: "2026-08-08",
      image:
        "https://images.unsplash.com/photo-1456324504439-367cee3b3c32",
      content:
        "Heute hatte ich ungefähr 14 geniale Ideen. Davon habe ich 13 vergessen und die letzte auf morgen verschoben. Produktiver Tag.",
    },
    {
      id: 4,
      title: "Heute wollte ich nur kurz CSS ändern",
      date: "2026-08-07",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      content:
        "Der Plan war simpel: eine Farbe ändern und Feierabend. Drei Stunden später hatte ich die halbe Webseite neu gebaut und wusste nicht mehr, welche Farbe ich eigentlich ändern wollte.",
    },
    {
      id: 5,
      title: "Git sagte Konflikt",
      date: "2026-08-06",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      content:
        "Git meldete einen Konflikt. Ich meldete ebenfalls einen Konflikt. Damit waren wir uns wenigstens in einem Punkt einig.",
    },
    {
      id: 6,
      title: "Der Bug war natürlich unschuldig",
      date: "2026-08-05",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      content:
        "Zwei Stunden gesucht, sämtliche Dateien verdächtigt und kurz über einen Berufswechsel nachgedacht. Am Ende fehlte irgendwo ein einziges Zeichen.",
    },
    {
      id: 7,
      title: "Nur noch eine kleine Änderung …",
      date: "2026-08-04",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      content:
        "Diesen Satz sollte man beim Programmieren eigentlich gesetzlich verbieten. Aus einer kleinen Änderung wurden sieben neue Ideen und drei neue Probleme.",
    },
    {
      id: 8,
      title: "Heute programmiere ich ohne KI",
      date: "2026-08-03",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      content:
        "Der Vorsatz war stark. Die Motivation ebenfalls. Um 09:07 Uhr war dann allerdings schon die erste Frage an die KI raus.",
    },
    {
      id: 9,
      title: "Der Kaffee hat heute programmiert",
      date: "2026-08-02",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      content:
        "Ich möchte an dieser Stelle ausdrücklich klarstellen: Ich war lediglich für Tastatur und Maus zuständig. Die eigentliche Arbeit hat der Kaffee gemacht.",
    },
    {
      id: 10,
      title: "CSS macht, was CSS will",
      date: "2026-08-01",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      content:
        "Ich wollte eine Sache zentrieren. CSS wollte offenbar testen, wie belastbar unsere Beziehung inzwischen ist.",
    },
    {
      id: 11,
      title: "npm install und beten",
      date: "2026-07-31",
      image:
        "https://images.unsplash.com/photo-1629654297299-c8506221ca97",
      content:
        "Es gibt viele professionelle Methoden in der Softwareentwicklung. Eine meiner zuverlässigsten ist weiterhin: npm install eingeben und hoffen.",
    },
    {
      id: 12,
      title: "Ich ändere wirklich nur diese eine Sache",
      date: "2026-07-30",
      image:
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29",
      content:
        "Berühmte letzte Worte. Wenig später waren fünf Dateien geändert und ich konnte mich nicht mehr daran erinnern, womit ich überhaupt angefangen hatte.",
    },
    {
      id: 13,
      title: "Warum funktioniert das jetzt?",
      date: "2026-07-29",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      content:
        "Ich habe nichts geändert. Wirklich nichts. Trotzdem funktioniert es plötzlich. Das macht mir ehrlich gesagt mehr Angst als der Fehler vorher.",
    },
    {
      id: 14,
      title: "Mein Code funktioniert!",
      date: "2026-07-28",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
      content:
        "Niemand bewegt sich. Niemand klickt etwas an. Niemand aktualisiert irgendein Paket. Dieser Zustand muss konserviert werden.",
    },
    {
      id: 15,
      title: "Backup? Natürlich habe ich ein Backup",
      date: "2026-07-27",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
      content:
        "Zumindest glaube ich das. GitHub zählt doch als Backup, oder? Ich entscheide einfach mal: ja.",
    },
  ];

  const [entries, setEntries] = useState(() => {
    const savedEntries = loadEntries();

    if (!savedEntries) {
      return defaultEntries;
    }

    const savedEntriesById = new Map(
      savedEntries.map((entry) => [entry.id, entry]),
    );

    const mergedEntries = defaultEntries.map((defaultEntry) => {
      const savedEntry = savedEntriesById.get(defaultEntry.id);

      if (defaultEntry.id === 1) {
        return {
          ...savedEntry,
          ...defaultEntry,
        };
      }

      if (savedEntry) {
        return {
          ...defaultEntry,
          ...savedEntry,
        };
      }

      return defaultEntry;
    });

    const customEntries = savedEntries.filter(
      (savedEntry) =>
        !defaultEntries.some(
          (defaultEntry) => defaultEntry.id === savedEntry.id,
        ),
    );

    return [...customEntries, ...mergedEntries].sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );
  });

  const [selectedEntryId, setSelectedEntryId] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const selectedEntry =
    entries.find((entry) => entry.id === selectedEntryId) ?? null;

  useEffect(() => {
    saveEntries(entries);
  }, [entries]);

  function handleAddEntry(newEntry) {
    setEntries((currentEntries) =>
      [newEntry, ...currentEntries].sort(
        (a, b) => new Date(b.date) - new Date(a.date),
      ),
    );
  }

  return (
    <>
      <Header onAddEntry={() => setShowAddModal(true)} />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <section className="grid items-center gap-12 lg:grid-cols-2">
          <div>
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
          </div>

          <ProfileCard />
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
            onEntryClick={(entry) => setSelectedEntryId(entry.id)}
          />
        </section>
      </main>

      <ViewEntryModal
        entry={selectedEntry}
        onClose={() => setSelectedEntryId(null)}
      />

      <AddEntryModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAddEntry={handleAddEntry}
        entries={entries}
      />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-violet-400">
          Über dieses Projekt
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Personal Diary
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          Dieses Tagebuch wurde mit React, Vite, Tailwind CSS,
          DaisyUI und React Router entwickelt.
        </p>
      </main>
    </>
  );
}

function App() {
  return (
    <div
      data-theme="night"
      className="min-h-screen bg-slate-950 text-white"
    >
      <Routes>
        <Route path="/" element={<DiaryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;