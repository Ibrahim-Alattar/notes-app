export function SearchBox({ search, onChange }) {
  return (
    <div className="relative">
      <label htmlFor="note-search" className="sr-only">
        Search notes
      </label>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral-400"
      >
        <circle cx="9" cy="9" r="5.5" />
        <path d="m13.5 13.5 3 3" strokeLinecap="round" />
      </svg>
      <input
        id="note-search"
        type="search"
        value={search}
        onChange={onChange}
        placeholder="Search notes"
        className="w-full rounded-lg border border-neutral-200 bg-white py-2 pr-3 pl-9 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-900/10 sm:text-sm"
      />
    </div>
  );
}
