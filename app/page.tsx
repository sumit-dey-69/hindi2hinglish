"use client";

import { useState } from "react";
import Sanscript from "@indic-transliteration/sanscript";
import ToggleButton from "@/app/components/ToggleButton";
import TextArea from "@/app/components/TextArea";
import CopyButton from "@/app/components/CopyButton";

function stripDiacritics(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ṅ/g, "ng")
    .replace(/ñ/g, "ny")
    .replace(/ṇ/g, "n")
    .replace(/ṭ/g, "t")
    .replace(/ḍ/g, "d")
    .replace(/ś/g, "sh")
    .replace(/ṣ/g, "sh");
}

export default function Page() {
  const [input, setInput] = useState("");
  const [direction, setDirection] = useState<"hi2en" | "en2hi">("hi2en");

  const output =
    direction === "hi2en"
      ? stripDiacritics(Sanscript.t(input, "devanagari", "iast").toLowerCase())
      : Sanscript.t(input, "iast", "devanagari");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-6 md:p-8">
        <h1 className="text-3xl font-extrabold text-center text-orange-600 mb-6">
          Hindi ↔ Hinglish Converter
        </h1>

        <ToggleButton direction={direction} setDirection={setDirection} />

        <h2 className="text-xl font-semibold mb-3 text-gray-700">Input</h2>
        <TextArea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            direction === "hi2en"
              ? "यहाँ हिंदी लिखें..."
              : "Type Hinglish here (e.g. namaste)..."
          }
        />

        <h2 className="text-xl font-semibold mb-3 text-gray-700 mt-6">Output</h2>
        <div className="relative">
          <TextArea value={output} readOnly />
          <CopyButton text={output} />
        </div>
      </div>
    </div>
  );
}
