module.exports = (sequance, searchEl) => {
    sequance.sort((a, b) => a - b >= 0 ? 1 : -1);
    let start = 0;
    let end = sequance.length - 1;

    while (start <= end) {
        const index = Math.floor((end + start) / 2);
        
       if (sequance[index] === searchEl) return index;

       if (sequance[index] < searchEl) {
           start = index + 1;      
        } else {
            end = index - 1;           
       }
    }

    return -1;
}
