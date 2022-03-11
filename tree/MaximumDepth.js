(function maximumDepth(root) {

	if(root === null) return 0;
	return Math.max(maximumDepth(root.left),maximumDepth(root.right)) + 1;
})();//pass tree's root from here