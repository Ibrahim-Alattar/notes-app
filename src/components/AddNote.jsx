import { useState } from "react";

export function AddNote({ onAdd }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const canSave = title.trim() && body.trim();

  function handleSubmit(e) {
    e.preventDefault();
    if (!canSave) return;
    onAdd({ id: crypto.randomUUID(), title: title.trim(), body: body.trim() });
    setTitle("");
    setBody("");
  }

  const field =
    "w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors outline-none focus:border-neutral-400 focus:bg-white focus:ring-2 focus:ring-neutral-900/10 sm:text-sm";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-neutral-200 bg-white p-4 shadow-xs sm:p-5"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="note-title" className="sr-only">
          Note title
        </label>
        <input
          id="note-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add title"
          autoComplete="off"
          required
          className={`${field} font-medium`}
        />

        <label htmlFor="note-body" className="sr-only">
          Note body
        </label>
        <textarea
          id="note-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Add note"
          required
          rows={3}
          className={`${field} min-h-20 resize-y leading-relaxed`}
        />

        <button
          type="submit"
          disabled={!canSave}
          className="cursor-pointer w-full rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors outline-none hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-neutral-300 sm:w-auto sm:self-end"
        >
          Save
        </button>
      </div>
    </form>
  );
}
