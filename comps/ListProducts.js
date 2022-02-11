import Product from "./Product";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, FreeMode, Pagination } from "swiper";

const ListProducts = ({ products, category }) => {
    return (
        <div className="listing">
            <h2>
                {category}
            </h2>
            <div className="products">
                <Swiper slidesPerView="auto"
                    spaceBetween={30}
                    freeMode={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    modules={[Navigation,FreeMode, Pagination]}
                    className="mySwiper">
                    {products.map(product => <SwiperSlide key={product.date} ><Product product={product} /></SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
}
export default ListProducts;