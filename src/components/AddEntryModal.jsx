import { useState } from "react";

function AddEntryModal({ isOpen, onClose, onAddEntry, entries }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  function resetForm() {
    setTitle("");
    setDate("");
    setImage("");
    setContent("");
    setError("");
  }

  function handleClose() {
    resetForm();
    onClose();
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !date || !image.trim() || !content.trim()) {
      setError("Bitte füllen Sie alle Felder aus.");
      return;
    }

    const entryExists = entries.some((entry) => entry.date === date);

    if (entryExists) {
      setError(
        "Für diesen Tag existiert bereits ein Eintrag. Komm morgen wieder!"
      );
      return;
    }

    const newEntry = {
      id: crypto.randomUUID(),
      title: title.trim(),
      date,
      image: image.trim(),
      content: content.trim(),
    };

    onAddEntry(newEntry);
    resetForm();
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 px-4 py-4 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div className="flex min-h-full items-start justify-center sm:items-center">
        <div
          className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-violet-400">
                Neue Erinnerung
              </p>

              <h2 className="mt-1 text-3xl font-bold text-white">
                Eintrag hinzufügen
              </h2>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-2xl text-white transition hover:bg-red-600"
              aria-label="Fenster schließen"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Titel
              </label>

              <input
                id="title"
                type="text"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                  setError("");
                }}
                placeholder="Was ist heute passiert?"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="date"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Datum
              </label>

              <input
                id="date"
                type="date"
                value={date}
                onChange={(event) => {
                  setDate(event.target.value);
                  setError("");
                }}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="image"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Bild-URL
              </label>

              <input
                id="image"
                type="url"
                value={image}
                onChange={(event) => {
                  setImage(event.target.value);
                  setError("");
                }}
                placeholder="https://..."
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="content"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Inhalt
              </label>

              <textarea
                id="content"
                value={content}
                onChange={(event) => {
                  setContent(event.target.value);
                  setError("");
                }}
                rows="4"
                placeholder="Schreibe deine Erinnerung..."
                className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>

            {error && (
              <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                Abbrechen
              </button>

              <button
                type="submit"
                className="flex-1 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-600/20"
              >
                Eintrag speichern
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEntryModal;