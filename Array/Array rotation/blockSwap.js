//Block Swap array rotation

(function swapArr(arr,d){
  //Suppose the array is [1,2,3,4,5], and we have to rotate it by 2
  //So the array is arr=[1,2,3,4,5/ ,d=2 and n(i.e array length)

  //First lets check the edge cases.
  //if we have to rotate array number of times same as the array length or 0 rotations
  let n=arr.length;
  if(d===0 || d===n-1){
  	console.log(arr);
  	return;
  }
  //if number of rotations is larget than the array length
  if(d>n){
  	d=d%n;
  }
  let A=d;
  let B=n-d;
  while(A!==B){

  	//if A is less than B, divide B into Bleft and Bright
  	if(A<B){
  		/*if A side is smaller than B then make the B of the same size as A(d+B-A) where d+B===Full
  		 length of the sub array and we are subtracting the size of A to maintain their size equal
  		*/
  		swap(arr,d-A,d+B-A,A);
  		//we have rotated the first elements by swapping hence reducing the size of the B
  		B=B-A;
  	}
  	else if(A>B){
  		/*if A side is greater than the B we reduce the size of A from left to make its size same as B*/
  		swap(arr, d-A, A, B);
  		//then we reduce the size of A 
  		A=A-B;
  	}
  }
  swap(arr,d-A,d,A);
  console.log(arr);
})([1,2,3,4,5,6,7], 2);

function swap(arr,start,end,k){
	for(let i=0;i<k;i++){
		let temp=arr[end+i];
		arr[end+i]=arr[start+i];
		arr[start+i]=temp;
	}
}