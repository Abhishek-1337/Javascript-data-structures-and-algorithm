function anagYzer(str1, str2){
    //first we have to check whether their length is equal or not
    if(str1.length !== str2.length){
        return false;
    }

    var frequency1 = {};
/* {
    h:1,
    e:2,
    l:1
} */


    var frequency2 = {};
/* {
    h:1,
    e:1,
    l:1
} */
    //Check if each character from string 1 is in string 2
    for (var char of str1)
    {
        frequency1[char] = (frequency1[char] || 0 ) + 1;
    } 
    for (var char of str2)
    {
        frequency2[char] = (frequency2[char] || 0 ) + 1;
    } 

    //if any character is repeated check their frequency is it same
    for(var key in frequency1){
        if(!(key in frequency2)){
            return false;
        }
        if(frequency1[key] !== frequency2[key]){
            return false;
        
        }
    }

    return true;

}


if(anagYzer('awesome', 'ewsakme'))
{
    console.log('true');
}
else{
    console.log('false');
}