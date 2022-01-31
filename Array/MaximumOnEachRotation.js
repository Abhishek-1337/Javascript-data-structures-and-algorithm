(function maximumOnEachRotation(nums){

	let max=-999, index=0, maxSum=0;
	let temp=[...nums];
	let len=nums.length;
	for(let i=0; i<nums.length; i++){
		if(nums[i]>max){
			max=nums[i];
			index=i;
		}
	}
	let k=index+1;
	for(let i=0;i<len;i++){
		nums[i]=temp[(i+k)%len];
	}
	for(let i=0; i<len; i++){
		maxSum+=i*nums[i];
	}
	console.log(maxSum);
})([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]);