class HeapSort{
	constructor(){
		this.values = [45,39,33,18,27,12];//27,39,33,18,12,45
	}

	sort(){
        let end = this.values.length-1;
		while(end > 0){
			let  max = this.values[0];
			let last = this.values[end];
			this.values[0] = last;
			this.sinkDown(end);
			this.values[end] = max;
			end--;
		}
		return this.values;
	}

	sinkDown(end){
		let index = 0;
		let element = this.values[0];
		let rightChild, leftChild;

		while(true){
			let leftChildIdx = 2*index+1;
			let rightChildIdx = 2*index+2;
			let swap = null;
			if(leftChildIdx <= end){
				leftChild = this.values[leftChildIdx];
				if(leftChild > element){
					swap = leftChildIdx;
				}
			}

			if(rightChildIdx <= end){
				rightChild = this.values[rightChildIdx];
				if((swap === null && rightChild > element) || 
					(swap !== null && rightChild > leftChild)){
					swap = rightChildIdx;
				}
			}

			if(swap === null)break;
			this.values[index] = this.values[swap];
			this.values[swap] = element;
			index = swap;
		}
		
	}
}