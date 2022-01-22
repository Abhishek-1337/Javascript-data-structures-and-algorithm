//is Square of elements of one array is present in another array with or without the sequence
function frequencyCounter(arr1, arr2){
    //first check if array are of same length or not
    if(arr1.length !== arr2.length){
        return false;
    }

    //Now we have to check for right conditions
    var frequency1 = {};
    /* 
    {
        1:1,
        2:2,
        4:1
    }
     */
    var frequency2 = {};
    /* {
        1:1
        4:2
        16:1
    } */
    for (var char of arr1){
        // if(frequency1[char]){
        //     frequency1[char] = frequency1[char] +1;
        // }
        // else{
        //     frequency1[char] = 1;
        // }

        frequency1[char] = (frequency1[char] ||  0) + 1;
    }
    
    for (var char of arr2){
        // if(frequency2[char]){
        //     frequency2[char] = frequency2[char] +1;
        // }
        // else{
        //     frequency2[char] = 1;
        // }
        frequency2[char] = (frequency2[char] ||  0) + 1;
        // frequency2[char] = frequency2[char]?frequency2[char]+1:1;

    }

    for(let key in frequency1){

        if(!(key**2 in frequency2)){
            return false;
        }

        if(frequency1[key] !== frequency2[key**2])
        {
            return false;
        }
    }

    return true;
    
}



if(frequencyCounter([1,2,1,2],[1,4,4,1]))
{
    console.log('true');
}
else{
    console.log('false');
}