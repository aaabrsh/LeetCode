/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    //*****************FIRST ACCEPTED ANSWER *****************/


    // let arr : number[] = [];
    // let temp1 = l1, temp2 = l2;
    // var carry = 0;
    // while(temp1 != null || temp2 != null){

    //     arr.push(0);
    //     arr[arr.length-1] += (temp1==null) ? 0 : temp1.val;
    //     arr[arr.length-1] += (temp2==null) ? 0 : temp2.val;

    //     temp1 = temp1 != null ? temp1.next : null;
    //     temp2 = temp2 != null ? temp2.next : null;
    // }

    // let newList = new ListNode();
    // if(arr[0] >= 10){
    //     carry = Math.floor(arr[0]/10);
    //     arr[0] %= 10;
    // }
    // newList.val = arr[0];

    // let result = newList;


    // for (let i = 0; i < arr.length; i++) {

    //     if(i+1 >= arr.length){
    //         break;
    //     }
        
    //     var temp : number = arr[i+1];
    //     var c : number = carry;
    //     carry = 0;
    //     if(temp >= 10){
    //         carry = Math.floor(temp/10);
    //         temp = temp % 10;
    //     }
        
    //     let newNode = new ListNode(temp+c);
    //     if(newNode.val >= 10){
    //         carry = newNode.val / 10;
    //         newNode.val = newNode.val % 10;
    //     }
    //     newList.next = newNode;
    //     newList = newNode;
    // }
    // if(carry > 0){
    //     newList.next = new ListNode(carry)
    // }
    // return result;


    /*******************PROPER ANSWER ACCORDING TO LEETCODE ***********/

    let result : ListNode = new ListNode();
    let current : ListNode = result;
    let carry : number = 0;

    while (l1 != null || l2 != null || carry != 0){
        
        let num1 : number = l1 ? l1.val : 0;
        let num2 : number = l2 ? l2.val : 0;

        current.val = num1 + num2 + carry;
        carry = 0;

        if(current.val > 9){
            carry = Math.floor(current.val/10);
            current.val = current.val % 10;
        }

        
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        
        if( l1 || l2 || carry != 0){
            current.next = new ListNode();
            current =  current.next;
        }
    }

    return result;
};
// @lc code=end