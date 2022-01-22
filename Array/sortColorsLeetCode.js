//sort an array of 0s,1s and 2s.

function sortArr(nums){
	 let i=0, j=N-1,k=0,l=N-1;
        while(i<=j){
            if(arr[i]===0){
                i++;
            }
            else{
                if(arr[j]!==0){
                 j--;
                }
                else{
                  [arr[i],arr[j]]=[arr[j],arr[i]];
                }
            }
        }
        while(k<=l){
            if(arr[k]!==2){
                k++;
            }
            else{
                if(arr[l]===2){
                 l--;
                }
                else{
                  [arr[k],arr[l]]=[arr[l],arr[k]];
                }
            }
        }
        return arr;
}