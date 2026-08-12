const STORAGE_KEY = "diaryEntries";

export function loadEntries() {
  const savedEntries = localStorage.getItem(STORAGE_KEY);

  if (!savedEntries) {
    return null;
  }

  try {
    return JSON.parse(savedEntries);
  } catch {
    return null;
  }
}

export function saveEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}