export const dpQuestions = [
  {
    name: "Coin Change",
    url: "https://leetcode.com/problems/coin-change/",
    algo: "Dynamic Programming",
    notes: "Classic unbounded knapsack. dp[i] = min(dp[i], dp[i - coin] + 1).",
  },
];