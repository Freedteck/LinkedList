// ********** Linked List **********

// A linked list will have a Head(First node) and Tail(Last node)
// Every Node contains (data and nextNode)
// The nextNode point to the node after the current Node
// If no node after the current node, then nextNode point to null

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
            return this.head
        }

        let currentNode = this.head
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode
        }
        currentNode.nextNode = node
        this.tail = node
        return (this.tail)
    }

    prepend(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
            return this.head
        }
        let current = this.head
        this.head = node
        this.head.nextNode = current
        
    }

    size() {
        let current = this.head
        let count = 0
        while (current) {
            count++
            current = current.nextNode
        }
        return count
    }

    headE() {
        return this.head.value
    }

    tailE() {
        return this.tail.value
    }

    at(index) {
        let position = 0 
        let current = this.head
        while (current) {
            if (index === position) {
                return current.value
            }
            current = current.nextNode
            position++
        }

    }

    pop() {
        let last = this.tail
        let current = this.head
        while (current) {
            if (last === current.nextNode) {
                current.nextNode = null
            }
            current = current.nextNode
        }
        return last
    }

    contains(value) {
        let currentNode = this.head
        while (currentNode) {
            if (currentNode.value === value) {
                return true
            }
            currentNode = currentNode.nextNode
        }
        return false
    }

    find(value) {
        let current = this.head
        let position = 0
        while (current) {
            if (value === current.value) {
                return position
            }
            current = current.nextNode
            position++
        }
        return "Value not found"
    }

    toString() {
        let currentNode = this.head
        let result = ''
        
        while (currentNode) {
            result += `( ${currentNode.value} ) -> `
            currentNode = currentNode.nextNode
        }
        return (result + 'null')
    }

    insertAt(value, index) {
        const node = new Node(value)
        let current = this.head
        let prevNode = null
        let position = 0
        let shifted = current.nextNode
        while (current) {
            if (index > this.size() - 1) {
                console.log(` Error: Index ${index} is Out of Bound`);
                break
            }
            if (index === 0) {
                this.head = node
                this.head.nextNode = current
                break
            } 
            if (index > 0 && index === position) {
                current = node
                prevNode.nextNode = current
                current.nextNode = shifted
            }
            prevNode = current
            current = current.nextNode
            shifted = prevNode.nextNode
            position++
        }
    }

    removeAt(index) {
        let current = this.head
        let prevNode = null
        let position = 0
        while (current) {
            if (index > this.size() - 1) {
                console.log(` Error: Index ${index} is Out of Bound`);
                break
            }
            if (index === 0) {
                this.head = current.nextNode
                break
            }
            if (index > 0 && index === position) {
                current = current.nextNode
                prevNode.nextNode = current
                break
            }
            prevNode = current
            current = current.nextNode
            position++
        }
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.nextNode = null
    }
}

const list = new LinkedList()
list.append(2)
list.append(3)
list.append(1)
list.append(5)
list.insertAt(9, 0)
list.insertAt(4, 1)
list.insertAt(4, 2)
list.insertAt(6, 5)
list.insertAt(6, 7)
list.removeAt(8)
console.log(list.toString());
console.log(list.size());