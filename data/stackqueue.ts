export const stackqueueQuestions = [
{
  name: "Next Greater Element I",
  url: "https://leetcode.com/problems/next-greater-element-i/description/",
  algo: "Monotonic Stack",
  notes: "Use a decreasing stack to preprocess the next greater element for nums2, then answer queries using a hashmap.",
},
{
  name: "Immediate Smaller Element",
  url: "https://www.geeksforgeeks.org/problems/immediate-smaller-element1142/1",
  algo: "Array Traversal",
  notes: "For each element, replace it with the next element if it is smaller; otherwise replace it with -1.",
},
{
  name: "LRU Cache",
  url: "https://leetcode.com/problems/lru-cache/description/",
  algo: "HashMap + Doubly Linked List",
  notes: "Maintain recently used order using a doubly linked list and O(1) lookup using a hashmap.",
},
{
  name: "LFU Cache",
  url: "https://leetcode.com/problems/lfu-cache/description/",
  algo: "HashMap + Frequency Lists",
  notes: "Maintain frequency buckets and LRU order within each bucket for O(1) get/put.",
},
{
  name: "Min Stack",
  url: "https://leetcode.com/problems/min-stack/description/",
  algo: "Stack",
  notes: "Store the minimum value along with each element or use an auxiliary min stack.",
},
{
  name: "Largest Rectangle in Histogram",
  url: "https://leetcode.com/problems/largest-rectangle-in-histogram/description/",
  algo: "Monotonic Stack",
  notes: "Find previous and next smaller elements using a stack to compute the maximum rectangle area.",
},
{
  name: "The Celebrity Problem",
  url: "https://www.geeksforgeeks.org/problems/the-celebrity-problem/1",
  algo: "Two Pointers / Elimination",
  notes: "Eliminate non-celebrities in one pass, then verify the remaining candidate.",
},
{
  name: "Online Stock Span",
  url: "https://leetcode.com/problems/online-stock-span/description/",
  algo: "Monotonic Stack",
  notes: "Maintain a decreasing stack of {price, span} pairs to compute each span in amortized O(1).",
},
{
  name: "Sliding Window Maximum",
  url: "https://leetcode.com/problems/sliding-window-maximum/description/",
  algo: "Monotonic Deque",
  notes: "Maintain indices in decreasing order inside a deque to get the maximum for each window in O(n).",
},
{
  name: "Maximum of Minimum for Every Window Size",
  url: "https://www.geeksforgeeks.org/problems/maximum-of-minimum-for-every-window-size3453/1",
  algo: "Monotonic Stack",
  notes: "Find previous and next smaller elements to determine the largest window where each element is minimum, then fill answers.",
},
{
  name: "Accounts Merge",
  url: "https://leetcode.com/problems/accounts-merge/description/",
  algo: "Disjoint Set Union (Union Find)",
  notes: "Union accounts sharing common emails, then group emails by parent and sort the result.",
},
];
