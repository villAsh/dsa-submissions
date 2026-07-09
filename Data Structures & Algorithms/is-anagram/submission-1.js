class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const map = {};
        const len = s.length
        for(let i = 0;i<len;i++){
            if(!map[s[i]]){
                map[s[i]] = 1;
            }else{
                ++map[s[i]]
            }
            if(!map[t[i]]){
                map[t[i]] = 1
            }else{
                ++map[t[i]];
            }
        }
        for(const count of Object.values(map)){
            if (count === 1) return false;
        }
        return true;
    }
}
