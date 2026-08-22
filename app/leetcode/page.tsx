"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";



export default function DSATracker() {
  const pendingQuestions = [

  
  {
    "leetcode": "Vertical Order Traversal of a Binary Tree",
    "gfg": "https://www.geeksforgeeks.org/dsa/vertical-order-traversal-of-binary-tree-using-map/"
  },
  {
    "leetcode": "Permutation Sequence",
    "gfg": "https://www.geeksforgeeks.org/find-the-k-th-permutation-sequence-of-first-n-natural-numbers/"
  },
  {
    "leetcode": "Binary Tree Zigzag Level Order Traversal",
    "gfg": "https://www.geeksforgeeks.org/dsa/zigzag-tree-traversal/"
  },
  {
    "leetcode": "Construct Binary Tree from Preorder and Inorder Traversal",
    "gfg": "https://www.geeksforgeeks.org/construct-tree-from-given-inorder-and-preorder-traversal/"
  },
  {
    "leetcode": "Maximum Number of Non-Overlapping Substrings",
    "gfg": "https://www.geeksforgeeks.org/maximize-count-of-non-overlapping-substrings-which-contains-all-occurrences-of-its-characters/"
  },
  {
    "leetcode": "Palindrome Partitioning",
    "gfg": "https://www.geeksforgeeks.org/given-a-string-print-all-possible-palindromic-partition/"
  },
  {
    "leetcode": "Clone Graph",
    "gfg": "https://www.geeksforgeeks.org/clone-an-undirected-graph/"
  },
  {
    "leetcode": "Copy List with Random Pointer",
    "gfg": "https://www.geeksforgeeks.org/a-linked-list-with-next-and-arbit-pointer/"
  },
  {
    "leetcode": "LRU Cache",
    "gfg": "https://www.geeksforgeeks.org/lru-cache-implementation/"
  },
  {
    "leetcode": "Maximum Width of Binary Tree",
    "gfg": "https://www.geeksforgeeks.org/maximum-width-of-a-binary-tree/"
  },
  {
    "leetcode": "Course Schedule",
    "gfg": "https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/"
  }

];


  const [showPending, setShowPending] = useState(false);
const [showRevision, setShowRevision] = useState(false);
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleComplete = (index: number) => {
    if (completed.includes(index)) {
      setCompleted(completed.filter((i) => i !== index));
    } else {
      setCompleted([...completed, index]);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="mb-8 rounded-xl border border-zinc-800 overflow-hidden">
  <button
    onClick={() => setShowPending(!showPending)}
    className="w-full flex items-center justify-between p-5 bg-zinc-900 hover:bg-zinc-800 transition"
  >
    <h2 className="text-2xl font-bold">
      Pending Questions ({pendingQuestions.length})
    </h2>

    {showPending ? <ChevronDown /> : <ChevronRight />}
  </button>

  {showPending && (
    <div className="space-y-3 p-5">
      {pendingQuestions.map((q, index) => (
        <a
          key={index}
          href={q.gfg}
          target="_blank"
          className="block rounded-lg bg-zinc-950 border border-zinc-800 p-4 hover:bg-zinc-900 transition"
        >
          {q.leetcode}
        </a>
      ))}



      <div className="mt-8 text-center text-zinc-400 italic space-y-2">
        <p>Mysterious take years to solve.</p>
        <p>And in life, only a few days we get.</p>

        <p className="pt-4">What is beyond those stars?</p>
        <p>To where the birds flee.</p>
      </div>
    </div>
  )}
</div>

    </div>
  );
}