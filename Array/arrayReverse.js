var arrayReverse=function(nums){
	let start=0,end=nums.length-1;
	while(start<=end){
		let temp=nums[start];
		nums[start]=nums[end];
		nums[end]=temp;
		start++;
		end--;
	}
}

arrayReverse([1,2,3,4,5,6,7]);