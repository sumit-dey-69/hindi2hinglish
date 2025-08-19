type Props = {
  text: string;
};

export default function CopyButton({ text }: Props) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(text)}
      className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1.5 text-sm rounded-lg shadow-md hover:bg-orange-600 transition-all cursor-pointer"
    >
      Copy
    </button>
  );
}
