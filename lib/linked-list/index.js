
module.exports = class {

	constructor(item) {
        this.firstElement = 0;
        this.size = 0;
        this.elementKey = 0;
        this.items = {};        
        this.push(item);
    }
    
    test() {
        console.log("Size:", this.size);
        console.log("elementKey:", this.elementKey);
        for (let key in this.items) {
            const value = this.items[key]
            console.log(key , value);
        }
    }

    push(value) {
        this.items[this.elementKey] = {}
        this.items[this.elementKey].value = value;
        this.items[this.elementKey].next = null;
        
        if (this.size === 0) {
            this.items[`${this.elementKey}`].priv = null;
        } else if (this.elementKey > 0) {
            this.items[this.elementKey].priv = this.get(this.size - 1).index;
            this.items[this.items[this.elementKey].priv].next = this.elementKey;   
        }
        this.size++;   
        this.elementKey++;   
    }

    insert(value, position) {
        if (position > this.size) {
            console.log(`this list haw only ${this.size} elements`);
        } else  if (position === this.size) {
            this.push(value);
        } else  if (position === 0) {
            this.unshift(value);
        } else {
            this.set(value, position);
        }
    }

    unshift(value) {
        let first = {};
        this.items[this.elementKey] = {};
        this.items[this.elementKey].value = value;
        this.items[this.elementKey].priv = null;
        this.items[this.elementKey].next = this.firstElement;
        this.items[this.firstElement].priv = this.elementKey;
        this.firstElement = this.elementKey;
        this.size++;                
        this.elementKey++;                
    }

    set(value, position) {
        if (position === 0) {
            this.unshift(value);
        } else if (position === this.size) {
            this.push(value);
        } else {
            const {currentItem, index} = this.get(position);
                    
            this.items[this.size] = {
                value,
                next: index,
                priv: this.items[index].priv
            };
            
            this.items[this.items[this.size].priv].next = this.size;    
            this.items[index].priv = this.size
            this.size++;
        }    
    }
    
    get(position, next = 0) {
        let count = 0;
        let {currentItem, index} = this.takeNext();    
       
        while(count <= position && next >= 0) {
            
            if (count === position) {
                return {currentItem, index};
            }

            if (count > position || currentItem.next === null) {
                return -1;
            }

            const currentValue = this.takeNext(currentItem.next);
            currentItem = currentValue.currentItem;
            index = currentValue.index;   

        count++;        
        }
    }

    takeNext(index = this.firstElement) {       
        return {currentItem: this.items[index], index};
    }

    remove(position) {
        if (position === 0) {
            this.shift() 
        } else if (position === this.size) {
            this.pop();
        } else {
            const {currentItem, index} = this.get(position);

            this.items[currentItem.priv].next = this.items[index].next;
            this.items[currentItem.next].priv = this.items[index].priv;
            const removedElement = this.items[index];
            
            delete this.items[index];
            this.size--;

            return removedElement;
        }

        
    }

    shift() {
        const removeElement = this.firstElement;

        this.firstElement = this.items[this.firstElement].next;
        this.items[this.firstElement].priv = null;

        const removedElement = this.items[removeElement];
        
        delete this.items[removeElement];
        this.size--;

        return removedElement;
    }

    pop() {
        const {currentItem, index} = this.get(this.size - 1);

        this.items[currentItem.priv].next = null;

        const removedElement = this.items[index];
        delete this.items[index];
        this.size--;

        return removedElement;
    }
}
