class BinaryTreeNode {
    constructor(key, value) {
        this.key = key;
        this.value = value ? value : null;
        this._left = null;
        this._right = null;
        this._removed = false;
    }
}

module.exports = BinaryTreeNode;