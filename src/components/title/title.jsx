export function CustomTitle({ content, pos = 'LEFT' }) {
  return (
    <h1
      className={
        pos === "LEFT"
          ? `text-lg font-Geist md:text-4xl border-l-4 border-black pl-4 font-semibold`
          : `text-lg font-Geist md:text-4xl border-r-4 border-black pr-4 font-semibold text-end`
      }
    >
      {content}
    </h1>
  );
}
