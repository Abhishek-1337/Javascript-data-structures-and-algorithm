var postorderTraversal = function(root) {
    if(!root) return [];
    let current = root,
        stack = [],
        result = [];
    while(current || stack.length > 0){
        if(current!==null){
            stack.push(current);
            current = current.left;
        }
        else{
            let poppedNode = stack.pop();
            if(typeof(poppedNode.val) === "string"){
                result.push(parseInt(poppedNode.val));
                current = null;
            }
            else {
                
                poppedNode.val = poppedNode.val.toString();   //Obscuring the value.
                stack.push(poppedNode);   //push the popped value again to the stack for further storing in an obscure form so you can differentiate when again confronting this value.
                current = poppedNode.right;
                
            }
            
        }
    }
    return result;
};
