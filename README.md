Personal Diary

Über das Projekt

Dieses Projekt ist mein persönliches Tagebuch und gleichzeitig ein React-Wochenprojekt im Rahmen meiner Weiterbildung.

Die Anwendung enthält verschiedene Tagebucheinträge, Bilder, persönliche Geschichten und interaktive Elemente. Neben normalen Einträgen gibt es mit **„Die wahre Geschichte“** einen besonders geschützten Eintrag, der erst nach dem Lösen eines Rätsels geöffnet werden kann.

Das Projekt verbindet persönliche Inhalte mit den React-Themen, die ich im Unterricht gelernt habe.

Verwendete Technologien

Ich habe unter anderem folgende Technologien verwendet:

* React
* Vite
* React Router
* Tailwind CSS
* DaisyUI
* JavaScript
* LocalStorage
* Git und GitHub

Ich habe bewusst aktuelle Paketversionen verwendet, da es für dieses Projekt keinen technischen Grund gibt, ältere Versionen einzusetzen.

Warum React?

React eignet sich für dieses Projekt, weil sich viele Bereiche der Oberfläche dynamisch verändern.

Zum Beispiel:

* Einträge können geöffnet werden.
* Modals werden ein- und ausgeblendet.
* Neue Einträge können hinzugefügt werden.
* Ein Rätsel kann gelöst werden.
* Der Zustand der Oberfläche verändert sich abhängig von Benutzeraktionen.

Diese Änderungen lassen sich mit React und State übersichtlich umsetzen.

Komponenten

Ich habe die Anwendung in mehrere Komponenten aufgeteilt, damit nicht die gesamte Logik in einer einzigen Datei liegt.

Header

Der Header enthält die Navigation und den Button zum Hinzufügen eines neuen Eintrags.

ProfileCard

Die ProfileCard zeigt mein Profilbild und besitzt einen Hover-Effekt.

Die Komponente ist bewusst getrennt, weil die Profil-Darstellung unabhängig von der eigentlichen Tagebuchliste funktioniert und später um weitere Hover-Interaktionen erweitert werden kann.

EntryList

EntryList bekommt alle Tagebucheinträge über Props und kümmert sich um die Darstellung der Liste.

EntryCard`

Eine `EntryCard` stellt jeweils einen einzelnen Tagebucheintrag dar.

Dadurch muss das Design einer Karte nur an einer Stelle gepflegt werden.

ViewEntryModal

Diese Komponente zeigt einen vollständigen Tagebucheintrag in einem Modal.

Außerdem enthält sie die Logik für den geheimen Eintrag und das Rätsel.

AddEntryModal

Mit diesem Modal können neue Einträge hinzugefügt werden.

Durch die Trennung bleibt die Formularlogik unabhängig von der Darstellung der Einträge.

useState

Ich verwende `useState`, wenn sich ein Wert innerhalb der Anwendung verändern kann.

Beispiele sind:

* die Liste der Tagebucheinträge
* der aktuell ausgewählte Eintrag
* das Öffnen und Schließen eines Modals
* die Eingabe beim Rätsel
* der Zustand, ob ein geheimer Eintrag freigeschaltet wurde

Ein Beispiel ist:

```jsx
const [entries, setEntries] = useState(...);
```

entries enthält die aktuellen Tagebucheinträge.

Mit `setEntries` kann ich den State aktualisieren.

useEffect

Ich verwende `useEffect`, um die Einträge zu speichern, sobald sich der State verändert.

```jsx
useEffect(() => {
  saveEntries(entries);
}, [entries]);
```

Dadurch wird die Speicherfunktion immer dann ausgeführt, wenn sich `entries` verändert.

LocalStorage

Die Tagebucheinträge sollen nach einem Neuladen des Browsers nicht verschwinden.

Deshalb speichere ich sie im LocalStorage.

Die Funktionen dafür liegen in:

```text
src/utils/storage.js
```

Zum Speichern werden JavaScript-Daten mit `JSON.stringify()` in Text umgewandelt.

Beim Laden werden sie mit `JSON.parse()` wieder in JavaScript-Daten umgewandelt.

LocalStorage ist für dieses Projekt ausreichend, weil aktuell kein Backend und keine Datenbank benötigt werden.

Standard-Einträge und eigene Einträge

Das Projekt besitzt feste Standard-Einträge.

Diese bleiben im Code definiert.

Zusätzlich selbst erstellte Einträge werden im LocalStorage gespeichert.

Dadurch können alte gespeicherte Versionen nicht mehr unbeabsichtigt meine aktuellen Standardtexte überschreiben.

React Router

Mit React Router habe ich mehrere Ansichten innerhalb der React-Anwendung umgesetzt.

Zum Beispiel:

```jsx
<Route path="/" element={<DiaryPage />} />
<Route path="/about" element={<AboutPage />} />
```

Dadurch kann ich zwischen dem Tagebuch und der Projektseite wechseln, ohne separate HTML-Dateien anzulegen.

Tailwind CSS

Für das Styling verwende ich Tailwind CSS.

Dadurch kann ich viele Styles direkt über Utility-Klassen definieren.

Zum Beispiel:

```jsx
className="mt-6 text-lg leading-8 text-slate-300"
```

Ich habe Tailwind verwendet, weil es bereits Teil des vorgesehenen Projekt-Setups ist und sich damit Komponenten konsistent gestalten lassen.

DaisyUI

DaisyUI ergänzt Tailwind um bereits vorbereitete Komponenten und Klassen.

Zum Beispiel:

```jsx
className="btn btn-primary"
```

oder:

```jsx
className="input input-bordered"
```

Dadurch kann ich ein einheitliches Design verwenden, ohne jeden Button oder jedes Eingabefeld komplett selbst gestalten zu müssen.

Der geheime Eintrag

Der Eintrag **„Die wahre Geschichte“** besitzt:

```jsx
secret: true
```

Dadurch kann die Ansicht erkennen, dass dieser Eintrag geschützt ist.

Solange das Rätsel nicht gelöst wurde, zeigt das Modal nur die Rätselansicht.

Nach der richtigen Antwort wird der eigentliche Inhalt freigeschaltet.

Auswahl eines Eintrags

Ich speichere nicht den kompletten ausgewählten Eintrag als zweite Kopie im State, sondern nur dessen ID.

```jsx
const [selectedEntryId, setSelectedEntryId] = useState(null);
```

Der aktuelle Eintrag wird anschließend aus der eigentlichen Eintragsliste ermittelt.

```jsx
const selectedEntry =
  entries.find((entry) => entry.id === selectedEntryId) ?? null;
```

Dadurch bleibt `entries` die zentrale Datenquelle und es entstehen keine veralteten Kopien eines Eintrags.

Bilder

Eigene Bilder befinden sich im `public`-Verzeichnis.

Bei der Bereitstellung über GitHub Pages verwende ich die von Vite bereitgestellte Base-URL:

```jsx
`${import.meta.env.BASE_URL}images/wahre-geschichte-collage.png`
```

Dadurch funktionieren die Pfade sowohl lokal als auch bei einem Deployment in einem Unterverzeichnis.

Git und GitHub

Ich arbeite nicht direkt auf dem `main`-Branch.

Für Änderungen verwende ich Feature-Branches.

Der grundlegende Ablauf ist:

```text
main
→ Feature-Branch
→ Änderungen
→ Commit
→ Push
→ Pull Request
→ Merge
```

Dadurch bleibt `main` möglichst stabil und die Entwicklungsschritte sind nachvollziehbar.

Einsatz von KI

Ich habe bei diesem Projekt KI als Unterstützung verwendet.

Die KI hat mir unter anderem geholfen bei:

* Fehlersuche
* Erklärungen zu React
* Ideen für Komponenten
* Formulierung von Texten
* Vorschlägen für Tailwind-Klassen
* Git- und GitHub-Schritten
* der Erstellung und Bearbeitung von Bildern

Ich habe den erzeugten Code jedoch nicht einfach ungeprüft übernommen.

Ich habe Anpassungen vorgenommen, Fehler behoben und mir erklären lassen, warum bestimmte Lösungen verwendet werden.

Mein Ziel ist nicht, Code nur mit KI zu erzeugen, sondern die verwendeten Konzepte selbst nachvollziehen und erklären zu können.

Gerade bei diesem Projekt habe ich darauf geachtet, aktuelle Pakete zu verwenden und technische Entscheidungen bewusster zu treffen.

Was ich mit dem Projekt gelernt habe

Durch dieses Projekt habe ich unter anderem besser verstanden:

* wie React-Komponenten zusammenarbeiten
* wie Props verwendet werden
* wie State mit `useState` funktioniert
* wann `useEffect` sinnvoll ist
* wie LocalStorage zur Persistenz verwendet werden kann
* wie React Router Seiten innerhalb einer SPA verwaltet
* wie Tailwind und DaisyUI eingesetzt werden
* warum Daten nicht unnötig doppelt im State gespeichert werden sollten
* wie Feature-Branches und Pull Requests verwendet werden
* wie wichtig es ist, verwendeten Code und technische Entscheidungen erklären zu können

Fazit

Das Projekt ist für mich nicht nur eine technische Übung.

Es verbindet React und Webentwicklung mit persönlichen Erinnerungen und meiner eigenen Geschichte.

Gleichzeitig zeigt es meinen aktuellen Lernstand und die Entwicklung von einem einfachen Tagebuch zu einer interaktiven React-Anwendung.
