type Direction = "hi2en" | "en2hi";

type Props = {
  direction: Direction;
  setDirection: (d: Direction) => void;
};

const options: { key: Direction; label: string }[] = [
  { key: "hi2en", label: "Hindi → Hinglish" },
  { key: "en2hi", label: "Hinglish → Hindi" },
];

export default function ConverterToggle({ direction, setDirection }: Props) {
  return (
    <div className="flex justify-center mb-6 gap-3">
      {options.map(({ key, label }) => {
        const active = direction === key;
        return (
          <button
            key={key}
            onClick={() => setDirection(key)}
            className={`px-5 py-2 rounded-xl font-medium transition-all shadow-sm cursor-pointer ${
              active
                ? "bg-orange-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
