//Find largest sum contiguous array

function largestSum(){
	let sum=a[0];
	let max=a[0];

	for(let i=1; i<a.length; i++){
	 	sum+=arr[i];
	 	if(sum<arr[i]) sum=arr[i];
	 	if(max < sum) max=sum;
	}
	return max;
}