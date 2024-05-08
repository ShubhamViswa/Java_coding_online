function selectionsort(){
    let n = arr.length;
    /**
     * We have to unsort region initially from index 0 
     * so i denotes the start of unsorted region 
     * 
     */
    for(let i = 0; i < n-1; i++){
        let min_idx = findMinElement(arr, i);
        if (min_idx != i) {
            //min element and the first element of unsorted region are diff, then swap 
            let temp = arr[i]; 
            arr[i] = arr[min_idx];
            arr[min_idx] = temp;
        }

    }
}

/**
 * This function finds out the index of the minimum element in the array from index       [ i , n-1 ]
 */

function findMinElement(arr, i){
    let min_ind_el = i; // initially the first element is min 
    for(let j = i+1; j < arr.length; j++){ 
        if(arr[j] < arr[min_ind_el]) {
            // if the curr element is smaller than the assumed min element, we update the assumed minimum element  
            min_ind_el = j;
        }
    }
    return min_ind_el;
}

const arr = [64, 25, 12, 22, 11, -5];
selectionsort(arr);
console.log(arr);

