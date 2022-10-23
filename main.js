let heart = document.querySelectorAll('.fa-heart')
let price = document.querySelectorAll('.nmbr')
let delet = document.querySelectorAll('.fa-trash')
let plus = document.querySelectorAll('.plus')
let moin = document.querySelectorAll('.moin')
let total = document.querySelector('#total')
let arr = []
console.log(Array.from(price))
let divObjOne = {
    heart: false,
    price: 2500,
    delete: false,
    quantity:0
}
let divObjTwo = {
    heart: false,
    price: 1500,
    delete: false,
    quantity:0
}
let divObjThree = {
    heart: false,
    price: 4500,
    delete: false,
    quantity:0
}
arrObjs = [divObjOne, divObjTwo, divObjThree]

if (localStorage.getItem('items')) {
    arrObjs=JSON.parse(localStorage.getItem('items'))
}


console.log(arrObjs)

if (localStorage.getItem('items')) {
    arr=JSON.parse(localStorage.getItem('items'))
}
// arr.forEach(e => {
    
// })
heart.forEach(e => {
    
    e.addEventListener('click', () => {
        e.style.color = 'red'
            e.heart = true
            // localStorage.setItem('heart',JSON.stringify(e.getAttribute('data-done')))
        // arr.push(e.getAttribute('data-done'))
        // console.log(arr)
    })
    addInfo(e)
})
function addInfo(ok) {
    localStorage.setItem('items',JSON.stringify(ok))
}



delet.forEach(e => {
    e.addEventListener('click',() => {
        e.parentElement.style.display = 'none'
    })
    window.localStorage.clear()
});

plus.forEach(e => {
    e.addEventListener('click', () => {
        let num
            num = parseInt(e.parentElement.children[6].textContent)
            e.parentElement.children[6].textContent=num+1
            total.textContent=parseInt(total.textContent)+parseInt(e.parentElement.children[3].textContent)
        num++

    })
})
moin.forEach(e => {
    e.addEventListener('click', () => {
        let num
        num = parseInt(e.parentElement.children[6].textContent)
            if(total.textContent>0&&total.textContent>=parseInt(e.parentElement.children[3].textContent)&&num>0){
            e.parentElement.children[6].textContent = num - 1
            total.textContent = parseInt(total.textContent) - parseInt(e.parentElement.children[3].textContent)
        }
        num--
    })
})

console.log(total)