class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const len = nums.length;
        nums.sort((a, b) => a - b);
        let set = new Set();
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                for (let k = j + 1; k < len; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        set.add(JSON.stringify([nums[i], nums[j], nums[k]]));
                    }
                }
            }
        }
        return Array.from(set).map((item) => JSON.parse(item));
    }
}
