class Node{
	constructor(val){
	   this.val=val;
	   this.next=null;
	}
}
class Stack{
	constructor(){
		this.first=null;
		this.last=null;
		this.size=0;
	}
	push(val){
		var newNode=new Node(val);
		if(!this.first){
			this.first=newNode;
			this.last=newNode;
		}
		else{
			newNode.next=this.first;
		    this.first=newNode;
		}
		this.size++;
		return this.size;
	}

	pop(){
		if(!this.first){
			return null;
		}
		let delNode=this.first;
		this.first=delNode.next;
		delNode.next=null;
		this.size--;
		if(this.size===0){
			this.last=null;
		}
		return delNode;
	}
}

