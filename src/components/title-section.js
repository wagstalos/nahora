export function TitleSection({ title, subtitle }) {
  return (
    <div className="mb-14 space-y-1">
      <span className="text-xl font-semibold text-white text-opacity-70">
        {subtitle}
      </span>
      <h2 className="text-5xl font-semibold">{title}</h2>
    </div>
  );
}
