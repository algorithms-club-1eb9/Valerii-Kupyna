module.exports = class {

	constructor(arr) {
        this.arr = arr;
    }

    less(a, b) {
        return a > b;
    }

    swap(a, b, arr) {
        const zmin = arr[a];
		arr[a] = arr[b];
		arr[b] = zmin;
        
        return arr;
    }

    bubleSort () {
        let arr = this.arr.slice();

        for (let i = 0; i < arr.length; i++) {
            let isSwap = false;

            for (let j = 0; j < arr.length - 1; j++) {
                if (this.less(arr[j], arr[j + 1])) {
                    isSwap = true;
                    arr = this.swap(j, j + 1, arr);
                }
            }
            
            if (!isSwap) break;
        }
        return arr;
    }

    selectionSort(array) {
        let arr = array.slice();

        for (let i = 0; i < arr.length - 1; i++) {
            let min = i;

            for (let j = i + 1; j < arr.length; j++) {
                if (this.less(arr[min], arr[j])) {                 
                    min = j;
                }
            }

            this.swap(min, i, arr);
        }
        return  arr;
    }

    insertionSort(array) {
        const arr = array.slice();
        
        for (let i = 0; i < arr.length; i++) {
            const currVal = arr[i];
            for (let j = i - 1; j >= 0; j--) {
                if (this.less(arr[j], currVal)) {
                    this.swap(j + 1, j, arr);
                }
            }
        }

        console.log('finish', arr);
        return arr;
    }

    shellSort(array) {
        const arr = array;
        const stepArr = [];
        let k = 1;

        for (let i = 0; i < arr.length / 2; i++) {
            k = 3 * i + 1;
            if (k <= arr.length / 2) stepArr.unshift(k);
        }
        
        for (k; k > 0; k -= 3) {
           for (let i = k; i < arr.length; i = i + k) {
                for (let j = i; j > 0; j -= k) {
                    if (this.less( arr[j - k], arr[j])) {
                        this.swap( j - k, j, arr);
                    }
                }
           }
        }
        return arr;
    }
}