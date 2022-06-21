import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";
import useStyles from "./styles";

// const products = [
//   { id: 1, name: 'Mayo', description: 'Mayo Sauce', price:'₹160', image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg' },
//   { id: 2, name: 'Tandoori Mayo', description: 'Tandoori Sauce', price:'₹165', image:'https://drive.google.com/file/d/1YO0m0rBuj2pVXXkJ1ky_PRJpSFfEkKZL/view?usp=sharing' },
//   { id: 3, name: 'Ketchup', description: 'Sauce Description', price:'₹135', image:'https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg' },
//   { id: 4, name: 'Tamarind Sauce', description: 'Sauce Description', price:'₹135', image:'https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg' },
//   { id: 5, name: 'Schezwan', description: 'Sauce Description', price:'₹150', image:'https://drive.google.com/file/d/1b1BC1DoLGYQdjOpzZgOxl8YChwd-Ct-v/view?usp=sharing' },
//   { id: 6, name: 'Pizza Pasta Sauce', description: 'Sauce Description', price:'₹150', image:'https://drive.google.com/file/d/1rAeyXubBbTCKLLG-cxO8RvscZOwmbDAx/view?usp=sharing' },
// ];

const Products = ({ products, onAddToCart }) => {
const classes = useStyles();
if (!products.length) return <p>Loading...</p>;

  return (
  <main className={classes.content}>
    <div className={classes.toolbar} />
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={6}>
          <Product product={product} onAddToCart={onAddToCart} />
        </Grid>
      ))}
    </Grid>
  </main>
  );
};

// const Products = () => {
//   const classes = useStyles();
//   return(
//   <div>
//     <Grid container justify="center" spacing={4}>
//       {products.map((product) => {
//         <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
//           <Product product={product} />
//     </Grid>;
//       })}
//     </Grid>
//   </div>,
//   )
// };

export default Products;
