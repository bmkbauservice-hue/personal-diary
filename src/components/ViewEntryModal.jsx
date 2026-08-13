import { useRef, useState } from "react";

function ViewEntryModal({ entry, onClose }) {
  const [answer, setAnswer] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");
  const audioRef = useRef(null);

  if (!entry) {
    return null;
  }

  function handleUnlock(event) {
    event.preventDefault();

    const normalizedAnswer = answer.trim().toLowerCase();

    if (normalizedAnswer === "loch") {
      setUnlocked(true);
      setError("");

      audioRef.current
        ?.play()
        .catch((playError) => {
          console.error(
            "Audio konnte nicht gestartet werden:",
            playError,
          );
        });

      return;
    }

    setError(
      "❌ Falsch. So leicht kommst du nicht an meine Geheimnisse. 😈",
    );
  }

  function handleClose() {
    setAnswer("");
    setUnlocked(false);
    setError("");

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    onClose();
  }

  const isSecretLocked = entry.secret && !unlocked;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <audio
          ref={audioRef}
          src={`${import.meta.env.BASE_URL}audio/wahre-geschichte.mp4`}
          preload="auto"
        />

        <div className="flex justify-end">
          <button
            onClick={handleClose}
            className="btn btn-circle btn-ghost"
          >
            ✕
          </button>
        </div>

        {isSecretLocked ? (
          <div className="py-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-red-400">
              Geheimer Eintrag
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white">
              🔒 Die wahre Geschichte
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">
              Dieser Eintrag bleibt verborgen, bis du das Rätsel löst.
            </p>

            <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-red-500/30 bg-red-950/20 p-6">
              <p className="text-xl font-semibold text-white">
                Was wird größer, je mehr man davon wegnimmt?
              </p>

              <form onSubmit={handleUnlock} className="mt-6">
                <input
                  type="text"
                  value={answer}
                  onChange={(event) =>
                    setAnswer(event.target.value)
                  }
                  placeholder="Deine Antwort..."
                  className="input input-bordered w-full"
                />

                {error && (
                  <p className="mt-4 text-red-400">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-error mt-6 w-full"
                >
                  Rätsel lösen
                </button>
              </form>
            </div>
          </div>
        ) : (
          <>
            {entry.secret && (
              <div className="mb-5 rounded-xl border border-green-500/30 bg-green-950/30 p-4 text-center font-semibold text-green-400">
                🔓 Verdammt ... du hast es geschafft.
              </div>
            )}

            <div className="flex justify-center rounded-2xl bg-slate-950/60 p-4">
              <img
                src={entry.image}
                alt={entry.title}
                className="max-h-[700px] w-full max-w-full rounded-xl object-contain"
              />
            </div>

            <p className="mt-6 text-sm font-medium text-violet-400">
              {new Date(
                `${entry.date}T00:00:00`,
              ).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              {entry.title}
            </h2>

            <p className="mt-6 whitespace-pre-line text-lg leading-8 text-slate-300">
              {entry.content}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default ViewEntryModal;