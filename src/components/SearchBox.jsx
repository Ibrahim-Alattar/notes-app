export function SearchBox({ search, onChange }) {
  return (
    <input
      type="search"
      value={search}
      onChange={onChange}
      placeholder="Search notes..."
      aria-label="Search notes"
    />
  );
}
