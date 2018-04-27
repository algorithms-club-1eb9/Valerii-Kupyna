module.exports = class {
    constructor() {
        this.rez = [];
    }

    push(value) {
        this.rez.push(value);
        this.buble(this.rez.length - 1)
    }

    buble(index) {
        let element = this.rez[index];
        let currentIndex = index;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex + 1) / 2) - 1;
            const parent = this.rez[parentIndex];

            if (parent >= element) break;

            this.rez[parentIndex] = element;
            this.rez[currentIndex] = parent;

            currentIndex = parentIndex;
        }
    }

    getSize() {
        return this.rez.length;
    }

    pop() {
        const result = this.rez[0];
        const end = this.rez.pop();

        if (this.rez.length > 0) {
            this.rez[0] = end;
            this.sinkDown(0);
        }
        return result;
    }

    sinkDown(index) {
        let n = index;
        const length = this.rez.length,
             element = this.rez[n],
             elemScore = element;

        while (true) {
            const child2N = (n + 1) * 2;
            const child1N = child2N - 1;

            const swap = null;

            if (child1N < length) {
                const child1 = this.rez[child1N];
                const child1Score = child1;

                if (child1Score < elemScore)
                    swap = child1N;
            }

            if (child2N < length) {
                const child2 = this.rez[child2N];
                const child2Score = child2;

                if (child2Score < (swap == null ? elemScore : child1Score))
                    swap = child2N;
            }

            if (swap == null) break;

            this.rez[n] = this.rez[swap];
            this.rez[swap] = element;
            n = swap;
        }
    }

    remove(el) {
        const length = this.getSize();
        let found = false;
        for (let i = 0; i < length; i += 1) {
            if (this.rez[i] === el) {
                found = true;
                const end = this.rez.pop();
                if (i === length - 1) break;
                this.rez[i] = end;
                this.buble(i);
                this.sinkDown(i);
                break;
            }
        }
        return found ? el : undefined;
    }

    getRez() {
        console.log( this.rez)
        return this.rez;
    }
}
