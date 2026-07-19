class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let count = 0;
        let res = 0;
        while (l < r) {
            let localCount = 0;
            for (let i = l; i < r; i++) {
                if (heights[i] <= heights[l] && heights[i] <= heights[r]) {
                    localCount++;
                }
            }
            if (localCount > count) {
                count = localCount;
                res = Math.min(heights[l], heights[r]);
            }
            l++;
        }
        return res * res;
    }
}
