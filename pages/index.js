import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import ListProducts from '../comps/ListProducts';
import styles from '../styles/Home.module.css'

const filterProducts = (products) => {
  const productsByName = {}, productsByState = {}, productsByCity = {};
  products.forEach(product => {
    const name = product.product_name;
    if (!productsByName[name])
      productsByName[name] = [];
    productsByName[name].push(product);
    const state = product.address.state;
    if (!productsByState[state])
      productsByState[state] = [];
    productsByState[state].push(product);
    const city = product.address.city;
    if (!productsByCity[city])
      productsByCity[city] = [];
    productsByCity[city].push(product);
  });
  return [
    { by: "Products", products: productsByName },
    { by: "State", products: productsByState },
    { by: "City", products: productsByCity }
  ];
}
export const getStaticProps = async () => {
  const API_URL = `https://assessment-edvora.herokuapp.com`;
  const res = await fetch(API_URL);
  const products = await res.json();
  return {
    props: {
      products,
      filteredProducts: filterProducts(products)
    }
  }
}

export default function Home({ products, filteredProducts }) {
  const [displayedProducts, setDisplayedProducts] = useState(filteredProducts);
  const handleFilterAction = (e) => {
    const filterBy = e.target.attributes.type.textContent,
    filterValue = e.target.outerText,
    productsUpdated = [];
    if (filterBy === "Products") {
      productsUpdated = products.filter(product => product.product_name === filterValue)
    } else if (filterBy === "City") {
      productsUpdated = products.filter(product => product.address.city === filterValue)
    } else {
      productsUpdated = products.filter(product => product.address.state === filterValue)
    }
    setDisplayedProducts(filterProducts(productsUpdated));
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src='/main.js'></script>
      </Head>
      <main>
        <aside>
          <span>
            Filters
          </span>
          <ul>
            {displayedProducts.map(filter =>
              <li key={filter.by}>
                {filter.by}
                {Object.keys(filter.products).length && <ul> {Object.keys(filter.products).map(name => <li type={filter.by} onClick={handleFilterAction} key={name}>{name}</li>)}</ul>}
              </li>
            )}
          </ul>
        </aside>
        <div>
          <h1>
            Edvora
          </h1>
          <p>Products</p>
          {!products.length && "There are no products"}
          {Object.values(displayedProducts[0].products).map(products => <ListProducts key={products[0].product_name} products={products} category={products[0].product_name} />)}
        </div>
      </main>
      <footer>
        Created by Mohamed Gad
      </footer>
    </div>
  )
}