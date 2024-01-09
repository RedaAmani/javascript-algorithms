import Comparator from '../../../utils/comparator/Comparator';

/**
 * Some twin pointer implementations.
 *
 * @param {*[]} sortedArray
 * @param {*} seekElement
 * @param {function(a, b)} [comparatorCallback]
 * @return {[number, number]}
 */

// Example of a twin pointer application in a sorted array where we are seeking the indices of two elements that sum to equal the target.
export function twinPointerSorted(sortedArray, seekElement, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);

  // These variables will be our pointers; since the array is sorted, we can set them to the left and rightmost elements.
  let left = 0;
  let right = sortedArray.length - 1

  // If our left and right pointers have met then we have iterated through the entire array.
  while (left < right) {
    
    /** 
     * If our sum is less than the target then we can increase said sum but by increasing the left value; 
     * since the array is sorted, this will always result in array[left] becoming a larger number.
    */
    if (comparator.lessThan(sortedArray[left] + sortedarray[right], seekElement)) {
        left++;

    // Same concept as before, only now we decrease our sum because it's greater than the target.    
    } else if (comparator.greaterThan(sortedArray[left] + sortedarray[right], seekElement)) {
        right--;
    
    // Assuming we have found our target, return left and right since they represent the indices that our correct sum is located at.
    } else {
        return [left, right]
    }
  }

  // Return [0, 0] (an impossible answer due to our while loop) if we haven't found any combination of numbers that works.
  return [0, 0];
}

/* An example of a twin pointer method on an unsorted array. In this problem, we aim to get the heighest possible area from two numbers,
    assuming that each number n is a rectangle of 1 width and n height. (Problem and solution taken from Leetcode #11)
*/

/**
 *
 * @param {*[]} unsortedArray
 * @param {function(a, b)} [comparatorCallback]
 * @return {number}
 */

export function twinPointerUnsorted(unsortedArray, comparatorCallback) {
    const comparator = new Comparator(comparatorCallback);
  
    // Again, we set our two pointers to the left and rightmost elements of the array.
    let left = 0;
    let right = unsortedArray.length - 1;

    // We initialize two area variables; one for our current area between our two pointers and one for the highest that we'll return.
    let area = 0;
    let mostArea = 0;

    // Functionally equivalent to the while conditional we set in the first example.
    while (left !== right) {

        // In this situation, since we don't have a specific "target" in mind we instead compare the two values at our two pointers to each other.
        if (height[left] < height[right]) {
            
            // Here we simply calculate our current area and whether we need to change our highest area by comparing it with the current.
            area = (Math.min(height[left], height[right]) * (right - left));
            mostArea = Math.max(area, mostArea);
            
            /**
             * Again, we move the left pointer forward or the right pointer backwards. You may be thinking that 
             */
            left++;
        } else {
            area = (Math.min(height[left], height[right]) * (right - left));
            mostArea = Math.max(area, mostArea);
            right--;
        }
    }

    return mostArea
  }