import { useEffect, useState } from "react";
import { AddNote } from "./AddNote";
import { NotesList } from "./NotesList";
import { SearchBox } from "./SearchBox";
import { EditNote } from "./EditNote";

export function Notes() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function addNote(note) {
    setNotes((prev) => [...prev, note]);
  }

  function deleteNote(id) {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }

  const filteredNotes = notes.filter(
    (note) =>
      (note.title ?? "").toLowerCase().includes(search.trim().toLowerCase()) ||
      (note.body ?? "").toLowerCase().includes(search.trim().toLowerCase()),
  );

  const selectedNote = notes.find((note) => note.id === selectedId);

  function handleUpdate(id, newFields) {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, ...newFields } : note)),
    );
    setSelectedId(null);
  }

  let content;

  if (notes.length === 0) {
    content = (
      <p className="rounded-xl border border-dashed border-neutral-300 px-4 py-12 text-center text-sm text-neutral-500">
        No notes yet. Add your first one above.
      </p>
    );
  } else if (filteredNotes.length === 0) {
    content = (
      <p className="rounded-xl border border-dashed border-neutral-300 px-4 py-12 text-center text-sm text-neutral-500">
        No notes match “{search}”.
      </p>
    );
  } else {
    content = (
      <NotesList
        onDelete={deleteNote}
        notes={filteredNotes}
        onSelect={setSelectedId}
      />
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
      <div className="mx-auto w-full max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-3xl lg:py-16">
        <header className="mb-6 flex items-baseline justify-between gap-3 sm:mb-8">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Notes
          </h1>
          {notes.length > 0 && (
            <span className="text-xs text-neutral-500 sm:text-sm">
              {notes.length} {notes.length === 1 ? "note" : "notes"}
            </span>
          )}
        </header>

        {selectedNote ? (
          <EditNote
            title={selectedNote.title}
            body={selectedNote.body}
            onBack={() => setSelectedId(null)}
            onUpdate={(fields) => handleUpdate(selectedNote.id, fields)}
          />
        ) : (
          <div className="flex flex-col gap-4 sm:gap-5">
            <SearchBox
              search={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <AddNote onAdd={addNote} />
            <section aria-live="polite">{content}</section>
          </div>
        )}
      </div>
    </div>
  );
}
