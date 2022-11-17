const sort = (arr) => {
    let isSorted = false
    while(!isSorted) {
        [isSorted] = bubble(arr)
    }
    return arr
}

const bubble = (arr) => {
    let swaps = 0
    for(i = 0, j = 1; i < arr.length - 1; i++, j++) {
        if(arr[i] > arr[j]) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            swaps++            
        }
    }
    return [swaps, arr]
}

sort(['a', 'c', 'b'])
