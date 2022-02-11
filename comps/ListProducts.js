import Product from "./Product";

const ListProducts = ({products, category}) => {
    return (
        <div className  ="listing">
            <h2>
                {category}
            </h2>
            <div className="products">                
                {products.map(product => <Product key={product.date} product={product}/>) }
            </div>
        </div>
    );
}
export default ListProducts;