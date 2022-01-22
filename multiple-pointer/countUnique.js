const uniqueVal = function(arr){
    let i = 0;
    let j = 1;

    /* while(j < arr.length){
        if(arr[j] === arr[i]){
            j++;
        }
        else{
            i++;
            arr[i] = arr[j];
        }
    } */
    for( j = 1; j < arr.length; j++){
        if(arr[j] !== arr[i]){
            i++;
            arr[i] = arr[j];
        }
    }

    return i+1;

}

const returnLen = uniqueVal([1,1,1,2,3,3,4,4,5,6]);
console.log(returnLen);