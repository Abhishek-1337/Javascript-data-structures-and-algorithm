var reverseKGroup = function(head, k) {
    let pointer = head,
        currNode = head,
        nextNode = null,
        prevNode = null,
        count = 0;
    
    if(!pointer)return null; 
    
    while(count !== k-1 && pointer.next){
        count++;
        pointer = pointer.next;
    }
    if(count < k-1){
        return head;
    }
    
    let nextGrp = pointer.next;
    pointer.next = null;
    
    while(currNode){
        nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    
    head.next = reverseKGroup(nextGrp, k);
    return prevNode;
};