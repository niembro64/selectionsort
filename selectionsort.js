function selectionSort(arr){
    for (var i = 0; i <  arr.length; i++){
        // console.log(arr);
        // console.log('checking to find the ${i+1}th smallest value');
        var mindex = i; 
        for (var j = i; j < arr.length; j++){
            if (arr[j] < arr[mindex]){
                mindex = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[mindex];
        arr[mindex] = temp;
    }
    return  arr;
}

// let arr = [5, 4, 1, 6, 8, 14, 1, 3];
let arr1 = [15, 5, 4, 1, 6, 8, 14, 1, 3, -11];
let arr2 = [3, 2, 1];
let arr3 = [];

console.log(arr1);
console.log(selectionSort(arr1));
