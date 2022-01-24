(function findPivotIndex(nums){
	for(let i=0; i<nums.length; i++){
       let rightSum=0, leftSum=0;
       for(let i=0; i<nums.length; i++){
           rightSum+=nums[i];
       } 
       for(let i=0; i<nums.length; i++){
	        rightSum-=nums[i];
	        if(leftSum===rightSum)return i;       
	        leftSum+=nums[i];     
        }
    }
    return -1;
})(/*Put your input here(nums)*/);