const name = 'Diyor'
const userAge = 22

const user = {
    name, userAge, location:'Philadelphia'
}

console.log(user)


const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label: productLabel, stock=10, rating=5} = product
console.log(productLabel)
console.log(stock)
console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)