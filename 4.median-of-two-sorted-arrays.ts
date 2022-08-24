/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

    /*******************FIRST SOLUTION *******************/
    // let median : number;
    // let arrLength = nums1.length + nums2.length;
    // let arr: number[] = new Array<number>(arrLength);
    // let cur1: number = 0;
    // let cur2: number = 0;

    // for (let i = 0; i < arrLength; i++) {
    //     if (nums1[cur1] != undefined && nums2[cur2] == undefined) {
    //         arr[i] = nums1[cur1];
    //         cur1++;
    //     } else if (nums1[cur1]== undefined && nums2[cur2] != undefined) {
    //         arr[i] = nums2[cur2];
    //         cur2++;
    //     } else if (nums1[cur1] != undefined && nums2[cur2] != undefined) {
    //         if (nums2[cur2] >= nums1[cur1]) {
    //             arr[i] = nums1[cur1];
    //             cur1++;
    //         } else {
    //             arr[i] = nums2[cur2];
    //             cur2++;
    //         }
    //     }
    // }

    // if(arrLength % 2 > 0){//if odd
    //     median = arr[Math.floor(arrLength/2)];
    // }else{
    //     median = arr[arrLength/2 - 1] + arr[arrLength/2];
    //     median /= 2;
    // }

    // return median;

    /***************2ND SOLUTION ************/
    let larger = nums1.length >= nums2.length ? nums1 : nums2;
    let smaller = nums1.length < nums2.length ? nums1 : nums2

    for (let i = 0; i < larger.length; i++) {
        if (larger[i] > smaller[0]) {
            larger.splice(i, 0, smaller[0]);
            smaller.shift();
        }
    }
    if (smaller.length > 0) {
        larger = larger.concat(smaller);
    }

    return larger.length % 2 > 0 ? larger[Math.floor(larger.length / 2)] : (larger[larger.length / 2 - 1] + larger[larger.length / 2]) / 2;

}
// @lc code=end
