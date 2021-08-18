function BinarySearchTree(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
	if (value <= this.value) {
		if (!this.left) {
			this.left = new BinarySearchTree(value);
		} else {
			this.left.insert(value);
		}
	} else if (value > this.value) {
		if (!this.right) {
			this.right = new BinarySearchTree(value);
		} else {
			this.right.insert(value);
		}
	}
};

BinarySearchTree.prototype.contains = function (value) {
	if (value === this.value) {
		return true;
	} else if (value < this.value) {
		if (!this.left) {
			return false;
		} else {
			return this.left.contains(value);
		}
	} else if (value > this.value) {
		if (!this.right) {
			return false;
		} else {
			return this.right.contains(value);
		}
	}
};

BinarySearchTree.prototype.depthFirstTraversal = function (iterator, order) {
	if (order === 'pre-order') {
		iterator(this.value);
	}
	if (this.left) {
		this.left.depthFirstTraversal(iterator, order);
	}
	if (order === 'in-order') {
		iterator(this.value);
	}
	if (this.right) {
		this.right.depthFirstTraversal(iterator, order);
	}
	if (order === 'post-order') {
		iterator(this.value);
	}
};

BinarySearchTree.prototype.breadthFirstTraversal = function (iterator) {
	let queue = [this];
	while (queue.length) {
		let treeNode = queue.shift();
		iterator(treeNode);
		if (treeNode.left) {
			queue.push(treeNode.left);
		}
		if (treeNode.right) {
			queue.push(treeNode.right);
		}
	}
};

BinarySearchTree.prototype.getMinValue = function () {
	if (this.left) {
		return this.left.getMinValue();
	} else {
		return this.value;
	}
};

BinarySearchTree.prototype.getMaxValue = function () {
	if (this.right) {
		return this.right.getMaxValue();
	} else {
		return this.value;
	}
};

function log(value) {
	console.log(value);
}

function log_value(node) {
	console.log(node.value);
}

// Tests
const bst = new BinarySearchTree(10);

bst.insert(5);
bst.insert(15);
bst.insert(20);
bst.insert(12);

//                  10
//            5             15
//                      12       20

// console.log(bst.contains(15));
// console.log(bst.contains(30));

// bst.depthFirstTraversal(log, 'in-order');
// bst.depthFirstTraversal(log, 'pre-order');
// bst.depthFirstTraversal(log, 'post-order');

// bst.breadthFirstTraversal(log_value);

// console.log(bst.getMaxValue());
// console.log(bst.getMinValue());

console.log(bst); 
