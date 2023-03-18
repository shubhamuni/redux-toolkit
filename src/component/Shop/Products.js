import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "A Product",
    price: 8,
    description: "anything we can write here for first product",
  },
  {
    id: "p2",
    title: "A Second Product",
    price: 8,
    description: "anything we can write here for second product",
  },
  {
    id: "p3",
    title: "A  Third Product",
    price: 10,
    description: "anything we can write here for third product",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
