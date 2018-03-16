module.exports = class {
	constructor(length) {
        this.arr = [];
        this.countArr = [];
        this.fill(length);
    }

    fill(length) {
        this.arr.push(0);
        for (let i = 1; i <= length - 1; i++) {
            this.arr.push(i);
        }
    }

    conected(connectToEl, connectedEl) {
        const currValue = this.arr[connectToEl];
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === currValue) {
                this.arr.splice(i, 1, this.arr[connectedEl]);
            }
        }

        this.arr.splice(connectToEl, 1, this.arr[connectedEl]);
    }

    isConected(a, b) {
        return this.arr[a] === this.arr[b];
    }

    count() {
        this.setToCountArr();
        return this.countArr.length;
    }

    component(index) {
        this.setToCountArr();
        return this.countArr[index].length;
    }

    setToCountArr() {
        const testArr = this.arr.slice();
        for (let i = 1; i < testArr.length; i++) {
            const currValue = testArr.filter((el) => el === i );
            if (currValue.length > 1)
             this.countArr.push(currValue);
        }
    }
}