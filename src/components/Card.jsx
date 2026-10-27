export function Card({ children, className = "" }) {
  return (
    <article
      className={`group h-full rounded-xl border border-neutral-200 bg-white p-4 shadow-xs transition-colors hover:border-neutral-300 sm:p-5 ${className}`}
    >
      {children}
    </article>
  );
}
