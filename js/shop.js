// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
let products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

const total = 0;

// Exercise 1
function buy(id) {
    // // 1. Loop for to the array products to get the item to add to cart
    // // 2. Add found product to the cartList array
    // let findProduct = products.find((product) => {
    //     return product.id === id;
    // });

    // if (findProduct) {
    //     cartList.push(findProduct);
    // }

}

// Exercise 2


function cleanCart() {
    cartList = [];
    cart = [];
    printCart();
    countProduct();
}


// Exercise 3
function calculateTotalwithoutDiscount() {
    // Calculate total price of the cart using the "cartList" array
    // sin descuento
    let finalPrice = 0;
    for (let i = 0; i < cartList.length; i++) {
        finalPrice += cartList[i].price;
    }
    return (finalPrice);
};

function calculateTotalwithDiscount() {
    //con descuento
    let finalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        finalPrice += cart[i].subtotalWithDiscount;

    };
    return (finalPrice);
}



// // Exercise 4
function generateCart() {
    //     // Using the "cartlist" array that contains all the items in the shopping cart, 
    //     // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    //     cartList.forEach(function (product) {
    //         let validationCart = cart.find(function (item) {
    //             return item.id === product.id;
    //         });

    //         if (validationCart) {
    //             // El producto ya existe
    //             validationCart.quantity++;
    //             validationCart.subtotal += product.price;
    //             validationCart.subtotalWithDiscount += product.price;
    //         } else {
    //             // El producto no existe
    //             let cartProduct = {
    //                 id: product.id,
    //                 name: product.name,
    //                 price: product.price,
    //                 quantity: 1,
    //                 subtotal: product.price,
    //                 subtotalWithDiscount: product.price,
    //             };
    //             cart.push(cartProduct);
    //         }
    //     });

    //     let oilDiscount = applyPromotionsCartOil();
    //     let cakeDiscount = applyPromotionsCartCake();
    //     return cart;

}
// Exercise 5
function applyPromotionsCartOil(id) {
    // Apply promotions to each item in the array "cart"
    // comprar 3 o més oli, descompte de 10 euros.

    products.forEach(function (product) {
        if (product.id === 1) {
            cart.forEach(function (item) {
                if (item.id === 1 && item.quantity >= product.offer.number) {
                    item.subtotalWithDiscount -= ((item.subtotal * product.offer.percent) / 100);
                } else if (item.id === 1 && item.quantity < product.offer.number) {
                    item.subtotalWithDiscount = (product.price * item.quantity);
                };
            });
        };
    });
}

function applyPromotionsCartCake(id) {
    //compra de 10 o més Instant cupcake mixture el preu es rebaixa a 2/3 del total.

    products.forEach(function (product) {
        if (product.id === 3) {
            cart.forEach(function (item) {
                if (item.id === 3 && item.quantity >= product.offer.number) {
                    item.subtotalWithDiscount -= ((item.subtotalWithDiscount * product.offer.percent) / 100);
                } else if (item.id === 3 && item.quantity < product.offer.number) {
                    item.subtotalWithDiscount = (product.price * item.quantity);
                };
            });
        };
    });

}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const modal = document.getElementById("cartModal");
    const tbody = document.getElementById("cart_list");
    const totalPrice = document.getElementById("total_price");

    tbody.innerHTML = "";
    totalPrice.innerHTML = "";

    cart.forEach((item) => {

        let fila = document.createElement("tr");

        const productCell = document.createElement("th");
        productCell.setAttribute("scope", "row");
        productCell.textContent = item.name;

        const productPrice = document.createElement("td");
        productPrice.textContent = item.price.toFixed(2) + "€";
        const producQuantity = document.createElement("td");
        producQuantity.textContent = item.quantity;
        const totalPriceProduct = document.createElement("td");
        totalPriceProduct.textContent = item.subtotal.toFixed(2) + "€";
        const totalWithDiscount = document.createElement("td");
        totalWithDiscount.textContent = item.subtotalWithDiscount.toFixed(2) + "€"; //lo he añadido nuevo.

        fila.appendChild(productCell);
        fila.appendChild(productPrice);
        fila.appendChild(producQuantity);
        fila.appendChild(totalPriceProduct);
        fila.appendChild(totalWithDiscount);

        tbody.appendChild(fila);


    });
    const totalPriceDiscount = calculateTotalwithDiscount().toFixed(2);
    totalPrice.textContent = totalPriceDiscount + "€";
}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    let findProduct = products.find((product) => product.id === id);

    if (findProduct) {
        let validationCart = cart.find((item) => item.id === findProduct.id);
        if (validationCart) {
            // El producto ya existe
            validationCart.quantity++;
            validationCart.subtotal += findProduct.price;
            validationCart.subtotalWithDiscount = validationCart.subtotal;
        } else {
            // El producto no existe
            let cartProduct = {
                id: findProduct.id,
                name: findProduct.name,
                price: findProduct.price,
                quantity: 1,
                subtotal: findProduct.price,
                subtotalWithDiscount: findProduct.price,
            };
            cart.push(cartProduct);
        }
        if (findProduct.id === 1) {
            let oilDiscount = applyPromotionsCartOil();
        } else if (findProduct.id === 3) {
            let cakeDiscount = applyPromotionsCartCake();
        }
        let addProduct = countProduct();
    }

}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    const findProduct = products.find((product) => product.id === id);

    if (findProduct) {
        let validationCart = cart.find((item) => item.id === findProduct.id);
        if (validationCart) {
            // El producto ya existe
            validationCart.quantity--;
            validationCart.subtotal -= findProduct.price;
            validationCart.subtotalWithDiscount = validationCart.subtotal;
            if (validationCart.quantity == 0) {
                cart = cart.filter(item => item.id != validationCart.id);
            };
            if (findProduct.id === 1) {
                let oilDiscount = applyPromotionsCartOil();
            } else if (findProduct.id === 3) {
                let cakeDiscount = applyPromotionsCartCake();
            };
        };
        let removeProduct = countProduct();
    };

}

function open_modal() {
    generateCart();
    // addToCart();
    printCart();

}

//Extra exercice count_product
//addProducts and removeProducts function
function countProduct() {
    let countProduct = document.getElementById("count_product");
    let totalProducts = 0;

    for (let i = 0; i < cart.length; i++) {
        totalProducts += cart[i].quantity;
    }
    countProduct.textContent = totalProducts;
}
