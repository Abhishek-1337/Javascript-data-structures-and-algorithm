var leftRotate=function(nums,k){
	let len=nums.length;
  reverse(nums,0,k-1);
  reverse(nums,k,len-1);
  reverse(nums,0,len-1);
  console.log(nums);
}

var reverse=function(nums,start,end){
	
	while(start<=end){
		let temp=nums[start];
		nums[start]=nums[end];
		nums[end]=temp;
		start++;
		end--;
	}
}

leftRotate([1,2,3,4,5,6,7],2);