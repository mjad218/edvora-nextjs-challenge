import Product from "./Product";

const ListProducts = ({products, category}) => {
    return (
        <div>
            <h2>
                {category}
            </h2>
            <div className="products">
                {products.map(product => <Product product={product}/>) }
            </div>
        </div>
    );
}
export default ListProducts;