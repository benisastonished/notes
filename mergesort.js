const sort = (arr) => {
    if(arr.length === 1) return arr
    let mid = Math.floor(arr.length / 2)
    let l = sort(arr.slice(0, mid)) 
    let r = sort(arr.slice(mid)) 
    return merge(l, r)
}

const merge = (l, r) => {
    let result = [], i = 0, j = 0
    while(i < l.length && j < r.length) {
        let lc = l[i]
        let rc = r[j]
        if(lc < rc) {
            result.push(lc)
            i++
        } else if(lc > rc) {
            result.push(rc)
            j++
        } else {
            result.push(lc, rc)
            i++, j++
        }        
    }
    if(i < l.length) result.push(...l.slice(i))
    if(j < r.length) result.push(...r.slice(j))
    return result
}

sort(['c', 'a', '0'])
