/*
 * @lc app=leetcode id=10 lang=typescript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
    if (p == ".*") {
        return true;
    }


    if (p.length == 0 && s.length == 0) {
        if (p[0] == s[0]) {
            return true;
        }
        return false;
    } //else if(s.length == 0 && p.length==0) {
    //     return true
    // }
    else {
        if (p[1] === "*") {
            let temp = p[0];
            if (p[0] === "." || p[0] === s[0]) {
                let first_S = s[0];
                let lastIndex1 = p.lastIndexOf(first_S + "*");
                let lastIndex2 = p.lastIndexOf(first_S);
                let largerIndex = lastIndex1 > lastIndex2 ? lastIndex1 : lastIndex2
                let hasConstantStars = true
                for (let i = 0; i < s.length; i + 2) {
                    if (s[i + 1] != "*") {
                        hasConstantStars = false;
                        break;
                    }
                }
                if (p[0] != ".") {
                    s = removeConsequetiveChars(s);
                }
                if (largerIndex != -1 && s.indexOf(first_S) == -1 && hasConstantStars && p[0]) {
                    p = p.substring(largerIndex);
                }
            }
            p = p.substring(1);//remove the letter
            p = p.substring(1);//remove the *
            if (p[0] == temp && p[0] != ".") {
                p = removeConsequetiveChars(p)
            }
            return isMatch(s, p);
        } else if (p[0] === "." || p[0] === s[0]) {
            if(s.length == 0){
                return false
            }
            s = s.substring(1);
            p = p.substring(1);

            return isMatch(s, p);
        }
        return false
    }
};

function removeConsequetiveChars(s: string): string {
    if (s[0] === s[1]) {
        return removeConsequetiveChars(s.substring(1));
    }
    else {
        return s.substring(1);
    }
}
// @lc code=end

