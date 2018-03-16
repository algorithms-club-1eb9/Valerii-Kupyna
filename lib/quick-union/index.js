module.exports = class {
	constructor(length) {
        this.arr = [];
        this.countArr = [];
        this.fill(length);
    }    

    conected(connectToEl, connectedEl) {
        const currValue = this.arr[connectToEl];
        // for (let i = 0; i < this.arr.length; i++) {
        //     if (this.arr[i] === currValue) {
        //         this.arr.splice(i, 1, this.arr[connectedEl]);
        //     }
        // }

        this.arr.splice(connectToEl, 1, this.arr[connectedEl]);
    }
}