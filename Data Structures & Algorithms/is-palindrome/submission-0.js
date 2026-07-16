class Solution {
    isAlphanumeric(char){
        return (
            (char >= "A" && char <= "Z") || 
            (char >= "a" && char <= "z") || 
            (char >= "0" && char <= "9")
        )
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newStr = "";
        for(let c of s){
            if(this.isAlphanumeric(c)){
                newStr += c.toLowerCase();
            }
        }
        return newStr === newStr.split("").reverse("").join("")
    }
}
