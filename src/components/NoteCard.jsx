import { Card } from "./Card";

export function NoteCard({ title, body, onDelete, onSelect }) {
  return (
    <Card className="flex items-start gap-2 sm:gap-3">
      <button
        type="button"
        onClick={onSelect}
        className="cursor-pointer min-w-0 flex-1 rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/20"
      >
        <h2 className="truncate text-sm font-semibold text-neutral-900 sm:text-base">
          {title}
        </h2>
        <p className="mt-1 line-clamp-3 text-sm leading-relaxed break-words whitespace-pre-line text-neutral-600">
          {body}
        </p>
      </button>

      <button
        type="button"
        onClick={onDelete}
        aria-label={`Delete ${title}`}
        className="cursor-pointer -mr-1 shrink-0 rounded-lg px-2 py-1 text-xs font-medium text-neutral-400 transition-colors outline-none hover:bg-red-50 hover:text-red-600 focus-visible:bg-red-50 focus-visible:text-red-600 focus-visible:ring-2 focus-visible:ring-red-500/30 sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
      >
        Delete
      </button>
    </Card>
  );
}
