const sort = (arr) => {
    for(let x = 0; x < arr.length; x++) {
        for(let y = x; y >= 1; y--) {
            if(arr[y] < arr[y-1]) {
                [arr[y],arr[y-1]] = [arr[y-1],arr[y]]
            } else {
                break
            }
        }
    }    
    return arr
}

sort(['b', 'f', 'c', 'a'])
