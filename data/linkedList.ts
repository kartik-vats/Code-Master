export const linkedListQuestions = [
  {
    name: "Remove Nth Node From End of List",
    url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    algo: "Two Pointers",
    notes: "Move fast pointer n steps ahead, then move both until fast reaches the end.",
  },
  {
    name: "Merge Two Sorted Lists",
    url: "https://leetcode.com/problems/merge-two-sorted-lists/",
    algo: "Two Pointers",
    notes: "Merge using a dummy node by always choosing the smaller value.",
  },
  {
    name: "Reverse Linked List",
    url: "https://leetcode.com/problems/reverse-linked-list/",
    algo: "Iterative / Recursion",
    notes: "Reverse pointers using prev, curr and next pointers.",
  },
  {
    name: "Add Two Numbers",
    url: "https://leetcode.com/problems/add-two-numbers/",
    algo: "Simulation",
    notes: "Traverse both lists together while maintaining carry.",
  },
  {
    name: "Linked List Cycle II",
    url: "https://leetcode.com/problems/linked-list-cycle-ii/",
    algo: "Floyd's Cycle Detection",
    notes: "After meeting point, move one pointer to head; both meet at cycle start.",
  },
  {
    name: "Palindrome Linked List",
    url: "https://leetcode.com/problems/palindrome-linked-list/",
    algo: "Fast & Slow Pointer",
    notes: "Find middle, reverse second half, then compare both halves.",
  },
  {
    name: "Reverse Nodes in k-Group",
    url: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    algo: "Linked List Manipulation",
    notes: "Reverse every group of k nodes while keeping remaining nodes intact.",
  },
  {
    name: "Intersection of Two Linked Lists",
    url: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    algo: "Two Pointers",
    notes: "Switch heads when reaching null; pointers meet at intersection.",
  },
  {
    name: "Copy List with Random Pointer",
    url: "https://leetcode.com/problems/copy-list-with-random-pointer/",
    algo: "HashMap / Interweaving",
    notes: "Interleave copied nodes to assign random pointers in O(1) extra space.",
  },
  {
    name: "Rotate List",
    url: "https://leetcode.com/problems/rotate-list/",
    algo: "Linked List",
    notes: "Make the list circular, find new tail, then break the circle.",
  },
];