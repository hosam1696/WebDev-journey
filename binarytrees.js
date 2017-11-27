/*
    CHAPTER 10
    Trees 
        are a commonly used data structure in computer science

        no li

        A tree is a set of nodes connected by edge

        the top node is called Root node

        the node following it called child nodes

        Binary Trees are special types of trees , restricts the number of child nodes to no more than two , have certain computational properties that makes them very efficient for many operation 

*/

// binary search tree is made up of nodes

class Node {
    constructor(data, left = null, right =null) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.count = 1;
    }

    show() {
        return this.data;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let n = new Node(data);

        if (this.root === null) {
            this.root = n;
        } else {
            let current = this.root;
            let parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current === null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current === null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }

    }

    // there are thrwith BSTee traversal functions used 
    // unorder, preorder,, postorder

    inOrder(node) {
        if (!(node == null)) {
            this.inOrder(node.left);
            console.log(node.show() + " ");
            this.inOrder(node.right);
        }
    }

    // BST tree has three types if searches

    /*
        searching for a specific value
        searching for the minimum value
        searching for the maximum value
    */

    getMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left
        }
        return current.data;
    }

    getMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if(data > current.data) {
                current = current.right;
            } else {
                current = current.left
            }
            if (current === null) {
                return -1
            }
        }

        return current
    }
}


let bst = new BST();

bst.insert(6);
bst.insert(8);
bst.insert(2);
bst.insert(9);

let inorder = bst.inOrder(bst.root);

bst.root.right

console.log(bst.root, bst.getMin())

console.log(bst.find(20))