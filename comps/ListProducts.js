import Product from "./Product";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

const ListProducts = ({ products, category }) => {
    return (
        <div className="listing">
            <h2>
                {category}
            </h2>
            <div className="products">
                <Swiper slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    navigation
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper">
                    {products.map(product => <SwiperSlide key={product.date} ><Product product={product} /></SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
}
export default ListProducts;