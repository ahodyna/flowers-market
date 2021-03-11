const data = [
    {
        id: '1',
        img: 'https://cdn.shopify.com/s/files/1/0110/8685/6292/products/Bouq-4-a_1800x1800.jpg?v=1548657147',
        name: 'The Juliet',
        price: '12.99'
    },
]

export default {
    getAllProducts: function () {
        return data
    },
    createProduct: function (product) {
        console.log('ptoduct1: ' + product)
        product.id = 'a' + Math.ceil((Math.random() * 1000000))
        data.push(product)
        return product
    }
}

