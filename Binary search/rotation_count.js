//How many times a array is rotated.
const countRotation=(nums)=>{
	let start=0, end=nums.length-1, mid=0;
	while(start<=end){
		mid=start+Math.floor((end-start)/2);

		//if first element is less than last element it means array isn't
		//rotated so we can just return the first element.
		if(nums[start]<=nums[end]){
			return start;
		}

		//if the element is less than the element in the next index
		//and also less than the element at its previous index.

		if(nums[mid]<nums[mid+1] && nums[mid]<nums[mid-1]){
			return mid;
		}

		//if mid element is greater than the start element, it means mid lies on the left section of the rotated array.
		else if(nums[mid]>nums[start]){
			start=mid+1;
		}

		//if mid element is less than the end element it means it lies in the right section of sorted array.
		else if(nums[mid]<nums[end]){
			end=mid-1;
		}
	}
	return -1;
}

console.log(countRotation([3,4,5,6,7,8,1,2]));