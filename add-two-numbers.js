function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = (l1, l2) => {
    let carry = 0, result = null, head = null

    const walk = (curr1, curr2) => {
        if(curr1 == null && curr2 == null) {
            if(carry) result.next = new ListNode(1)
            return
        }

        let digit = 0
        let sum = (curr1?.val ?? 0) + (curr2?.val ?? 0) + carry
        
        if(sum < 10) {
            digit = sum
            carry = 0
        } else {
            digit = (sum % 10)
            carry = 1
        }
        
        let newNode = new ListNode(digit)        

        if(!result) 
            head = result = newNode            
        else {
            result.next = newNode
            result = newNode   
        }

        walk(curr1?.next, curr2?.next) 
    }
    
    walk(l1, l2)
    return head
}

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

console.log(addTwoNumbers(l1, l2))
