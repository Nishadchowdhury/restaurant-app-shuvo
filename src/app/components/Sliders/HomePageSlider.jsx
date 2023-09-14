// "use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade, Grid } from "swiper/modules";
import Image from "next/image";



function HomePageSlider() {

    const imagesForSlider = [
        "https://images.unsplash.com/photo-1630409351217-bc4fa6422075?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1624384463428-d11589d2a297?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ];

    return (


        <div className="rounded-3xl overflow-hidden">


            <div className="w-full" >
                <Swiper
                    slidesPerView={2}
                    grid={{
                        rows: 1,
                        fill: 'row'
                    }}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                        dynamicBullets: false,
                    }}
                    navigation={true}
                    modules={[Grid, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {imagesForSlider &&
                        imagesForSlider.map(image => (
                            <SwiperSlide className="rounded-3xl overflow-hidden bg-blue-600" key={image}>
                                <div className="w-full h-[200px] lg:h-[200px] overflow-hidden flex items-center justify-center ">
                                    <Image
                                        src={imagesForSlider[0]}
                                        fill
                                        alt="sliderImage"
                                        className="w-full h-auto  hover:scale-105 transition-all object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    )
}
export default HomePageSlider