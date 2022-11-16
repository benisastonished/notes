var lengthOfLongestSubstring = function(s) {
    let curss = '', longestss = '', seen = new Map
    for(let i = 0, curr; curr = s[i], i < s.length; i++) {
        if(!seen.has(curr)) {
            seen.set(curr, i)
            curss += curr
            continue
        }

        if(curss.length > longestss.length) {
            longestss = curss
        }
        curss = s.slice(seen.get(curr) + 1, i + 1)
        for([k] of seen) {
            seen.delete(k)
            if(k === curr) break
        }
        seen.set(k, i)
    }  
    return curss.length > longestss.length ? curss.length : longestss.length
}
