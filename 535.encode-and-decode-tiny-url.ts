/*
 * @lc app=leetcode id=535 lang=typescript
 *
 * [535] Encode and Decode TinyURL
 */

// @lc code=start
/**
 * Encodes a URL to a shortened URL.
 */

const urls: { [key: string]: string } = {};

function encode(longUrl: string): string {
  let rand: string = Math.floor(Math.random() * 1000).toString();
  if (urls[rand]) {
    return encode(longUrl);
  } else {
    urls[rand] = longUrl;
    return rand;
  }
}

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
  return urls[shortUrl];
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
// @lc code=end
