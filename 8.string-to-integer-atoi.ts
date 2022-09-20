/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {

    let number: number = 0;
    let { isNegative, str } = checkFirstChar(s);

    for (let i = 0; i < str.length; i++) {
        let curDigit = checkInt(str[i]);
        if (curDigit === -1) {
            break;
        }
        number *= 10;
        number += curDigit;
    }

    number = isNegative ? number * -1 : number;

    if (number > 0x7FFFFFFF) {//if number exceeds 32 bit integer positive limit
        return 0x7FFFFFFF
    } else if (number < -0x7FFFFFFF) {//if number exceeds 32 bit integer negative limit
        return -0x7FFFFFFF - 1
    } else {
        return number
    }
};

function checkInt(s: string): number {
    switch (s) {
        case "0":
            return 0;
        case "1":
            return 1;
        case "2":
            return 2;
        case "3":
            return 3;
        case "4":
            return 4;
        case "5":
            return 5;
        case "6":
            return 6;
        case "7":
            return 7;
        case "8":
            return 8;
        case "9":
            return 9;
        default:
            return -1;
    }
}

function checkFirstChar(s: string): { isNegative: boolean, str: string } {
    if (s[0] === '-') {
        return { isNegative: true, str: s.substring(1) }
    } else if (s[0] === '+') {
        return { isNegative: false, str: s.substring(1) }
    } else if (s[0] === " ") {//if first character is a space, then check the next one
        return checkFirstChar(s.substring(1))
    } else {
        return { isNegative: false, str: s }
    }
}
// @lc code=end

