module.exports = (sequance, searchEl) => {
    return binary(sequance, searchEl);

    // let start = 0;
    // let end = sequance.length;
    // let mid = Math.round(sequance.length / 2);

    // while() {
    //     if (sequancep[min] < el) start = mid + 1;
    //     if (sequancep[mid] > el) start = mid - 1;
    // }

    // mid = (end - start)
}

function binary(arr, searchEl) {
    const index = Math.round(arr.length / 2);

    console.log(arr);    
    console.log(searchEl, arr[index]);    

    if (arr[index] === searchEl) {
        console.log('return index ', arr[index - 1]);
     return arr[index];
    };
    if (arr.length < 1) {
        console.log("return -1;");
        return -1;
    }
    if (arr[index] > searchEl) binary(arr.slice(0, index), searchEl);
    if (arr[index] < searchEl) binary(arr.slice(index, arr.length), searchEl);


}