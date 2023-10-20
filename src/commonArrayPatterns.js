const shoppingCart = [
    {id: 1, product: "HDMI Cable", price: 4},
    {id: 2, product: "Easy Bake Oven", price: 28},
    {id: 3, product: "Peach pie", price: 6.5},
];

//adding to array
[...shoppingCart, {id: 4, product: "Coffee Mug", price: 7.99}];   //...shoppingCart is the spread operator used to make a copy of the object

//removing an element
shoppingCart.filter((item) => item.id !== 2);

//updating all array elements
//MAP MAKES A COPY OF EVERY ELEMENT
shoppingCart.map((item) => {
    return{
        ...item,
        product: item.product.toLowerCase(),
    };
});

//modifying a particular element in an array
shoppingCart.map((item) => {
    if(item.id === 3) {
        return {...item, price: 10.99};
    }else{
        return item;
    }
})