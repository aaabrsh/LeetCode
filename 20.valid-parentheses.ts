/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    let stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        let cur: string = s[i];
        if (stack.length == 0) {
            stack.push(cur);
            continue;
        }
        let temp;

        switch (cur) {
            case '{':
            case '(':
            case '[':
                stack.push(cur);
                break;
            case '}':
                temp = stack.pop();
                if (temp != '{')
                    return false;
                break;
            case ')':
                temp = stack.pop();
                if (temp != '(')
                    return false;
                break;
            case ']':
                temp = stack.pop();
                if (temp != '[')
                    return false;
                break;
        }

    }
    return stack.length == 0 ? true : false;
};
// @lc code=end

