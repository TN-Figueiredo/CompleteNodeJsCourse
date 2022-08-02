// Object property shorthand

const name = "Thiago";
const userAge = 32;

const user = {
  name,
  age: userAge,
  location: "Lagoa Santa",
};

console.log(user);

// Object destructuring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// const label = product.label;
// const stock = product.stock;

// const { label: productLabel, price, stock, salePrice } = product;

// console.log(productLabel);
// console.log(stock);
// console.log(salePrice);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
