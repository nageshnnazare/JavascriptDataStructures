function HashNode(key, value, next) {
	this.key = key;
	this.value = value;
	this.next = next || null;
}

function HashTable(size) {
	this.buckets = Array(size);
	this.numBuckets = this.buckets.length;
}

HashTable.prototype.hash = function (key) {
	let total = 0;
	let index = 0;
	for (index = 0; index < key.length; index++) total += key.charCodeAt(index);

	return total % this.numBuckets;
};

HashTable.prototype.insert = function (key, value) {
	let index = this.hash(key);
	if (!this.buckets[index]) {
		this.buckets[index] = new HashNode(key, value);
	} else if (this.buckets[index].key === key) {
		this.buckets[index].value = value;
	} else {
		let currNode = this.buckets[index];
		while (currNode.next) {
			if (currNode.next.key === key) {
				currNode.next.value = value;
				return;
			}
			currNode = currNode.next;
		}
		currNode.next = new HashNode(key, value);
	}
};

HashTable.prototype.get = function (key) {
	let index = this.hash(key);
	if (!this.buckets[index]) {
		return null;
	} else {
		let currNode = this.buckets[index];
		while (currNode) {
			if (currNode.key === key) {
				return currNode.value;
			}
			currNode = currNode.next;
		}
		return null;
	}
};

HashTable.prototype.retrieveAll = function () {
	let allNodes = [];
	let index = 0;
	for (index = 0; index < this.numBuckets; index++) {
		let currNode = this.buckets[index];
		while (currNode) {
			allNodes.push(currNode);
			currNode = currNode.next;
		}
	}
	return allNodes;
};

// Tests

const hashtable = new HashTable(30);

// console.log(hashtable.hash('Becca'));

hashtable.insert('Dean', 'dean@gmail.com');
hashtable.insert('Megan', 'megan@gmail.com');
hashtable.insert('Dane', 'dane@gmail.com');
// console.log(hashtable.buckets[16]);

// update the values for the keys
// hashtable.insert('Dean', 'dean@yahoo.com');
// console.log(hashtable.buckets[16]);

// console.log(hashtable.get('Dane'));
// console.log(hashtable.get('Norm'));

console.log(hashtable.retrieveAll());

// console.log(hashtable);
