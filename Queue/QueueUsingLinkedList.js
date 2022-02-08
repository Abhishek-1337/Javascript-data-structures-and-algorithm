class Node{
	constructor(val){
		this.val=val;
		this.next=null;
	}
}
class Queue{
	constructor(){
		this.front=null;
		this.rear=null;
		this.size=0;
	}

	enqueue(val){
		var newNode = new Node(val);
		if(!this.front){
			this.front=newNode;
			this.rear=newNode;
		}
		else{
			this.rear.next=newNode;
			this.rear=newNode;
		}
		return ++this.size; 
	}

	dequeue(){
		if(!this.front)return null;
		let delNode=this.front;
		this.front=delNode.next;
		this.size--;
		if(this.size===0)this.rear=null;
		return delNode.val;
	}
}
