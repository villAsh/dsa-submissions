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
            if(Math.abs(nums[l])+Math.abs(nums[r]) === Math.abs(target)){
                return [l, r];
            }
            if(Math.abs(nums[l])+Math.abs(nums[r]) > Math.abs(target)){
                --r;
            }else{
                ++l;
            }
        }
        return [-1,-1]
    }
}
