const Node = require('../Node');

class BinaryTree {
    constructor(compare) {
        this._root = null;
        this.compare = compare;
    }

    add(key, value) {
        if (!this._root) {
            this._root = new Node(key, value);
        } else {
            this._addTo(this._root, key, value);
        }
    }

    _addTo(node, key, value) {
        if (this.compare(node.key, key)) {
            if (node._left) {
                this._addTo(node._left, key, value);
            } else {
                node._left = new Node(key, value);
            }
        } else {
            if (node._right) {
                this._addTo(node._right, key, value);
            } else {
                node._right = new Node(key, value);
            }
        }
    }

    find(key) {
        if (!this._root) return null;

        return this._findFrom(this._root, key);
    }

    _findFrom(node, key) {
        if (node.key === key) return node;
        if (!node._left && !node._right) return null;

        if (this.compare(node.key, key)) {
            if (node._left) {
                return this._findFrom(node._left, key);
            } else {
                return null;
            }
        } else {
            if (node._right) {
                return this._findFrom(node._right, key);
            } else {
                return null;
            }
        }
    }

    getMax() {
        if (!this._root) return null;

        return this._getMaxFrom(this._root);
    }

    _getMaxFrom(node) {
        return node._right ? this._getMaxFrom(node._right) : node;
    }

    getMin() {
        if (!this._root) return null;

        return this._getMinFrom(this._root);
    }

    _getMinFrom(node) {
        return node._left ? this._getMinFrom(node._left) : node;
    }

    remove(key) {
        const node =  this.find(key);

        if (node) {
        node._removed = true;
        }
    }

}

module.exports = BinaryTree;