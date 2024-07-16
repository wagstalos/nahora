export function TitleSection({ title, subtitle }) {
  return (
    <div className="mb-14 space-y-1 text-center max-w-3xl mx-auto">
      <span className="text-xl font-semibold text-green-500 ">{subtitle}</span>
      <h2 className="text-4xl desktop:text-6xl font-bold gradient__text-dark">
        {title}
      </h2>
    </div>
  );
}
