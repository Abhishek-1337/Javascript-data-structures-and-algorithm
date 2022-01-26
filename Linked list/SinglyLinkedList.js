//Implementation of Linked List
class Node{
	constructor(val){
		this.val=val;
		this.next=null;
	}
}

class SinglyLinkedList{
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
			this.tail.next=newNode;
			this.tail=newNode;
		}
		this.length++;
		return this;
	}
	pop(){
		var current=this.head;
		var newTail=current;
		if(!current)return undefined;
		while(current.next){
			newTail=current;
			current=current.next;
		}
		this.tail=newTail;
		this.tail.next=null;
		this.length--;
		if(this.length===0){
			this.head=null;
			this.tail=null; 
		}
		return current;
	}

	unshift(val){
		var newNode=new Node(val);
		newNode.next=this.head;
		this.head=newNode;
		if(this.length===0){
			this.tail=newNode;
		}
		this.length++;
		return this;
	}

	shift(){
		if(!this.head)return undefined;
		var currentHead=this.head;
		this.head=currentHead.next;
		this.length--;
		if(this.length===0){
			this.tail=null;
		}
		return currentHead;
	}

	get(index){
		if(index<0 || index>=this.length)return undefined;
		var currentNode=this.head;
		var count=0;
		while(count!==index){
			currentNode=currentNode.next;
			count++;
		}
		return currentNode;
	}

	set(index, value){
		var currentNode=this.get(index);
		if(currentNode===undefined)return undefined;
		currentNode.val=value;
		return currentNode;
	}

	insert(index, value){
		if(index<0 || index<this.length)return false;
		if(index===0)return !!this.unshift(value);
		if(index===this.length)return !!this.push(value);
		var newNode=new Node(value);
		var prevNode=this.get(index-1);
		newNode.next=prevNode.next;
		prevNode.next=newNode;
		this.length++;
		return this;
	}

	remove(index){
		if(index<0 || index >= this.length)return false;
		if(index===0)return this.shift();
		if(index===this.length-1)return this.pop();
		var prevNode=this.get(index-1);
		var currNode=prevNode.next;
		prevNode.next=currNode.next;
		this.length--;
		return currNode;
	}

	print(){
		var array=[];
		var pointer=this.head;
		while(pointer){
			array.push(pointer.val);
			pointer=pointer.next;
		}
		return array;
	}

	reverse(){
		var currentNode=this.head;
		this.head=this.tail;
		this.tail=currentNode;
		var prev=null;
		var next=null;
		while(currentNode){
			next=currentNode.next;
			currentNode.next=prev;
			prev=currentNode;
			currentNode=next;
		}
		return this;
	}
}

var firstNode=new SinglyLinkedList();
firstNode.push(1);
firstNode.push(2);
firstNode.push(3);