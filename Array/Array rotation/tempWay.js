function arrayRotate(nums,k){
	let temp=nums.splice(0,2);
	nums.push(...temp);
	console.log(nums);
}

arrayRotate([1,2,3,4,5,6,7],2)