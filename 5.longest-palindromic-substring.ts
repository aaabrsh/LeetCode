/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
    let palindrome = "";
    for (let i = 0; i < s.length; i++) {
        //for every letter in the string, loop through the rest of the string starting from current character at 'i' to find a match
        for (let j = i + 1; j < s.length; j++) {
            //when a match is found check is substring between the two matching characters is a palindrome
            if (s[i] == s[j]) {
                //if potential palindrome is longer than the palindrome we have in the 'palindrome' variable proceed to make more checks to see if it is a palindrome
                if ((j - i) + 1 > palindrome.length) {
                    let length = Math.ceil((j - i) / 2);
                    if(length % 2 == 0){
                        length += 1;
                    }
                    let success = true;
                    //loop only halfway through the potential palindrome
                    for (let k = i; k < length + i; k++) {
                        //if a character at an index doesn't match with the character at the corresponding mirror index, then it is not a palindrome
                        if (s[k] != s[(j - k) + i]) {
                            success = false;
                            break;
                        }
                    }
                    //if the potential palindrome passes its validation, take it as the answer
                    if(success){
                        palindrome = s.substring(i, j+1);
                    }
                    
                }
            }
        }
    }
    if(palindrome.length == 0){
        palindrome = s[0]
    }
    return palindrome;
};
// @lc code=end

