class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let l = 0;
        let r = nums.length-1;
        while(l<r){
            if(nums[l]+nums[r] === target){
                return [l, r];
            }
            if(nums[l]+nums[r] > target){
                --r;
            }else{
                ++l;
            }
        }
        return [-1,-1]
    }
}
