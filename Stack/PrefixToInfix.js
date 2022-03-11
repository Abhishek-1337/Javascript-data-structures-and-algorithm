class PrefixToInfix{

	constructor(){
		this.stack = [];
		this.resultString = "";

	}
	
	convert(string){
		for(let i = string.length-1; i >= 0; i--){
		   if(this.checkOperands(string[i]) === -1){
		   		this.stack.push(string[i]);
		   }
		   else{
		   	let a = this.stack.pop();
		   	let b = this.stack.pop();
		   	this.resultString = a + string[i] + b;
		   	this.stack.push(this.resultString);
		   }
		}
 		console.log(this.resultString)
		return this.resultString;
	}

	checkOperands(item){
		if(item === '+'){
			return 1;
		}
		else if(item === '-'){
			return 2;
		}
		else if(item === '/'){
			return 3;
		}
		else if(item === '*'){
			return 4;
		}

		return -1;
	}
}
