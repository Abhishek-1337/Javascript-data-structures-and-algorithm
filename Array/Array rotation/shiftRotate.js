var shiftRotate=function(nums,k){
	let temp=[...nums];
	let len=nums.length;
	for(let i=0;i<len;i++){
		nums[i]=temp[(i+k)%len];
	}
	console.log(nums);		
}
shiftRotate([1,2,3,4,5,6,7],2);
