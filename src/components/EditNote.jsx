import { useState } from "react";

export function EditNote({ title, body, onBack, onUpdate }) {
  const [titleDraft, setTitleDraft] = useState(title);
  const [bodyDraft, setBodyDraft] = useState(body);

  const canSave = titleDraft.trim() && bodyDraft.trim();

  function handleSubmit(e) {
    e.preventDefault();
    if (!canSave) return;
    onUpdate({ title: titleDraft.trim(), body: bodyDraft.trim() });
  }

  const field =
    "w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors outline-none focus:border-neutral-400 focus:bg-white focus:ring-2 focus:ring-neutral-900/10 sm:text-sm";

  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      <button
        type="button"
        onClick={onBack}
        className="cursor-pointer -ml-1 inline-flex w-fit items-center gap-1.5 rounded-lg px-1 py-1 text-sm text-neutral-500 transition-colors outline-none hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-900/20"
      >
        <span aria-hidden="true">←</span>
        Back
      </button>

      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-neutral-200 bg-white p-4 shadow-xs sm:p-5"
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="edit-title" className="sr-only">
            Note title
          </label>
          <input
            id="edit-title"
            type="text"
            value={titleDraft}
            onChange={(e) => setTitleDraft(e.target.value)}
            placeholder="Title"
            className={`${field} font-medium`}
          />

          <label htmlFor="edit-body" className="sr-only">
            Note body
          </label>
          <textarea
            id="edit-body"
            value={bodyDraft}
            onChange={(e) => setBodyDraft(e.target.value)}
            placeholder="Note"
            rows={6}
            className={`${field} min-h-36 resize-y leading-relaxed`}
          />

          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onBack}
              className="cursor-pointer w-full rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors outline-none hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-neutral-900/20 sm:w-auto"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!canSave}
              className="cursor-pointer w-full rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium whitespace-nowrap text-white transition-colors outline-none hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-neutral-300 sm:w-auto"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
