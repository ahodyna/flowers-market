const data = [
    {
        id: '1',
        img: 'https://cdn.shopify.com/s/files/1/0110/8685/6292/products/Bouq-4-a_1800x1800.jpg?v=1548657147',
        name: 'The Juliet',
        price: '12.99',
        description: 'Gift your favorite person a vibrant pink-hues sure to brighten up their day. Due to the limited availability of our stocks actual order may vary from the product photo.',
    },
    {
        id: 'a3d',
        img: 'https://cdn.shopify.com/s/files/1/0110/8685/6292/products/pinkspringbasket_1800x1800.jpg?v=1611794175',
        name: 'The Virginia',
        price: '15.99',
        description: 'Gift your favorite person a vibrant pink-hues sure to brighten up their day. Due to the limited availability of our stocks actual order may vary from the product photo.',
    },
    {
        id: 'a5',
        img: 'https://cdn.shopify.com/s/files/1/0110/8685/6292/products/valentines_bouquet_1_WEB_1800x1800.jpg?v=1580953228',
        name: 'The Amore',
        price: '19.99',
        description: 'Gift your favorite person a vibrant pink-hues sure to brighten up their day. Due to the limited availability of our stocks actual order may vary from the product photo.',
    }
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
    },
    getProductById: function (id){
       return data.find(elem => elem.id === id)
    }
}

