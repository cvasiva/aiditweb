import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./frame-component2.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderButtons from "./SliderButtons";
interface Slide {
    id: number;
    title: string;
    tagline: string;
    image: string;
    buttons: ButtonProps[];
}
interface ButtonProps {
    id: number;
    text: string;
    link: string;
    type: string;
}
interface DemoSliderProps {
    data: Slide[];
    size: { width: number | undefined; height: number | undefined };
}
const BannerSlider: React.FC<DemoSliderProps> = ({ data, size }) => {
    return (
        <div className="d-flex justify-content-center w-100">
            <div className="w-100">
                <div className=" h-screen">
                    <ul className="h-full w-100 p-0">
                        <Swiper
                            navigation
                            pagination={{ type: "bullets", clickable: true }}
                            autoplay={false}
                            loop={false}
                            modules={[Autoplay, Navigation, Pagination]}
                        >
                            {data.map(({ id, image, tagline, title, buttons }) => (
                                <SwiperSlide key={id}>
                                    <div className={`${styles.mobileExperienceWrapper} shadow-lg rounded rounded-4`}>
                                        <div className={styles.mobileExperience} >
                                            <div className={styles.mobileExperienceBackground} />
                                            <div className={styles.seamlessExperienceParent}>
                                                <div className={styles.seamlessExperience}>
                                                    <h1 className={styles.deliverSeamlessMobileContainer}>
                                                        <p className={styles.deliverSeamlessMobileWebEx}>
                                                            <b>Enhance Digital Experiences</b>
                                                        </p>
                                                        <p className={styles.withOurApplication}>
                                                            with our development service
                                                        </p>
                                                    </h1>
                                                </div>
                                                <div className={styles.titleAndDescription} />
                                            </div>
                                            <div className={styles.reachCustomers}>
                                                <div className={styles.customerExperience}>
                                                    <div className={styles.knowMoreButton}>
                                                        <div className={styles.knowMoreContainer}>
                                                            <div className={styles.knowMore}>Know More</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.titleAndDescription1} />
                                            <div className={styles.titleAndDescription2} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default BannerSlider;
