function maximumDepth(root) {

	if(root === null) return 0;
	return Math.max(maximumDepth(root.left),maximumDepth(root.right)) + 1;
}//pass tree's root from here

(function treeDiameter(root) {
 	
 	if(root === null) return 0;
 	let leftHeight = maximumDepth(root.left);
 	let rightHeight = maximumDepth(root.right);

 	let currentHeight = leftHeight + rightHeight + 1;
 	return Math.max(Math.max(treeDiameter(root.left), treeDiameter(root.right)), currentHeight);	
})();