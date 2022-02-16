class MaxBinaryHeap{
	constructor(){
		this.values = [45,39,33,18,27,12];
	}

	insert(val){
	    this.values.push(val);
	    if(this.values.length === 1){
	    	return;
	    }
	    else this.bubbleUp();
			 
	}

	bubbleUp(){
		let elementIndex = this.values.length - 1;
		let element = this.values[elementIndex];
		while(true && elementIndex > 0){
			let parentIndex = Math.floor((elementIndex - 1) / 2);
			let parent = this.values[parentIndex];
			if(element <= parent) break;	
			this.values[parentIndex] = element;
			this.values[elementIndex] = parent;
		    elementIndex = parentIndex;	
		}
	}

	extractMax(){
		const max = this.values[0];
		const end = this.values.pop();
		
		if(this.values.length > 0){
			this.values[0] = end;
		    this.sinkDown();
		}
		return max;
	}

	sinkDown(){
		let index = 0;
		let leftChild, rightChild;
		let length = this.values.length;
		const element = this.values[0];
		while(true){
			let leftChildIdx = 2*index+1;
		    let rightChildIdx = 2*index+2;
		    let swap = null;
		    if(leftChildIdx < length){
		    	leftChild = this.values[leftChildIdx];
		    	if(leftChild > element){
		    		swap = leftChildIdx;
		    	}
		    }

		    if(rightChildIdx < length){
		    	rightChild = this.values[rightChildIdx];
		    	if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
		    		swap = rightChildIdx;
		    	}
		    }

		    if(swap === null)break;
		    this.values[index] = this.values[swap];
		    this.values[swap] = element;
		    index=swap;
		}
	}
}