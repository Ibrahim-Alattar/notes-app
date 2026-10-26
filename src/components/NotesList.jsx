import { NoteCard } from "./NoteCard";
export function NotesList({ notes, onDelete, onSelect }) {
  return (
    <ul>
      {notes.map(({ id, title, body }) => (
        <li key={id}>
          <NoteCard
            title={title}
            body={body}
            onDelete={() => onDelete(id)}
            onSelect={() => {
              onSelect(id);
              console.log(id);
            }}
          />
        </li>
      ))}
    </ul>
  );
}
