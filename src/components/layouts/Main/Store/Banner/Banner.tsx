"use client"
import { ArrowLeft, ArrowRight } from "lucide-react"

import styles from './banner.module.scss'
import clsx from "clsx"
import { FC, memo, useCallback, useEffect, useRef } from "react"
import ButtonSet from "../../../../ui/elements/button/ButtonSet"
import { useActions, useAppSelector } from "../../../../../hooks"
import { List } from "../../../../ui/list/List"
import { Item } from "../../../../ui/list/item/Item"
import { bannerApi } from "../../../../../redux/services/BannerService"

import SkeletonBanner from "../../../../ui/elements/skeleton/SkeletonBanner"
import ImageR from "../../../../ui/assets/image/Image"

const Banner: FC = () => {
    const { data: images, isLoading: isLoadingImage } = bannerApi.useFetchAllImagesQuery(10,{
        skip: false
    });

    
    const { nextSlide, prevSlide, setNull, stopStartScrolling } = useActions()
    const { currentMove, isLoadingScroll } = useAppSelector(state => state.bannerReduser);

    const refImageContainer = useRef<HTMLUListElement | null>(null)
    const refImage = useRef<HTMLImageElement | null>(null)

    const onPrevMove = useCallback(() => {
        if(!isLoadingScroll) {
            stopStartScrolling(true)
            prevSlide('prev')
        }
    }, [isLoadingScroll, stopStartScrolling, prevSlide])

    const onNextMove = useCallback(() => {
        if (!isLoadingScroll) {
            stopStartScrolling(true);
            nextSlide('next');
        }
    }, [isLoadingScroll, stopStartScrolling, nextSlide]);

    useEffect(() => {
        if(currentMove && refImage.current && refImageContainer.current) {
            const moving = refImage.current.width * (currentMove === "next" ? 1 : -1);
            refImageContainer.current.scrollBy({
                left: moving,
                behavior: 'smooth'
            });

            const timeout = setTimeout(() => {
                stopStartScrolling(false);
                setNull();
            }, 800)

            return () => {
                clearTimeout(timeout);
            }
        }
    }, [currentMove, stopStartScrolling, setNull])

    useEffect(() => {
        console.log(images)
    }, [images])


    return (
        <div className={clsx(styles.sliderContainer, "banner__wrapper")}>
            <div className={styles.sliderWrapper}>
            {isLoadingImage ? (
                <SkeletonBanner />
            ) : (
                <>
                    <ButtonSet
                        onClick={onPrevMove}
                        className={clsx(
                            styles.moveSliderPrev,
                            styles.moveButtonSlider
                        )}
                        buttonType="btnV4"
                    >
                        <ArrowLeft />
                    </ButtonSet>
                    <List
                        items={images}
                        ref={refImageContainer}
                        className={clsx("sliderItems", styles.sliderImage)}
                        mapItems={(item) => (
                            <Item className={styles.sliderItemsImageContainer}>
                                <ImageR 
                                    ref={refImage} 
                                    src={item.url} 
                                    alt="" 
                                    width={1360}
                                    height={136}
                                />
                            </Item>
                        )}
                    />
                    <ButtonSet
                        onClick={onNextMove}
                        className={clsx(
                            styles.moveSliderNext,
                            styles.moveButtonSlider
                        )}
                        buttonType="btnV4"
                    >
                        <ArrowRight />
                    </ButtonSet>
                </>
                )}
            </div>
        </div>
    );
};

export default memo(Banner);