import QuestionSection from "@/components/QuestionSection";

import { graphQuestions } from "@/data/graph";
import { binaryTreeQuestions } from "@/data/binaryTree";
import { binarySearchTreeQuestions } from "@/data/bst";
import { arrayQuestions } from "@/data/array";
import { stackqueueQuestions } from "@/data/stackqueue";
import { dpQuestions } from "@/data/dp";
import { linkedListQuestions } from "@/data/linkedList";
import { greedyQuestions } from "@/data/greedy";
import { thirdLVL } from "@/data/3rdLVL";

export default function DSATracker() {

  return (
    <div className="min-h-screen bg-black text-white p-8 space-y-8">
      <QuestionSection
        title="Array Questions"
        questions={arrayQuestions}
      />    

      <QuestionSection
        title="Binary Tree Questions"
        questions={binaryTreeQuestions}
      />

      <QuestionSection
        title="Binary Search Tree Questions"
        questions={binarySearchTreeQuestions}
      />

          <QuestionSection
            title="Graph Questions"
            questions={graphQuestions}
          />
          <QuestionSection
            title="Stack & Queue Questions"
            questions={stackqueueQuestions}
          />
          <QuestionSection
            title="Dynamic Programming Questions"
            questions={dpQuestions}
          />
          <QuestionSection
            title="Linked List Questions"
            questions={linkedListQuestions}
          />
          <QuestionSection
            title="Third Level Questions"
            questions={thirdLVL}
          />
          <QuestionSection
            title="Greedy Questions"
            questions={greedyQuestions}
          />
    </div>
  );
}