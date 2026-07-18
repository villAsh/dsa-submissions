class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        //Sorting Method
        // const len = nums.length;
        // nums.sort((a, b) => a - b);
        // let set = new Set();
        // for (let i = 0; i < len; i++) {
        //     for (let j = i + 1; j < len; j++) {
        //         for (let k = j + 1; k < len; k++) {
        //             if (nums[i] + nums[j] + nums[k] === 0) {
        //                 set.add(JSON.stringify([nums[i], nums[j], nums[k]]));
        //             }
        //         }
        //     }
        // }
        // return Array.from(set).map((item) => JSON.parse(item));

        //2 Pointers Approach
        nums.sort((a, b) => a - b);
        const res = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }
            return res;
    }
}
