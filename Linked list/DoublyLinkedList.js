//Implementation of Doubly Linked List
class Node{
	constructor(val){
		this.val=val;
		this.prev=null;
		this.next=null;
	}
}

class DoublyLinkedList{
	constructor(){
		this.head=null;
		this.tail=null;
		this.length=0;
	}
	push(val){
		var newNode=new Node(val);
		if(!this.head){
			this.head=newNode;
			this.tail=this.head;
		}
		else{
			newNode.prev=this.tail;
			this.tail.next=newNode;
			this.tail=newNode;
		}
		this.length++;
		return this;
	}
	pop(){
		if(!this.head){
			return undefined;
		}
		var endNode=this.tail;
		if(this.length===1){
			this.head=null;
			this.tail=null;
		}
		else{
			this.tail=endNode.prev;
			endNode.prev=null;
			this.tail.next=null;
		}
		this.length--;
		return endNode;
	}

	unshift(val){
		var newNode=new Node(val);
		if(!this.head){
			this.head=newNode;
			this.tail=newNode;
		}
		else{
			newNode.next=this.head;
			this.head.prev=newNode;
			this.head=newNode;
		}
		return newNode;

	}

	shift(){
		var currentHead=this.head;
		if(!this.head){
			return undefined;
		}
		if(this.length===1){
			this.head=null;
			this.tail=null;
		}
		else{
			var newHead=currentHead.next;
			newHead.prev=null;
			this.head.next=null;
			this.head=newHead;		
		}
		this.length--;
		return currentHead;
	}

	get(index){
		if(index<0 || index>=this.length)return null;
		let currentNode=null;
		if(index<=Math.floor(this.length/2)){
			let count=0;
			currentNode=this.head;
			while(count!==index){
				currentNode=currentNode.next;
				count++;
			}
		}
		else{
			let count=this.length-1;
			currentNode=this.tail;
			while(count!==index){
				currentNode=currentNode.prev;
				count--;
			}
		}
		return currentNode;
	}

	set(index, value){
		let matchedNode=this.get(index);
		if(matchedNode !== null){
			matchedNode.val=value;
		}
		return !!matchedNode;
	}

	insert(index,val){
		var newNode=new Node(val);
		if(index<0 || index >this.length)return null;
		if(index===0)return !!this.unshift(val);
		if(index===this.length)return !!this.push(val);
		var beforeNode = this.get(index-1);
		var afterNode=beforeNode.next;
		beforeNode.next=newNode;
		newNode.prev=beforeNode;
		afterNode.prev=newNode;
		newNode.next=afterNode;
		this.length++;
		return true;
	}
    
    remove(index){
    	if(index<0 || index >=this.length)return null;
    	if(index===0)return !!this.shift();
    	if(index===this.length-1)return !!this.pop();
    	var delNode=this.get(index);
    	var prevNode=delNode.prev;
    	var nextNode=delNode.next;
    	prevNode.next=nextNode;
    	nextNode.prev=prevNode;
    	delNode.prev=null;
    	delNode.next=null;
    	this.length--;
    	return delNode;
    }
}

