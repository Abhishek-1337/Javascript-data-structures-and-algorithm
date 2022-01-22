var recurs=function(ind,recurArr,array,n){
	if(ind>=n){
		console.log(recurArr);
		return;
	}
	recurArr.push(array[ind]);
	recurs(ind+1,recurArr,array,n);
	recurArr.pop();
	recurs(ind+1,recurArr,array,n);
}

let array=[3,1,2];
let recurArr=[];
recurs(0,recurArr,array,array.length);