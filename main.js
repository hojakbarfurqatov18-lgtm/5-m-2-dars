
alert(`Szda hozir random son chqadi`)

let num = Math.floor(Math.random() * 100)

alert(`sizning random son; ${num}  `)


let result = confirm(`biz 2 ga kopaytirmoqchimiz va bolmoqchimiz`)



if (result) {
    alert(`sizning ${num} siznning soningizni 2 ga kopaytirsa natija ${num * 2}
        2 ga bolsa esa ${num / 2}`
    )
}

else{
    alert(`Nmaga otmenani bostingiz`)
}