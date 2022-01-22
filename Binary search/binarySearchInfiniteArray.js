var binarySearch=function(nums,target){
	let start=0, end=1, mid=0;
   
    while(target>nums[end]){

		temp=end+1;
		end=end+2*(end-start+1);
		start=temp;
    }
	
	while(start<=end ){
	
			mid=start+Math.floor((end-start)/2);

			if(nums[mid]===target){
				return mid;
			}
			else if(target>nums[mid]){
				start=mid+1;
			}
			else{
				end=mid-1;
			}
		
	}

 return -1;
}

console.log(binarySearch([1,2,4,6,8,9,11,13,15,18,19,20,21,24,26,27],20));
                         