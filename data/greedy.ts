export const greedyQuestions = [
  {
    name: "Maximum Meetings in One Room",
    url: "https://www.geeksforgeeks.org/problems/maximum-meetings-in-one-room/1",
    algo: "Greedy + Sorting",
    notes: "Sort meetings by end time and always pick the earliest finishing meeting.",
  },
  {
    name: "Minimum Platforms",
    url: "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1",
    algo: "Sorting + Two Pointers",
    notes: "Sort arrival and departure arrays independently and sweep with two pointers.",
  },
  {
    name: "Valid Parenthesis String",
    url: "https://leetcode.com/problems/valid-parenthesis-string/",
    algo: "Greedy",
    notes: "Maintain the minimum and maximum possible open brackets using low/high counters.",
  },
  {
    name: "Jump Game II",
    url: "https://leetcode.com/problems/jump-game-ii/",
    algo: "Greedy",
    notes: "Track current range and farthest reachable index; increase jump when range ends.",
  },
];