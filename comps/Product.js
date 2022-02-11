const Product = ({product}) => {
    return (
        <div className="product">
            <div className="info"> 
                <img src={product.image} />
                <div> 
                    <h3>
                        {product.product_name}
                    </h3>
                    <span className="brand"> 
                        {product.brand_name}
                    </span>
                    <span className="price">
                       $ {product.price}
                    </span>
                </div>
            </div>
            <div className="meta"> 
                <div> 
                    <span className="location" > 
                        Location: {product.address.state + ", " + product.address.city }
                    </span>
                    <span className="date" > 
                        Date: {new Date(product.date).toDateString()}
                    </span>
                </div>
                <p className="description">
                    {product.discription}
                </p>
            </div>
        </div>
    );
}
export default Product;