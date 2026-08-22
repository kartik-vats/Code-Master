"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface Question {
  name: string;
  url: string;
  algo: string;
  notes: string;
}

interface Props {
  title: string;
  questions: Question[];
}

export default function QuestionSection({
  title,
  questions,
}: Props) {
  const [showRevision, setShowRevision] = useState(false);

  const [completed, setCompleted] = useState<number[]>([]);
  const [expanded, setExpanded] = useState<number[]>([]);
  const [mode, setMode] = useState<Record<number, boolean>>({});

  const [notesOpen, setNotesOpen] = useState<number | null>(null);
  const [algoOpen, setAlgoOpen] = useState<number | null>(null);

  const [notesText, setNotesText] = useState("");
  const [algoText, setAlgoText] = useState("");

  const toggleComplete = (index: number) => {
    if (completed.includes(index))
      setCompleted(completed.filter((i) => i !== index));
    else setCompleted([...completed, index]);
  };

  const toggleExpand = (index: number) => {
    if (expanded.includes(index))
      setExpanded(expanded.filter((i) => i !== index));
    else setExpanded([...expanded, index]);
  };

  return (
    <>
      <div className="rounded-xl border border-zinc-800 overflow-hidden">
        <button
          onClick={() => setShowRevision(!showRevision)}
          className="w-full flex items-center justify-between p-5 bg-zinc-900 hover:bg-zinc-800"
        >
          <h2 className="text-2xl font-bold">
            {title} ({questions.length})
          </h2>

          {showRevision ? <ChevronDown /> : <ChevronRight />}
        </button>

        {showRevision && (
          <div className="space-y-4 p-5">
            {questions.map((q, index) => (
              <div
                key={index}
                className="rounded-xl border border-zinc-800 bg-zinc-950"
              >
                <div className="flex items-center gap-4 p-4">
                  <input
                    type="checkbox"
                    checked={completed.includes(index)}
                    onChange={() => toggleComplete(index)}
                    className="w-5 h-5"
                  />

                  <button onClick={() => toggleExpand(index)}>
                    {expanded.includes(index) ? (
                      <ChevronDown size={20} />
                    ) : (
                      <ChevronRight size={20} />
                    )}
                  </button>

                  <a
                    href={q.url}
                    target="_blank"
                    className="flex-1 font-semibold hover:text-blue-400"
                  >
                    {q.name}
                  </a>

                  <button
                    onClick={() => {
                      setNotesOpen(index);
                      setNotesText(q.notes);
                    }}
                    className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700"
                  >
                    Notes
                  </button>

                  <button
                    onClick={() =>
                      setMode({
                        ...mode,
                        [index]: !mode[index],
                      })
                    }
                    className="px-3 py-1 rounded bg-green-600 hover:bg-green-700"
                  >
                    {mode[index] ? "Solve" : "See"}
                  </button>
                </div>

                {expanded.includes(index) && (
                  <div className="border-t border-zinc-800 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold">Algorithm</h3>

                      <button
                        onClick={() => {
                          setAlgoOpen(index);
                          setAlgoText(q.algo);
                        }}
                        className="px-3 py-1 rounded bg-purple-600 hover:bg-purple-700"
                      >
                        Edit
                      </button>
                    </div>

                    <p className="whitespace-pre-wrap text-zinc-300">
                      {q.algo}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Notes Dialog */}
      {notesOpen !== null && (
        <div
          onClick={() => setNotesOpen(null)}
          className="fixed inset-0 bg-black/70 flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-900 w-[600px] rounded-xl p-6"
          >
            <h2 className="text-xl font-bold mb-4">Notes</h2>

            <textarea
              value={notesText}
              onChange={(e) => setNotesText(e.target.value)}
              className="w-full h-60 rounded bg-zinc-800 p-3 outline-none"
            />

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setNotesOpen(null)}
                className="px-4 py-2 rounded bg-zinc-700"
              >
                Cancel
              </button>

              <button
                onClick={() => setNotesOpen(null)}
                className="px-4 py-2 rounded bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Algo Dialog */}
      {algoOpen !== null && (
        <div
          onClick={() => setAlgoOpen(null)}
          className="fixed inset-0 bg-black/70 flex justify-center items-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-900 w-[600px] rounded-xl p-6"
          >
            <h2 className="text-xl font-bold mb-4">Algorithm</h2>

            <textarea
              value={algoText}
              onChange={(e) => setAlgoText(e.target.value)}
              className="w-full h-60 rounded bg-zinc-800 p-3 outline-none"
            />

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setAlgoOpen(null)}
                className="px-4 py-2 rounded bg-zinc-700"
              >
                Cancel
              </button>

              <button
                onClick={() => setAlgoOpen(null)}
                className="px-4 py-2 rounded bg-purple-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}