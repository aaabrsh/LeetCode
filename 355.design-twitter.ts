/*
 * @lc app=leetcode id=355 lang=typescript
 *
 * [355] Design Twitter
 */

// @lc code=start
class Twitter {
  tweets: [number, number][];
  following: { [key: number]: number[] };

  constructor() {
    this.tweets = [];
    this.following = {};
  }

  postTweet(userId: number, tweetId: number): void {
    this.tweets.push([tweetId, userId]);
  }

  getNewsFeed(userId: number): number[] {
    let latest: number[] = [];
    let count = 0;
    for (let i = this.tweets.length - 1; i >= 0; i--) {
      const post = this.tweets[i];

      if (
        post[1] === userId ||
        (this.following[userId] && this.following[userId].includes(post[1]))
      ) {
        count++;
        latest.push(post[0]);
        if (count >= 10) {
          return latest;
        }
      }
    }

    return latest;
  }

  follow(followerId: number, followeeId: number): void {
    if (this.following[followerId] && this.following[followerId].length > 0) {
      this.following[followerId].push(followeeId);
    } else {
      this.following[followerId] = [followeeId];
    }
  }

  unfollow(followerId: number, followeeId: number): void {
    if (!this.following[followerId]) return;

    for (let i = 0; i < this.following[followerId].length; i++) {
      const f = this.following[followerId][i];
      if (f === followeeId) {
        this.following[followerId].splice(i, 1);
      }
    }
    this.following[followerId];
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end
