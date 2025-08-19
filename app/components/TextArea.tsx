type Props = {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
};

export default function TextArea({ value, onChange, placeholder, readOnly }: Props) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      className={`w-full h-40 p-4 rounded-xl border-2 border-gray-200 
        focus:ring-2 focus:ring-orange-400 focus:border-orange-400 
        outline-none text-lg shadow-sm text-black
        ${readOnly ? "bg-gray-50 shadow-inner" : ""}`}
    />
  );
}
