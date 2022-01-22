var recurs=function(ind,recurArr,array,s,sum,n){
	if(ind>=n){

		if(s===sum)
		{
			console.log(recurArr);
		}
		return;
	}
	recurArr.push(array[ind]);
	s+=array[ind];
	recurs(ind+1,recurArr,array,s,sum,n);
	s-=array[ind];
	recurArr.pop();
	recurs(ind+1,recurArr,array,s,sum,n);
	
}

let array=[3,1,2];
let sum=2;
let recurArr=[];
recurs(0,recurArr,array,0, sum,array.length);