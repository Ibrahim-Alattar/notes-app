import { Card } from "./Card";
export function NoteCard({ title, body, onDelete, onSelect }) {
  return (
    <Card>
      <button onClick={onSelect} type="button">
        <h2>{title}</h2>
        <p>{body}</p>
      </button>
      <button onClick={onDelete} type="button">
        Delete
      </button>
    </Card>
  );
}
