import { NoteCard } from "./NoteCard";

export function NotesList({ notes, onDelete, onSelect }) {
  return (
    <ul role="list" className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      {notes.map(({ id, title, body }) => (
        <li key={id} className="min-w-0">
          <NoteCard
            title={title}
            body={body}
            onDelete={() => onDelete(id)}
            onSelect={() => onSelect(id)}
          />
        </li>
      ))}
    </ul>
  );
}
