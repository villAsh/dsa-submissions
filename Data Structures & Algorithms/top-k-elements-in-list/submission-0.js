class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let res = {};
        let bucket = Array.from({length: nums.length + 1}, () => []);
        let result = [];

        for(const n of nums){
            res[n] = (res[n] || 0) + 1;
        }
        for(const n in res){
            bucket[res[n]].push(parseInt(n));
        }

        for(let i = bucket.length-1; i>0;i--){
            for(const n of bucket[i]){
                result.push(n)
                if(result.length === k){
                    return result;
                }
            }
        }
    }
}
