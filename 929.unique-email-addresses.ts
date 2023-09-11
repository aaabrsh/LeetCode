/*
 * @lc app=leetcode id=929 lang=typescript
 *
 * [929] Unique Email Addresses
 */

// @lc code=start
function numUniqueEmails(emails: string[]): number {
  let count = 0;
  const uniqueList: { [key: string]: boolean } = {};

  emails.forEach((email) => {
    // divide the email into two at '@' sign
    let [local, domain] = email.split("@");

    // remove all text after '+' sign
    local = local.split("+")[0];

    // remove all '.'
    local = local.split(".").join("");

    email = [local, domain].join("@");

    if (!uniqueList[email]) {
      uniqueList[email] = true;
      count++;
    }
  });

  return count;
}
// @lc code=end
