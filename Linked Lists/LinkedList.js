function Node(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}

function LinkedList() {
	this.head = null;
	this.tail = null;
}

LinkedList.prototype.addElementInfront = function (value) {
	const newNode = new Node(value, this.head, null);
	if (this.head) {
		this.head.prev = newNode;
	} else {
		this.tail = newNode;
	}
	this.head = newNode;
};

LinkedList.prototype.addElementAtBack = function (value) {
	const newNode = new Node(value, null, this.tail);
	if (this.tail) {
		this.tail.next = newNode;
	} else {
		this.head = newNode;
	}
	this.tail = newNode;
};

LinkedList.prototype.removeElementFromFront = function () {
	if (!this.head) {
		return null;
	} else {
		let val = this.head.value;
		this.head = this.head.next;
		if (this.head) {
			this.head.prev = null;
		} else {
			this.tail = null;
		}
		return val;
	}
};

LinkedList.prototype.removeElementFromBack = function () {
	if (!this.tail) {
		return null;
	} else {
		let val = this.tail.value;
		this.tail = this.tail.prev;
		if (this.tail) {
			this.tail.next = null;
		} else {
			this.head = null;
		}
		return val;
	}
};

LinkedList.prototype.searchInList = function (searchValue) {
	let currentNode = this.head;
	while (currentNode) {
		if (currentNode.value === searchValue) {
			return currentNode.value;
		}
		currentNode = currentNode.next;
	}
	return null;
};

LinkedList.prototype.indexOf = function (value) {
	const indexes = [];
	let index = 0;
	let currentNode = this.head;
	while (currentNode) {
		if (currentNode.value === value) {
			indexes.push(index);
		}
		currentNode = currentNode.next;
		index++;
	}
	return indexes;
};

// Tests

const ll = new LinkedList();
// ll.addElementInfront(20);
// ll.addElementInfront(10);

// ll.addElementAtBack(30);
// ll.addElementAtBack(40);

// console.log(ll.removeElementFromFront());
// console.log(ll.removeElementFromFront());

// console.log(ll.removeElementFromBack());
// console.log(ll.removeElementFromBack());

// console.log(ll.searchInList(30));
// console.log(ll.searchInList(50));

// console.log(ll.indexOf(40));
// console.log(ll.indexOf(10));

console.log(ll);
