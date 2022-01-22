function sumZero(arr){
    let i = 0;
    let j = arr.length - 1;
    while(i < j){
        if(arr[i]+arr[j] === 0){
            return [arr[i],arr[j]];
        }
        else if(arr[i] + arr[j] < 0){
            i++;
        }
        else if(arr[i] + arr[j] > 0){
            j--;
        }
    }
}

const arr2 = sumZero([-3,-2,0,1,2,4,5]);
console.log(arr2);