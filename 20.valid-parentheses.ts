/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    let stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length == 0) {
            stack.push(s[i]);
            continue;
        }

        switch (s[i]) {
            case '{':
            case '(':
            case '[':
                stack.push(s[i]);
                break;
            case '}':
                if (stack.pop() != '{')
                    return false;
                break;
            case ')':
                if (stack.pop() != '(')
                    return false;
                break;
            case ']':
                if (stack.pop() != '[')
                    return false;
                break;
        }

    }
    return stack.length == 0 ? true : false;
};
// @lc code=end

