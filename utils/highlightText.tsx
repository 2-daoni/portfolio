export function highlightText(text: string, keywords: string[]) {
  if (!keywords.length) return text;

  const regex = new RegExp(`(${keywords.join("|")})`, "g");

  return text.split(regex).map((part, index) =>
    keywords.includes(part) ? (
      <strong key={index} className="text-purple-500 font-semibold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}
