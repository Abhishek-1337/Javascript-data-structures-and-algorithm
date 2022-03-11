//Taylor series without optimization

( function taylorSeries(n, x){
	
    let p = 1,
    q = 1,
    r;
 function taylorRecurrence(n){
      if(n === 0)return 1;
      r = taylorRecurrence(n-1);
      p = p * x;
      q = q * n;
      return r + p/q;
 } 
 let returnVak = taylorRecurrence(n);
 console.log(returnVak);

})(10,2);
	 

//1 + x/1 + x^2/2! + x^3/3! + x^4/4!.....x^n/n!

//Optimized using Horner's rule
   //1.Iterative solution

( function taylorSeries(n, x){
	let s = 1;
	while(n > 0){
		s = 1 + x/n * s;
		n--;
	}
	console.log(s);
})(10, 2);




( function taylorSeries(n, x){
	
    let sum = 1;
 function taylorRecurrence(n){
     if(n === 0) return sum;
      sum = 1 + x/n * sum;
      return taylorRecurrence(n-1);
 }
	 //4--> sum = 1 + 2/4 *1
	    //3-> sum = 1 + 2/3 *(1+2/4)
	
 console.log(taylorRecurrence(n));
})(10, 2);