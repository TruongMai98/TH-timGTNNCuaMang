function minArr(arr) {
    if (arr.length == 0){
        let nofi = "ham rong";
        return nofi;
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}


// let arr1 = [3, 5, 1, 8, -3, 7, 8];
// let min = minArr(arr1);
// alert(min);



let arr2 = [];
let min = minArr(arr2);
alert(min);