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
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.body.toLowerCase().includes(search.toLowerCase()),
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
    content = <p>No notes yet.</p>;
  } else if (filteredNotes.length === 0) {
    content = <p>No notes found.</p>;
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
    <>
      {selectedNote ? (
        <EditNote
          title={selectedNote.title}
          body={selectedNote.body}
          onBack={() => setSelectedId(null)}
          onUpdate={(fields) => handleUpdate(selectedNote.id, fields)}
        />
      ) : (
        <div>
          <SearchBox
            search={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <AddNote onAdd={addNote} />
          {content}
        </div>
      )}
    </>
  );
}
