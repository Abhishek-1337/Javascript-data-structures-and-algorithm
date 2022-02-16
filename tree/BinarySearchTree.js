class Node{
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree{
	constructor(){
		this.root = null;
	}

	insert(value){
	   var newNode = new Node(value);
	   var currentNode = this.root;
	   if(!this.root){
	        this.root = newNode;
	        return this;
	   }
	   else{
	     while(1){
	     	if(value === currentNode.value) return undefined; //For duplicate node insertion(ignore them)
	        if(value > currentNode.value){
	        	if(currentNode.right === null){
	        		currentNode.right = newNode;
	        		return this;
	        	}
	        	currentNode = currentNode.right;
	        }
	        else if(value < currentNode.value){
	        	if(currentNode.left === null){
	        		currentNode.left = newNode;
	        		return this;
	        	}
	        	currentNode = currentNode.left;
	        }
	     }
	   } 
	}

	find(value){
		var currentNode = this.root;
		var found = false;
		if(!this.root)return false;
	     while(true && !found){
	         if(value ===  currentNode.value) found = true;
	         else if(value > currentNode.value) currentNode = currentNode.right;
	         else if(value < currentNode.value) currentNode = currentNode.left;
	     }
	     if(!found)return false;
	     return currentNode;
	}

	bfs(){
		var currNode = this.root,
		    queue = [],
		    visited = [];
		queue.push(currNode);
		while(queue.length){
			currNode = queue.shift();
			visited.push(currNode.value);
			if(currNode.left) queue.push(currNode.left);
			if(currNode.right) queue.push(currNode.right);
		}
	     return visited;
	}

	preOrder(){
		var currNode = this.root,
		    visited = [];
		function traverseHelper(currNode){
			visited.push(currNode.value);
			if(currNode.left) traverseHelper(currNode.left);
			if(currNode.right) traverseHelper(currNode.right);
		}
		traverseHelper(currNode);
		return visited;
	}

	postOrder(){
		var currNode = this.root,
		    visited = [];
		function traverseHelper(currNode){
			if(currNode.left) traverseHelper(currNode.left);
			if(currNode.right) traverseHelper(currNode.right);
			visited.push(currNode.value);
		}
		traverseHelper(currNode);
		return visited;
	}
	inOrder(){
		var currNode = this.root,
		    visited = [];
		function traverseHelper(currNode){
			currNode.left && traverseHelper(currNode.left);
			visited.push(currNode.value);
			currNode.right && traverseHelper(currNode.right);
		}
		traverseHelper(currNode);
		return visited;
	}
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.insert(15);
tree.insert(12);
tree.insert(20);
tree.insert(18);
tree.insert(23);
tree.insert(4);
tree.insert(3);
tree.insert(8);

	